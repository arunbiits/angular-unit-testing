import { FormBuilder } from "@angular/forms";
import { TodoComponent } from "./todo.component";

describe('TodoComponent', () => {

    let component: TodoComponent;

    beforeEach(() => {
        component = new TodoComponent(new FormBuilder());
    });

    it('should create a form with 2 controls', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });
    
    it('should make the name control madatory', () => {
        let nameControl = component.form.get('name');

        nameControl?.setValue('');
        
        expect(component.form.valid).toBeFalsy();
    });
});