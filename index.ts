

/* HomeWork 6 */

// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData <Game, Hours> {
  game: Game;
  hours: Hours;
  server: string
}

const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2 : PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3 : PlayerData<string, {total: number, inMenu: number}> = {
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

function calculateAmountOfFigures<T extends Name>(figure: T[]): AmountOfFigures {
const amount: AmountOfFigures = {
  squares: 0,
	circles: 0,
	triangles: 0,
	others: 0
}

figure.forEach(item => {
  if (item.name === Figure.Triangle) {
    amount.triangles++
  } else if (item.name === Figure.Circle) {
    amount.circles++
  } else if(item.name === Figure.Rect) {
    amount.squares++
  } else{
    amount.others++
  }
})

return amount
}

enum Figure {
  Rect = 'rect',
  Triangle = 'triangle',
  Line = 'line',
  Circle = 'circle'
}

interface Name {
  name: Figure;
}

const data = [
	{
		name: Figure.Rect,
		data: { a: 5, b: 10 },
	},
	{
		name: Figure.Rect,
		data: { a: 6, b: 11 },
	},
	{
		name: Figure.Triangle,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: Figure.Line,
		data: { l: 15 },
	},
	{
		name: Figure.Circle,
		data: { r: 10 },
	},
	{
		name: Figure.Circle,
		data: { r: 5 },
	},
	{
		name: Figure.Rect,
		data: { a: 15, b: 7 },
	},
	{
		name: Figure.Triangle,
	},
];

console.log(calculateAmountOfFigures(data));



const roArr: ReadonlyArray<string> = ['fff']

interface ICompany {
  name: string;
  debts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'debts';

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`)
}

const hh: ICompany = {
  name: 'HH',
  debts: 500000
}

printDebts(hh, 'name', 'debts')


/* Home Work 7 */

interface IPhone {
	company: string;
	number: number;
}
type Company = IPhone['company'];
// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone extends IPhone {
	size: string;
	companyPartner: Company;
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
 return phones.filter((phone) => {
  const manufactured = phone[key];
  if (manufactured instanceof Date && Date.parse(manufactured.toString()) > Date.parse(initial)) {
    return phone
  }
 })
 .map(phone => {
  const newObj = {...phone, initialDate: initial}
  return newObj
 })
     
  
 
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, 'manufactured', "2022-01-01"));