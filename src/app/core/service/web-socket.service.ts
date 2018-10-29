import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

@Injectable()
export class WebSocketService {

    private client: Stomp.Client;

    connect(): void {
        let sockJS = new SockJS('http://localhost:8080/websocket-api');
        let stomp = Stomp.over(sockJS);
    }

    subscribe<T>(destination: string): Observable<T> {
        return new Observable(observer => {
            let subscription = this.client.subscribe("http://localhost:8080/" + destination, message => observer.next(JSON.parse(message.body)));

            return function unsubscribe() {
                subscription.unsubscribe();
            };
        });
    }

    send(destination: string, message: Object): void {
        this.client.send(destination, {}, JSON.stringify(message));
    }
}
