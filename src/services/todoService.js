export default class TodoService {
    _apiBase = 'https://jsonplaceholder.typicode.com/todos';

    getResource = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`could not fetch ${url}, status: ${result.status}`);
        }
        return await result.json();
    }
    getTodos = async () => {
        const result =  await this.getResource(`${this._apiBase}?_limit=5`);
        return result.map(this.transformTodos);
        
    }
    postTodos = async (data) => {
        const res = await fetch(this._apiBase, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data)
        });
        return res;
    }
    deleteTodoItem = async (id) => {
       return await fetch(`${this._apiBase}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               }
        });
    }
    transformTodos = (todo) => {
        return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            edit: false
        }
    }   
}

