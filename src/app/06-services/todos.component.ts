import { TodosService } from "./todos.service";

export class TodosComponent {

    todos: any[] = [];
    message: string = '';

    constructor(private service: TodosService) {}

    ngOnInit() {
        this.service.getTodos().subscribe(data => this.todos = data);
    }

    add() {
        var newTodo = {title: 'Todo1'};
        this.service.add(newTodo).subscribe(
            data => this.todos.push(data),
            err => this.message = err.message
        );
    }

    delete(id: number) {
        if(confirm('Are you sure?')) {
            this.service.delete(id).subscribe();
        }
    }

}