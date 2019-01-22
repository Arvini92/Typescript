// namespace DataAccess {

    // import Model = TodoApp.Model;
    // import Todov = TodoApp.Todo.Todov;

    import Model = require('./model');
    import Todov = Model.Todov;


    let _lastId: number = 0;

    function generateTododId() {
        return _lastId += 1;
    }

    export interface ITodoService {
        add(todo: Todov): Todov;
        delete(todoId: number): void;
        getAll(): Todov[];
        getById(todoId: number): Todov;
    }

    interface IIdGenerator {
        // nextId: number;
    }


    export class TodoServicel implements ITodoService, IIdGenerator {
        // private static _lastId: number = 0;

        // get nextId() {
        //     return TodoService._lastId += 1;
        // }

        constructor(private todos: Todov[]) {
        }

        @log
        add(todo: Todov): Todov {

            var x: ClassDecorator

            // todo.id = this.nextId;
            todo.id =  generateTododId();
            this.todos.push(todo);
            return todo;
        }

        delete(todoId: number): void {
            var toDelete = this.getById(todoId);

            var deleteIndex = this.todos.indexOf(toDelete);

            this.todos.splice(deleteIndex, 1);
        }

        getAll(): Todov[] {
            var clone = JSON.stringify(this.todos);
            return JSON.parse(clone);
        }

        getById(todoId: number): Todov {
            var filtered =
                this.todos.filter(x => x.id == todoId);
            
            if( filtered.length ) {
                return filtered[0];
            }

            return null;
        }

    }


    var originalMethod = TodoServicel.prototype.add;

    TodoServicel.prototype.add = function(...args) {

        console.log(`add(${JSON.stringify(args)})`);

        let returnValue = originalMethod.apply(this, args);

        console.log(`add(${JSON.stringify(args)}) => ${returnValue}`)

        return returnValue;
    }


    function log(target: Object, methodName: string, descriptor:
    TypedPropertyDescriptor<Function>) {

        var originalMethod = descriptor.value;

        descriptor.value = function(...args) {

            console.log(`${methodName}(${JSON.stringify(args)})`);

            let returnValue = originalMethod.apply(this, args);

            console.log(`${methodName}(${JSON.stringify(args)}) => ${returnValue}`)

            return returnValue;
        }
    }















// }


