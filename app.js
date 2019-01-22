var _a, _b;
// let todo : string = "Pick up drycleaning";
var nami = "Jess";
var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
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
};
container.innerHTML = "\n<div todo='" + todo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (todo.competed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">" + todo.name + "</span>\n</div>\n";
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
    console.log(index + " : " + value);
}
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var index = array_1[_i];
    console.log("" + value);
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
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
var arrayk = [123, "Pick up drycleaning", false];
var id = arrayk[0], title = arrayk[1], completed = arrayk[2];
var a = 1;
var b = 5;
var temp = a;
a = b;
b = temp;
_a = [b, a], a = _a[0], b = _a[1];
function getTodo(id) {
    var todoc = {
        idc: 123,
        titlec: "Pick up drycleaning",
        completedc: true
    };
    return todoc;
}
var _c = getTodo(123), isCompleted = _c.completedc, idc = _c.idc, titlec = _c.titlec;
function countdownc(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
function add() {
    var values = Array.prototype.splice.call(arguments, [1]), total = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
}
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
        var value = values_2[_a];
        switch (action) {
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
var source = [3, 4, 5];
var target = [1, 2].concat(source, [6, 7]);
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
Array.prototype.push.apply(list, toAdd);
list.push.apply(list, toAdd);
var osPrefix = 'os_';
var support = (_b = {},
    _b[osPrefix + 'os_Windows'] = isSupported('Windows'),
    _b[osPrefix + 'os_iOS'] = isSupported('iOS'),
    _b[osPrefix + 'os_Android'] = isSupported('Android'),
    _b);
function isSupported(os) {
    return Math.random() >= 0.5;
}
var animal = {
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: function () {
        console.log('Woff!');
    }
};
function makeTheAnimalSpeak(animal) {
    animal.speak();
}
makeTheAnimalSpeak(animal);
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
function totalLength(x, y) {
    x.slice(0);
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substr(1);
    }
    var total = x.length + y.length;
    return total;
}
var todob = {
    name: 'Pick up drycleaning',
    completed: true
};
var $ = function (selector) {
};
$.version = 1.12;
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var containert = $('#container');
containert.data('todo', todob);
var savedTodo = containert.data('todo');
containert.todo(todo);
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todok = {
    name: 'Pick up drycleaning',
    state: TodoState.New
};
function deletek(todok) {
    if (todok.state != TodoState.Complete) {
        throw "Can't delete incomplete task!";
    }
}
function totalLengthk(x, y) {
    var total = x.length + y.length;
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
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
        // this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        var newId = TodoService.getNextId();
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService.lastId += 1;
    };
    // todos: Todo[] = [];
    TodoService.lastId = 0;
    return TodoService;
}());
function TodoServicec() {
}
TodoServicec.lastId = 0;
TodoServicec.getNextId = function () {
    return TodoService.lastId += 1;
};
TodoServicec.prototype.add = function (todo) {
    var newId = TodoServicec.getNextId();
};
var todom = {
    name: "Pick up drycleaning",
    get state() {
        return this._state;
    },
    set state(newState) {
        if (newState == TodoState.Complete) {
            var canBeCompleted = this.state == TodoState.Active
                || this.state == TodoState.Deleted;
            if (!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed";
            }
        }
        this._state = newState;
    }
};
todom.state = TodoState.Complete;
todom.state;
var SmartTodo = /** @class */ (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Complete) {
                var canBeCompleted = this.state == TodoState.Active
                    || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked Completed";
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return SmartTodo;
}());
var todol = new SmartTodo("Pick up drycleaning");
todol.state = TodoState.Complete;
todol.state;
