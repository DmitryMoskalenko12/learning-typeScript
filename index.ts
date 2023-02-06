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

const calculatePayments = ({readings, mode}:{readings: number, mode: string}, {readings: readingsWData}: {readings: number, units: string}, elRate: number, wRate: number): void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = readingsWData * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = ([electricity, water]: number[], {readings, units}:{readings: number, units: string}, {readings: readingsWData, units: unitsW}: {readings: number, units: string}): string => {
	const text = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${electricity}€
    
    This month you used ${readingsWData} ${unitsW} of water
    It will cost: ${water}€`;

	return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);

const num = (arg: string | number): string | number => {
   if (typeof arg === 'string') {
    return 'hello'
   } else {
     return 'world'
   }
}
console.log(num(9))

const port3000: number = 3000;
const port3001: number = 3001;

let msg: 'Hello' = 'Hello'
msg = 'Hello';

function startServer(protocol:'http' | 'https', port: 3000 | 3001): 'Server started' {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server: ${port}`);
  } else {
    console.log('Invalid port')
  }
  return 'Server started';
}
startServer('https', 3001);

type Timing = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;

function createAnimation(id: AnimationId, animName: string, timingFunc: Timing = 'ease', duration: number, iterCount: 'infinite' | number ): void {
/*   const elem = document.querySelector(`#${id}`) as HTMLElement
  if (elem) {
    elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`
  } */ 
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`)
}
createAnimation('id', 'fade', 'ease', 5, 'infinite')
/* intersection */
const obj1 = {
  exam: 'fff',
  exam2: 'ggg'
}
const obj2 = {
  name: 'jjj'
}
type First = {exam: string | number; exam2: string | number}
type Second = {name: string | number}

type FirstAndSecond = First & Second;

/* interface */
interface IConfig {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverIConfig: IConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
}

const startIServer = (
  protocol: 'http' | 'https',
  port : 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}:// server:${port}`);
  return 'Server started'
}
/* type */
/* type Config = {
  protocol: 'http' | 'https';
  port: 3000 | 3001
}

type Role = {
  role: string;
}

type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin'
}

const startIServer = (
  protocol: 'http' | 'https',
  port : 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}:// server:${port}`);
  return 'Server started'
} */

/* Home Worke */

// структура данных склада с одеждой
type Valid = "empty" | number;
interface ClothesWarehouse {
	jackets: Valid;
	hats: Valid;
	socks: Valid;
	pants: Valid;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
	scissors: Valid;
	paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
	dishwashers: Valid;
	cookers: Valid;
	mixers: Valid;
}
/* interface IIndex {
  [key: string]: any
} */
// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse {
	deficit: boolean;
	date: Date;
}
interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse/* , IIndex */ {}
// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
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

function printReport(data: TotalWarehouse): string {
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
 const result: string = Object.entries(data)
 .filter((item) => item[1] === "empty")
 .reduce((res, item) => `${res} ${item[0]},`, "");

if (result.trim().length) {
 return `We need this items:${result.slice(0, -1)}`;
} else {
 return "Everything fine";
}
}
console.log(printReport(totalData));


enum Example {
 FIRST = 2,
 SECOND = 3,
 THIRD = 4
}

function nam(params:Example) {
  console.log(params)
}
nam(Example.SECOND)

/* Home Work3 */

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
  VIDEO = 'video',
  AUDIO = 'audio'
}
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia {
  MP4 = '.mp4',
  MOV = '.mov',
  MKV = '.mkv',
  FIV = '.flv',
  WEBM = '.webM'
}
// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
interface IMedia {
 name : string;
 type: TypesOfMedia;
 format: FormatsOfMedia;
 subtitles?: string;
 marks?: unknown
}
const obj: IMedia = {
  name: "WoW",
  format: FormatsOfMedia.MP4,
  type: TypesOfMedia.AUDIO,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"]
}
function playMedia(
	{ name, type, format, subtitles, marks }: IMedia = obj
): string {
	let marksLog: string;

     if (Array.isArray(marks)) {
      marksLog = marks.join(',')
     } else if(typeof marks === 'string') {
       marksLog = marks
     } else {
      marksLog = "Unsupported type of marks"
     }
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!

	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
    // помните что это за оператор ??

	return "Media started";
}

playMedia(obj);