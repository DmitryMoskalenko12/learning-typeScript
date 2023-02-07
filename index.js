var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double"
};
var waterUserData = {
    readings: 3,
    units: "m3"
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (_a, _b, elRate, wRate) {
    var readings = _a.readings, mode = _a.mode;
    var readingsWData = _b.readings;
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = readingsWData * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (_a, _b, _c) {
    var electricity = _a[0], water = _a[1];
    var readings = _b.readings, units = _b.units;
    var readingsWData = _c.readings, unitsW = _c.units;
    var text = "    Hello!\n    This month you used ".concat(readings, " ").concat(units, " of electricity\n    It will cost: ").concat(electricity, "\u20AC\n    \n    This month you used ").concat(readingsWData, " ").concat(unitsW, " of water\n    It will cost: ").concat(water, "\u20AC");
    return text;
};
var invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
var num = function (arg) {
    if (typeof arg === 'string') {
        return 'hello';
    }
    else {
        return 'world';
    }
};
console.log(num(9));
var port3000 = 3000;
var port3001 = 3001;
var msg = 'Hello';
msg = 'Hello';
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "://server: ").concat(port));
    }
    else {
        console.log('Invalid port');
    }
    return 'Server started';
}
startServer('https', 3001);
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    /*   const elem = document.querySelector(`#${id}`) as HTMLElement
      if (elem) {
        elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`
      } */
    console.log("".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
}
createAnimation('id', 'fade', 'ease', 5, 'infinite');
/* intersection */
var obj1 = {
    exam: 'fff',
    exam2: 'ggg'
};
var obj2 = {
    name: 'jjj'
};
var serverIConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin'
};
var startIServer = function (protocol, port) {
    console.log("Server started on ".concat(protocol, ":// server:").concat(port));
    return 'Server started';
};
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
var totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 'empty',
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: true,
    date: new Date()
};
// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)
// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
function printReport(data) {
    /*   let arr = [];
     for ( let key in data) {
        if (data[key] === 'empty') {
        arr.push(key )
       }
     }
     if (arr.toString().trim().length) {
      return `We need this items:${arr.map(item => ` ${item}`)}`;
     }else {
      return "Everything fine";
     } */
    var result = Object.entries(data)
        .filter(function (item) { return item[1] === "empty"; })
        .reduce(function (res, item) { return "".concat(res, " ").concat(item[0], ","); }, "");
    if (result.trim().length) {
        return "We need this items:".concat(result.slice(0, -1));
    }
    else {
        return "Everything fine";
    }
}
console.log(printReport(totalData));
var Example;
(function (Example) {
    Example[Example["FIRST"] = 2] = "FIRST";
    Example[Example["SECOND"] = 3] = "SECOND";
    Example[Example["THIRD"] = 4] = "THIRD";
})(Example || (Example = {}));
function nam(params) {
    console.log(params);
}
nam(Example.SECOND);
/* Home Work3 */
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
    FormatsOfMedia["FIV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
var obj = {
    name: "WoW",
    format: FormatsOfMedia.MP4,
    type: TypesOfMedia.AUDIO,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"]
};
function playMedia(_a) {
    var _b = _a === void 0 ? obj : _a, name = _b.name, type = _b.type, format = _b.format, subtitles = _b.subtitles, marks = _b.marks;
    var marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(',');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    console.log("Media ".concat(name).concat(format, " is ").concat(type, "\n    Marks: ").concat(marksLog, "\n    Subtitles: ").concat(subtitles !== null && subtitles !== void 0 ? subtitles : "none"));
    // помните что это за оператор ??
    return "Media started";
}
playMedia(obj);
function isOne(arg) {
    return arg.age.exam !== undefined;
}
function isTwo(arg) {
    return 'birthday' in arg;
}
function some(param) {
    if (isOne(param)) {
        param.name;
    }
    else if (isTwo(param)) {
        param.birthday;
    }
}
var AnimalStatus;
(function (AnimalStatus) {
    AnimalStatus["Available"] = "available";
    AnimalStatus["NotAvailable"] = "not available";
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
    if (res.status === AnimalStatus.Available) {
        return true;
    }
    else {
        return false;
    }
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        return animal.data;
    }
    else {
        return "".concat(animal.data.message, ", you can try in ").concat(animal.data.nextUpdateIn);
    }
}
function calculateArea(a, b, c, d) {
    if (b) {
        var rect = {
            a: a,
            b: b,
            area: a * b
        };
        return rect;
    }
    else {
        var square = {
            side: a,
            area: a * a
        };
        return square;
    }
}
calculateArea(2);
calculateArea(2, 4, 5);
/* Home work 5 */
var forms = document.querySelectorAll('form');
var title = document.querySelector('#title');
var email = document.querySelector('#email');
var text = document.querySelector('#text');
var checkbox = document.querySelector('#checkbox');
forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formData.email = email.value;
        formData.title = title.value;
        formData.text = text.value;
        formData.checkbox = checkbox.checked;
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
    });
});
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
console.log(formData);
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    /* Если каждое из свойств объекта data правдиво... */
    if (data.email !== '' && data.text !== '' && data.title !== '' && data.checkbox !== false) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    var findEmail = emails.some(function (e) { return e === email; });
    /* Если email совпадает хотя бы с одним из массива */
    if (findEmail) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
