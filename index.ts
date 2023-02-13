/* Home Work 1 */

const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
	const data: number = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
	if (available) {
		let res = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
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

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = ({readings, units, mode}:{
  readings: number,
	units: string,
	mode: string,}, 
  wData:{
  readings: number,
  units: string,
  }, elRate: number, wRate: number): void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = ([el, water]: number[], electricityUserData: {
  readings: number,
	units: string,
	mode: string,},
  waterUserData:{
  readings: number,
  units: string,
  } ):string => {
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

	return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData))


/* Home work 3 */

// структура данных склада с одеждой
type EmptyOrNumber = "empty" | number;

 interface ClothesWarehouse {
 	jackets: EmptyOrNumber;
 	hats: EmptyOrNumber;
 	socks: EmptyOrNumber;
 	pants: EmptyOrNumber;
 }

// структура данных склада с канцтоварами

interface StationeryWarehouse {
 	scissors: EmptyOrNumber;
 	paper: "empty" | boolean;
 }

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
 	dishwashers: EmptyOrNumber;
 	cookers: EmptyOrNumber;
 	mixers: EmptyOrNumber;
 }

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
 	deficit: boolean;
 	date: Date;
 }

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
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

function printReport(data: TotalWarehouse) {
  const result: string[] = Object.entries(data).filter(item => item[1] === 'empty').map(item => item[0])
  if (result.length !== 0) {
    return `We need this items: ${result}`;
  } else {
    return "Everything fine";
  }
}

console.log(printReport(totalData));