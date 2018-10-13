import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserCreateModel } from '../../model/user-create-model';
import { UserService } from '../../service/user.service';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    private form: FormGroup;

    constructor(private userService: UserService, formBuilder: FormBuilder) {
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
        });
    }

    registerNewUser(): void {
    //    if (this.form.valid && this.form.get('password').value === this.form.get('repeatPassword').value) {
            this.userService.create(new UserCreateModel(
                this.form.get('nick').value,
                this.form.get('email').value,
                this.form.get('password').value
            )).subscribe(d => console.log(d));
        //}
    }
}
