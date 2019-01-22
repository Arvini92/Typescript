// let todo : string = "Pick up drycleaning";
let nami : string  = "Jess";

var container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

countdown(10, 4);

var todo = {
    id: 123,
    name: "Pick up drycleaning",
    competed: true
}

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${todo.competed ? "" : "hidden"} text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`;

for (var x = 0; x <= 5; x++) {
    var counter = x;
    // const counter = x;
    // counter = 1;
}

console.log(counter);

var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];

for (var index in array) {
    var value = array[index];
    console.log(`${index} : ${value}`);
}

for (var index of array) {
    console.log(`${value}`);
}

// function Counter(el) {
//     this.count = 0;

//     el.innerHTML = this.count;

//     let _this = this;

//     el.addEventListener('click',
//         function() {
//             this.count += 1;
//             el.innerHTML = _this.count;
//         }
//     )
// }

function Counter(el) {
    this.count = 0;

    el.innerHTML = this.count;


    el.addEventListener('click',
        () => {
            this.count += 1;
            el.innerHTML = this.count;
        }
    )
}

new Counter(container);

var filtered = [1, 2, 3].filter(x => x > 0);

var arrayk = [123, "Pick up drycleaning", false];

var [id, title, completed] = arrayk;

var a = 1;
var b = 5;

var temp = a;
a = b;
b = temp;

[a,b] = [b,a];

function getTodo(id) {
    var todoc = {
        idc: 123,
        titlec: "Pick up drycleaning",
        completedc: true
    }

    return todoc;
}


var { completedc: isCompleted, idc, titlec} = getTodo(123);

function countdownc({
    initial, 
    final : final = 0, 
    interval : interval = 1, 
    initial : current
}) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

function add() {
    var values = Array.prototype.splice.call(arguments, [1]),
        total = 0;
    
    for (var value of values) {
        total += value;
    }

    return total;
}

function calculate(action, ...values) {
    var total = 0;
    
    for (var value of values) {

        switch(action) {

            case 'add':
                total += value;
                break;

            case 'substract':
                total -= value;
                break;
        }
        
    }

    return total;
}

calculate('substract', 1, 2, 3, 4, 5);

var source = [ 3, 4, 5];
var target = [1, 2, ...source, 6, 7];

var list = [1, 2, 3];
var toAdd = [4, 5, 6];

Array.prototype.push.apply(list, toAdd);

list.push(...toAdd);

const osPrefix = 'os_'

var support = {
    [osPrefix + 'os_Windows']: isSupported('Windows'),
    [osPrefix + 'os_iOS']: isSupported('iOS'),
    [osPrefix + 'os_Android']: isSupported('Android'),
}

function isSupported(os) {
    return Math.random() >= 0.5;
}

var animal = {
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: function() {
        console.log('Woff!');
    }
}

function makeTheAnimalSpeak(animal) {
    animal.speak();
}

makeTheAnimalSpeak(animal)

function calculateAge(birthYear) {
    return Date.now() - birthYear;
}

function totalLength(x: string, y: string): number
function totalLength(x: any[], y: any[]): number
function totalLength(x: (string | any[]), y: (string | any[])): number {

    x.slice(0);


    if( x instanceof Array ) {
        x.push('abc');
    }

    if ( x instanceof String ) {
        x.substr(1);
    }
    
    let total: number = x.length + y.length;
    return total;
}

interface Todo {
    name: string;
    completed?: boolean;
}

interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

var todob: Todo = { 
    name: 'Pick up drycleaning',
    completed: true 
};

interface jQuery {
    (selector: (string | any)): jQueryElement;
    fn: any;
    version: number;
}

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}

var $ = <jQuery>function(selector: string) {

}

$.version = 1.12;

$.fn.todo = function(todo?: Todo): Todo {

    if(todo) {
        $(this).data('todo', todo)
    } else {
        return $(this).data('todo');
    }
}

var containert = $('#container')
containert.data('todo', todob);
var savedTodo = containert.data('todo');

containert.todo(todo);

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

interface Todok {
    name: string;
    state: TodoState;
}

var todok: Todok = { 
    name: 'Pick up drycleaning',
    state: TodoState.New
};

function deletek(todok: Todok) {
    if(todok.state != TodoState.Complete) {
        throw "Can't delete incomplete task!"
    }
}

function totalLengthk(x: {length: number}, y: {length: number}): number {

    let total: number = x.length + y.length;
    return total;
}


// function TodoSrevice() {
//     this.todos = [];
// }

// TodoSrevice.prototype.getAll = function() {
//     return this.todos;
// }

// var service = new TodoSrevice();
// service.getAll()

class TodoService {

    // todos: Todo[] = [];

    static _lastId: number = 0;

    constructor(private todos: Todo[]) {
        // this.todos = todos;
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService._lastId += 1;
    }
}

function TodoServicec() {

}

TodoServicec.lastId = 0;

TodoServicec.getNextId = function() {
    return TodoService._lastId += 1;
}

TodoServicec.prototype.add = function(todo) {
    var newId = TodoServicec.getNextId();
}

var todom = {
    name: "Pick up drycleaning",
    get state() {
        return this._state;
    },
    set state(newState) {
        if(newState == TodoState.Complete) {
            var canBeCompleted =
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;

            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }

        }

        this._state = newState;
    }
}

todom.state = TodoState.Complete;

todom.state;

class SmartTodo {

    _state: TodoState;

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    get state() {
        return this._state;
    };

    set state(newState) {
        if(newState == TodoState.Complete) {
            var canBeCompleted =
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;

            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }

        }

        this._state = newState;
    };
}

var todol = new SmartTodo("Pick up drycleaning")

todol.state = TodoState.Complete;

todol.state;

abstract class TodoStateChanger {
    constructor(private newState: TodoState) {
    }

    // abstract canChangeState(todo: Todo): boolean {
    protected canChangeState(todo: Todo): boolean {
        return !!todo;
    }

    private changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todol.state = this.newState;
        }

        return todo;
    }
}

// new TodoStateChanger();

class CompleteTodoStateChange extends TodoStateChanger {

    constructor() {
        super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
        return super.canChangeState(todo) && (
            todol.state == TodoState.Active
            || todol.state == TodoState.Deleted
        )
    }
}

function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

clone('Hello!')

clone(123)

// import Todov = TodoApp.Todo.Todov;
// import Model = require('./model');
// import Todov = Model.Todov;

var todoz: Todov = {
    id: 1,
    name: 'Pick up drycleaning',
    state: TodoStatev.ActiveXObject
};

clone(todo)

clone({name: 'Jess'})

var array1: number[] = [1, 2, 3]
var array2: Array<number> = [1, 2, 3]

class KeyValuePair<TKey, TValue> {
    constructor(
        public key: TKey,
        public value: TValue
    ) {}
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');

class KeyValuePairPrinter<T, U> {
    constructor(private pairs: KeyValuePair<T, U>[]) {
    }

    print() {
        for( let p of this.pairs ) {
            console.log(`${p.key}: ${p.value}`);
        }
    }
}

var printer = new KeyValuePairPrinter([pair1, pair3]);
printer.print();


interface IHaveLength {
    length: number;
}

function totalLengthv<T extends IHaveLength>(x: T, y: T): number {

    let total: number = x.length + y.length;
    return total;
}

class CustomArray<T> extends Array<T> {}

var lengthi = totalLengthv([1, 2, 3], new CustomArray<number>());

var jQuery = {
    version: 1.19,
    fn: {}
};

(function defineType($) {

    if( $.version < 1.15)
        throw 'Plugin requires jQuery version 1.15+';

    // $.fn.myPlugin = function() {

    // }
})(jQuery);

import { Todov, TodoStatev, Todov as TodoTask } from './model';
import './jQuery';

import { TodoServicel } from './DataAccess';

let service = new TodoServicel([]);

service.add({
    id: 1,
    name: 'Pick up drycleaning',
    state: TodoStatev.New
});

let todos = service.getAll();

todos.forEach(todo =>
    console.log(`${todo.name} [${TodoState[todo.state]}]`)
)
