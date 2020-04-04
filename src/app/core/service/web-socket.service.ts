import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SockJS } from 'sockjs-client';
import { Client, Message } from '@stomp/stompjs';

@Injectable()
export class WebSocketService {

    private client: Client;

    connect(): void {
        const sockJS = new SockJS('http://localhost:8080/websocket-api');
        this.client = new Client(sockJS);
    }

    subscribe<T>(destination: string): Observable<T> {
        return new Observable(observer => {
            const subscription = this.client.subscribe(
              'http://localhost:8080/' + destination,
              message => observer.next(JSON.parse(message.body))
            );

            return function unsubscribe() {
                subscription.unsubscribe();
            };
        });
    }

    send(destination: string, message: object): void {
        this.client.publish({destination, body: JSON.stringify(message)});
    }
}
