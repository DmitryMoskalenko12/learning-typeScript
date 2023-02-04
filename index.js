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
