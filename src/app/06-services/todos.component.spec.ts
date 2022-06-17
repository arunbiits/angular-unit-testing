import { TodosComponent } from "./todos.component";
import { TodosService } from "./todos.service";
import {Observable, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let service: TodosService;

    beforeEach(() => {
        let httpSpy = jasmine.createSpyObj('',{get: of({})});
        service = new TodosService(httpSpy);
        component = new TodosComponent(service);
    });

    it('should fetch and assign the list of todos from server', () => {
        let todos = [1,2,3];
        spyOn(service, 'getTodos').and.returnValue(of(todos));
        
        component.ngOnInit();
        
        expect(component.todos).toBe(todos);
        expect(component.todos.length).toBe(3);
    });

    it('should call the server to store the new todo', () => {
        let spy = spyOn(service, 'add').and.returnValue(of([]));

        component.add();

        expect(spy).toHaveBeenCalled();
    });

    it('should have added the newtodo to the existing todo list', () => {
        let todo = {id:1, title: 'Todo1'};
        let initialSize = component.todos.length;
        spyOn(service, 'add').and.returnValue(of(todo));

        component.add();

        expect(component.todos.length).toBe(initialSize + 1);
    });

    it('should set the message property when the server returns some error', () => {
        let errorMsg = 'Bad Request';
        spyOn(service, 'add').and.returnValue(throwError(() => new Error(errorMsg)));

        component.add();

        expect(component.message).not.toBe('');
        expect(component.message).toContain(errorMsg);
    });
    
    it('should make a call to the server to delete the todo when user confirms', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        let spy = spyOn(service, 'delete').and.returnValue(of({}));

        component.delete(1);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(1);
    });
    
    it('should NOT make a call to the server to delete the todo when user cancels', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        let spy = spyOn(service, 'delete').and.returnValue(of({}));

        component.delete(1);

        expect(spy).not.toHaveBeenCalled();
        expect(spy).not.toHaveBeenCalledWith(1);
    });



});