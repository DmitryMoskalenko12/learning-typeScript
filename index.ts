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

/* Home work 4 */


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
  FLV = '.flv',
  WEBM = '.webM'
}
// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
interface PlayMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown
}
function playMedia({ name, type, format, subtitles, marks }: PlayMedia= {
  name: "example",
  type: TypesOfMedia.AUDIO,
  format: FormatsOfMedia.MP4,
} ): string {
	    let marksLog: string;

    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
      if (Array.isArray(marks)) {
      marksLog = marks.join(',')
      } else if (typeof marks === 'string') {
      marksLog = marks
      } else {
      marksLog = "Unsupported type of marks"
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

/* Home work 5 */
type Animal = 'cat' | 'dog' | 'bird';

enum AvailabaleOrNo {
  AVAILABLE = 'available',
  NOAVAILABLE = 'not available'
}

interface Requestt {
    animal: Animal,
    breed: string,
    sterilized?: string
}

// Response #1

interface Response1 extends Requestt {
  location: string,
  age?: number
}

// Response #2

interface Response2 {
  message: string,
  nextUpdateIn: Date
}

interface AnimalAvailable {
  status: AvailabaleOrNo.AVAILABLE
  data: Response1;
}

interface AnimalNotAvailable {
  status: AvailabaleOrNo.NOAVAILABLE,
  data: Response2
}

function isAvailable(guard: AnimalAvailable | AnimalNotAvailable): guard is AnimalAvailable {
 return guard.status === AvailabaleOrNo.AVAILABLE ? true : false
}

function checkAnimalData(animal: AnimalAvailable | AnimalNotAvailable): Response1 | string {
	if (isAvailable(animal)) {
		// Заменить условие!
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

/* Home work 6 */

// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<T, S> {
  game: T,
	hours: S,
	server: string,
}

const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<string, object> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

enum Name {
  RECT = 'rect',
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  LINE = 'line'
}

function calculateAmountOfFigures<T extends Data>(figure: T[]): AmountOfFigures {
  const result: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0
  }
if(Array.isArray(figure)) {
  figure.forEach(item => {
    switch (item.name) {
      case Name.RECT:
        result.squares++
        break;

      case Name.TRIANGLE:
        result.triangles++
      break;

      case Name.CIRCLE:
        result.circles++
        break;

      default:
        result.others++
        break;
    }
  })
}
 return result
}

interface Data {
  name: Name;
}
interface WithData extends Data {
  data?: object
}
const data: WithData[] = [
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

console.log(calculateAmountOfFigures<Data>(data));