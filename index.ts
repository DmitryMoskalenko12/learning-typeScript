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

/* Home work 7 */

interface IPhone {
	company: string;
	number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone extends IPhone {
	size: string;
	companyPartner: IPhone['company'];
	manufactured: Date;
}

// Типизировать объект phones

const phones: IMobilePhone[] = [
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

interface IPhonesManufacturedAfterDate extends IMobilePhone {
	initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

function filterPhonesByDate(phones: IMobilePhone[], key: keyof IMobilePhone, initial: string): IPhonesManufacturedAfterDate[] {
 return phones.filter(item => {
    if (Date.parse(item[key].toString()) > Date.parse(initial)) {
      return item
    }
  }).map(phone => {
    return{
    ...phone,
    initialDate: initial
    }
  })
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, 'manufactured', "2022-01-01"));

/* Home work 8 */

// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

interface Classes {
  name: string,
  startsAt: string,
  duration: number,
}
interface CurrClients {
	name: string,
  age: string | number,
  gender: string,
  timeLeft: string,
}
type WithOutStartsAt = Omit<Classes, 'startsAt'>;
type ExClients = Omit<CurrClients, 'timeLeft'>;
type FutureClients = Pick<CurrClients, 'name'>;

interface FutureClient extends FutureClients {
  makeCallFor: Date
}

interface ExClient extends ExClients {
  makeCallFor: Date;
}

interface FutureClasses extends WithOutStartsAt {
  willStartsAt: string
}

interface FitnessClubCenter {
  clubName: string;
  location: string;
  classes: Classes[];
  futureClasses: FutureClasses[];
  currClients: CurrClients[];
  exClients: ExClient[];
  futureClients: FutureClient[]
}
const fitnessClubCenter: FitnessClubCenter = {
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

enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface TransferError {
	message: ErrorMessages;
}

class SingleFileTransfer implements ITransfer, TransferError {
    path: string;
    data: string[];
    date?: Date | undefined;
    message: ErrorMessages;
    transferStatus: TransferStatus;

    constructor(status: TransferStatus) {
        this.transferStatus = status;
    }

    start(p: string, d: string[]) {
        return 'Transfer started'
    }

    // Никто не запрещает создавать стрелочные функции
    // С ними проще работать с this
    checkTransferStatus = (): string => {
        return this.transferStatus;
    }

    stop = (reason: string) => {
        return `Transfer stopped, reason: ${reason}, Date: ${new Date().toLocaleString()}`
    };

    // Метод может показаться странным, но может использоваться для тестов, например
    makeError = (): string => {
        // Ведь при ошибке статус всегда "отклонено", правда?
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`
    }
}

const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop('Test'));
console.log(transfer.makeError());

    // Место для реализаций

    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    // Можно вывести в консоль данные, можно вернуть строку

    // Необходимо создать метод, который будет останавливать передачу данных
    // И возвращать строку с причиной и датой остановки (Дата в любом формате)

    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
    // Метод может показаться странным, но может использоваться для тестов, например

/* Home work 10 */


interface Queue<T> {
	enqueue(item: T): void; // поставить в очередь
	dequeue(): T | undefined; // исключить из очереди
	peek(): T | undefined | null; // посмотреть первый элемент
	isEmpty(): boolean; // проверка на "пустоту" сущности
	length(): number; // проверка на длину
}

// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно

// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"

class ArrayQueue<T> implements Queue<T> {

 private queue: T[] = []

  enqueue(item: T): void {
     console.log(this.queue.push(item))
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
			throw new Error("Queue Underflow");
		}

		return this.queue.shift() as T;
  }
  
  peek(): T | null | undefined {
    if (this.isEmpty()) {
			return null;
		}
     return this.queue[0]
  }

  isEmpty(): boolean {
    return this.queue.length === 0 
  }

  length(): number {
    return this.queue.length
  }


	// Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
	// Подсказка по методам:
	// при добавлении в очередь можно выполнить метод push
	// при удалении - shift, так как нужно удалить первый элемент.
	// Обратите внимание на возвращаемое значение
	// isEmpty может использоваться в других методах
}







class Stack<T> {
  private stack: T[] = [];
  private limit: number;
	// Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
	// Создать приватное свойство limit, которое будет типом number

	// Здесь мы установим лимит на стопку листов.
	// При переполнении стэка программа зависает, а очень высокая стопка листов падает
	// Так что лимит всегда должен быть
	constructor(limit: number = Number.MAX_VALUE) {
		this.limit = limit;
	}

	push(value: T): void {

    if(this.length() + 1 > this.limit){
      throw new Error('Opppss')
      
    } 
    this.stack.push(value)
		// Добавляет элемент в стэк
		// Если стэк переполнен - выбрасывает ошибку (throw new Error)
	}

	pop(): T {
    if (this.length() !== 0) {
      return this.stack.pop() as T
    } 
      throw new Error('Stack is empty')
    
		// Удаляет последний элемент массива
		// Если в стеке пусто - выбрасывает ошибку (throw new Error)
		// При удалении элемента возвращает его
		// Простыми словами: вы берете верхний лист в стопке и используете его
		// Если на столе нет листов - получается ошибка, брать нечего
	}

	length(): number {
    return this.stack.length
		// Возвращает кол-во элементов в стэке
	}

	isEmpty(): boolean {
    return this.length() === 0
		// Проверяет стэк на "пустоту"
	}

	top(): T | null {
    if (this.length() !== 0) {
      return this.stack[this.length() - 1]
    }
    return null
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

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());


/* ------------------------------------------------- */
const currRate2: string = "1.05";

const fetchCurr2 = (response: string): number => {
	const data: number = JSON.parse(response);
	return data;
};

function transferEurToUsd2(available: boolean, amount: number, commission: number): void {
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd2(true, 500, 1.05);
/* -------------------------------------------- */
const electricityUserData2: {
  readings: number,
  units: string,
  mode: string
} = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData2: {
  readings2: number,
  units2: string
} = {
	readings2: 3,
	units2: "m3",
};

const elRate2: number = 0.45;
const wRate2: number = 2;

const monthPayments2: number[] = [0, 0]; // [electricity, water]

const calculatePayments2 = ({readings, mode}: { 
  readings: number,
  units: string,
  mode: string}, {readings2}: {
    readings2: number,
    units2: string}, elRate2: number, wRate2: number) => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate2 * 0.7;
	} else {
		monthPayments[0] = readings * elRate2;
	}

	monthPayments[1] = readings2 * wRate2;
};

calculatePayments2(electricityUserData2, waterUserData2, elRate2, wRate2);

const sendInvoice2 = ([el, water]: number[], electricityUserData: { 
  readings: number,
  units: string,
  mode: string}, waterUserData: {  
    readings2: number,
    units2: string}) => {
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings2} ${waterUserData.units2} of water
    It will cost: ${water}€`;

	return text;
};
/* ------------------------------------------------- */

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia2 {
  VIDEO = 'video',
  AUDIO = 'audio'
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia2 {
  MP42 = '.mp4',
  MOV2 = '.mov',
  MKV2 = '.mkv',
  FLV2 = '.flv',
  WEBM2 = '.webM'

}

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
interface PlayMedia2 {
  name: string;
  type: TypesOfMedia2;
  format: FormatsOfMedia2; 
  subtitles?: string ; 
  marks?: unknown ;
}

function playMedia2(
	{ name, type, format, subtitles, marks }: PlayMedia2 = {
		name: "example",
		type: TypesOfMedia2.AUDIO,
		format: FormatsOfMedia2.MP42,
	}
): string {
	let marksLog: string;
  if (Array.isArray(marks)) {
    marksLog = marks.join('')
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

playMedia2({
	name: "WoW",
	format: FormatsOfMedia2.MP42,
	type: TypesOfMedia2.AUDIO,
	subtitles: "hmhmhm hmhmhm doh",
	marks: ["4:30", "5:40"],
});
