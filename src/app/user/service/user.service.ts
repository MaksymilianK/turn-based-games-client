import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../shared/model/page';
import { UserCreateModel } from '../model/user-create-model';
import { TextResponse } from '../../shared/model/text-response';
import { UserUpdateModel } from '../model/user-update-model';
import { UserRoleUpdateModel } from '../model/user-role-update-model';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../core/model/user';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {}

    logIn(nick: string, password: string): Observable<TextResponse> {
        return this.httpClient.post<TextResponse>('api/login', {}, {params: {'username': nick, 'password': password}});
    }

    logOut(): Observable<TextResponse> {
        return this.httpClient.post<TextResponse>('api/logout', {});
    }

    get(id: number): Observable<User> {
        return this.httpClient.get<User>('api/users/' + id);
    }

    getPage(): Observable<Page<User>> {
        return this.httpClient.get<Page<User>>('api/users');
    }

    getAdministration(): Observable<User[]> {
        return this.httpClient.get<User[]>('api/users/administration');
    }

    create(userCreateModel: UserCreateModel): Observable<TextResponse> {
        return this.httpClient.post<TextResponse>('api/users', userCreateModel);
    }

    update(id: number, userUpdateModel: UserUpdateModel): Observable<HttpResponse<any>> {
        return this.httpClient.patch<any>('api/users/' + id, userUpdateModel);
    }

    updateRole(id: number, userRoleUpdateModel: UserRoleUpdateModel): Observable<any> {
        return this.httpClient.patch<any>('api/users/' + id, userRoleUpdateModel);
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete<any>('api/users/' + id);
    }
}
