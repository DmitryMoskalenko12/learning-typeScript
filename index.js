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
    pants: 15,
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
    var result = [];
    var key;
    for (key in data) {
        if (data[key] === 'empty') {
            result.push(key);
        }
    }
    return result
    /*   return `We need this items: ${"..."}`;
       // или
       return "Everything fine"; */
}
console.log(printReport(totalData));
