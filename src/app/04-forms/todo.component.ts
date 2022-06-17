import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class TodoComponent {
    public form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['']
        });
    }

}