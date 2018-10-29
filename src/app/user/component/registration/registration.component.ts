import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserCreateModel } from '../../model/user-create-model';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { passwordMatchValidator } from '../../service/password-match-validator.directive';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    private form: FormGroup;

    private error: string = null;

    constructor(private userService: UserService, private router: Router, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            nick: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(15)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(75)
            ]],
            repeatPassword: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(75)
            ]]
        }, {validator: passwordMatchValidator});
    }

    registerNewUser(): void {
        if (this.form.valid) {
            this.error = null;
            this.userService.create(new UserCreateModel(
                this.form.get('nick').value,
                this.form.get('email').value,
                this.form.get('password').value
            )).subscribe(
                text => this.router.navigateByUrl(''),
                (error: HttpErrorResponse) => {
                    if (error.error instanceof ErrorEvent) {
                        this.error = 'Something went wrong. Try again or contact us.'
                    } else {
                        this.error = error.error;
                    }
                }
            );
        } else {
            this.error = 'The form is invalid. Please follow the instructions and fill the form correctly.';
            if (!this.form.errors['passwordMatch']) {
                this.error += ' Passwords do not match!';
            }
        }
    }
}
