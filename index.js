"use strict";
/* Home Work 1 */
const currRate = "1.05";
const fetchCurr = (response) => {
    const data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        let res = fetchCurr(currRate) * amount * commission;
        console.log(res);
        // Или запись в элемент на странице вместо консоли
    }
    else {
        console.log("Сейчас обмен недоступен");
    }
}
transferEurToUsd(true, 500, 1.05);
/* Home Work 2 */
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
const waterUserData = {
    readings: 3,
    units: "m3",
};
const elRate = 0.45;
const wRate = 2;
const monthPayments = [0, 0]; // [electricity, water]
const calculatePayments = ({ readings, units, mode }, wData, elRate, wRate) => {
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
const sendInvoice = ([el, water], electricityUserData, waterUserData) => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;
    return text;
};
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
const totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: false,
    date: new Date(),
};
// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)
// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
function printReport(data) {
    const result = Object.entries(data).filter(item => item[1] === 'empty').map(item => item[0]);
    if (result.length !== 0) {
        return `We need this items: ${result}`;
    }
    else {
        return "Everything fine";
    }
}
console.log(printReport(totalData));
/* Home work 4 */
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["VIDEO"] = "video";
    TypesOfMedia["AUDIO"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["FLV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: "example",
    type: TypesOfMedia.AUDIO,
    format: FormatsOfMedia.MP4,
}) {
    let marksLog;
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    if (Array.isArray(marks)) {
        marksLog = marks.join(',');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
    // помните что это за оператор ??
    return "Media started";
}
playMedia({
    name: "WoW",
    format: FormatsOfMedia.MP4,
    type: TypesOfMedia.AUDIO,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});
var AvailabaleOrNo;
(function (AvailabaleOrNo) {
    AvailabaleOrNo["AVAILABLE"] = "available";
    AvailabaleOrNo["NOAVAILABLE"] = "not available";
})(AvailabaleOrNo || (AvailabaleOrNo = {}));
function isAvailable(guard) {
    return guard.status === AvailabaleOrNo.AVAILABLE ? true : false;
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        // Заменить условие!
        return animal.data;
    }
    else {
        return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
const player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
const player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
const player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};
var Name;
(function (Name) {
    Name["RECT"] = "rect";
    Name["TRIANGLE"] = "triangle";
    Name["CIRCLE"] = "circle";
    Name["LINE"] = "line";
})(Name || (Name = {}));
function calculateAmountOfFigures(figure) {
    const result = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0
    };
    if (Array.isArray(figure)) {
        figure.forEach(item => {
            switch (item.name) {
                case Name.RECT:
                    result.squares++;
                    break;
                case Name.TRIANGLE:
                    result.triangles++;
                    break;
                case Name.CIRCLE:
                    result.circles++;
                    break;
                default:
                    result.others++;
                    break;
            }
        });
    }
    return result;
}
const data = [
    {
        name: Name.RECT,
        data: { a: 5, b: 10 },
    },
    {
        name: Name.RECT,
        data: { a: 6, b: 11 },
    },
    {
        name: Name.TRIANGLE,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: Name.LINE,
        data: { l: 15 },
    },
    {
        name: Name.CIRCLE,
        data: { r: 10 },
    },
    {
        name: Name.CIRCLE,
        data: { r: 5 },
    },
    {
        name: Name.RECT,
        data: { a: 15, b: 7 },
    },
    {
        name: Name.TRIANGLE,
    },
];
console.log(calculateAmountOfFigures(data));
// Типизировать объект phones
const phones = [
    {
        company: "Nokia",
        number: 1285637,
        size: "5.5",
        companyPartner: "MobileNokia",
        manufactured: new Date("2022-09-01"),
    },
    {
        company: "Samsung",
        number: 4356637,
        size: "5.0",
        companyPartner: "SamMobile",
        manufactured: new Date("2021-11-05"),
    },
    {
        company: "Apple",
        number: 4552833,
        size: "5.7",
        companyPartner: "no data",
        manufactured: new Date("2022-05-24T12:00:00"),
    },
];
// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе
function filterPhonesByDate(phones, key, initial) {
    return phones.filter(item => {
        if (Date.parse(item[key].toString()) > Date.parse(initial)) {
            return item;
        }
    }).map(phone => {
        return {
            ...phone,
            initialDate: initial
        };
    });
}
// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта
console.log(filterPhonesByDate(phones, 'manufactured', "2022-01-01"));
const fitnessClubCenter = {
    clubName: "Fitness club Center",
    location: "central ave. 45, 5th floor",
    classes: [
        {
            name: "yoga",
            startsAt: "8:00 AM",
            duration: 60,
        },
        {
            name: "trx",
            startsAt: "11:00 AM",
            duration: 45,
        },
        {
            name: "swimming",
            startsAt: "3:00 PM",
            duration: 70,
        },
    ],
    futureClasses: [
        {
            name: "boxing",
            willStartsAt: "6:00 PM",
            duration: 40,
        },
        {
            name: "breath training",
            willStartsAt: "8:00 PM",
            duration: 30,
        },
    ],
    currClients: [
        {
            name: "John Smith",
            age: "-",
            gender: "male",
            timeLeft: "1 month",
        },
        {
            name: "Alise Smith",
            age: 35,
            gender: "female",
            timeLeft: "3 month",
        },
        {
            name: "Ann Sonne",
            age: 24,
            gender: "female",
            timeLeft: "5 month",
        },
    ],
    exClients: [
        {
            name: "Tom Smooth",
            age: 50,
            gender: "male",
            makeCallFor: new Date("2023-08-12"),
        },
    ],
    futureClients: [
        {
            name: "Maria",
            makeCallFor: new Date("2023-07-10"),
        },
    ],
};
/* Home work 9 */
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
class SingleFileTransfer {
    constructor(status) {
        // Никто не запрещает создавать стрелочные функции
        // С ними проще работать с this
        this.checkTransferStatus = () => {
            return this.transferStatus;
        };
        this.stop = (reason) => {
            return `Transfer stopped, reason: ${reason}, Date: ${new Date().toLocaleString()}`;
        };
        // Метод может показаться странным, но может использоваться для тестов, например
        this.makeError = () => {
            // Ведь при ошибке статус всегда "отклонено", правда?
            return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`;
        };
        this.transferStatus = status;
    }
    start(p, d) {
        return 'Transfer started';
    }
}
const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop('Test'));
console.log(transfer.makeError());
// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно
// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"
class ArrayQueue {
    constructor() {
        this.queue = [];
        // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
        // Подсказка по методам:
        // при добавлении в очередь можно выполнить метод push
        // при удалении - shift, так как нужно удалить первый элемент.
        // Обратите внимание на возвращаемое значение
        // isEmpty может использоваться в других методах
    }
    enqueue(item) {
        console.log(this.queue.push(item));
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    length() {
        return this.queue.length;
    }
}
class Stack {
    // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
    // Создать приватное свойство limit, которое будет типом number
    // Здесь мы установим лимит на стопку листов.
    // При переполнении стэка программа зависает, а очень высокая стопка листов падает
    // Так что лимит всегда должен быть
    constructor(limit = Number.MAX_VALUE) {
        this.stack = [];
        this.limit = limit;
    }
    push(value) {
        if (this.length() + 1 > this.limit) {
            throw new Error('Opppss');
        }
        this.stack.push(value);
        // Добавляет элемент в стэк
        // Если стэк переполнен - выбрасывает ошибку (throw new Error)
    }
    pop() {
        if (this.length() !== 0) {
            return this.stack.pop();
        }
        throw new Error('Stack is empty');
        // Удаляет последний элемент массива
        // Если в стеке пусто - выбрасывает ошибку (throw new Error)
        // При удалении элемента возвращает его
        // Простыми словами: вы берете верхний лист в стопке и используете его
        // Если на столе нет листов - получается ошибка, брать нечего
    }
    length() {
        return this.stack.length;
        // Возвращает кол-во элементов в стэке
    }
    isEmpty() {
        return this.length() === 0;
        // Проверяет стэк на "пустоту"
    }
    top() {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1];
        }
        return null;
        // Возвращает последний (верхний) элемент стэка, но не удаляет его
        // Вы просто читаете, что написано на верхнем листе
        // Если стэк пуст - вернется null
    }
}
// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно
// Для тестов
const arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());
const arrTest2 = new ArrayQueue();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());
const stackTest1 = new Stack(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());
const stackTest2 = new Stack(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());

function das (arr) {
   const res = {};

   for (let item of arr) {
      res[item.name] = item.value
   }
 return res
}

const ar = [
  {name: 'name', value: 'Anatoliy'},
  {name: 'age', value: 40}
]

console.log(das(ar))



