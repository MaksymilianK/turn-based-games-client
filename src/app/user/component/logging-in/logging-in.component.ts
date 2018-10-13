import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';

@Component({
    templateUrl: './logging-in.component.html',
    styleUrls: ['./logging-in.component.scss']
})
export class LoggingInComponent {

    private form: FormGroup;

    constructor(private userService: UserService, private router: Router, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            nick: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(15)
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(75)
            ]]
        });
    }

    logIn(): void {
        //if (this.form.valid) {
            this.userService.logIn(this.form.get('nick').value, this.form.get('password').value).subscribe(
                response => {
                    console.log(response);
                    this.redirectToHome();
                },
                error => console.log(error)
            );
        //}
    }

    logInAsGuest(): void {
        this.userService.logIn('guest', '').subscribe(
            response => {
                console.log(response);
                this.redirectToHome();
            },
            error => console.log(error)
        );
    }

    private redirectToHome(): void {
        this.router.navigate(['']);
    }
}
