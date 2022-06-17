import { HttpClient } from '@angular/common/http';
export class TodosService {

    constructor(private http: HttpClient) {}

    getTodos() {
        return this.http.get<any[]>('...');
    }

    add(todo:any) {
        return this.http.post('...', todo);
    }

    delete(id: number) {
        return this.http.delete('...');
    }

}