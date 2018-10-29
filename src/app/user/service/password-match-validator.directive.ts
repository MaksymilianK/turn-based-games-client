import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
    return form.get('password').value === form.get('repeatPassword').value ? null : {'passwordMatch': false};
};
