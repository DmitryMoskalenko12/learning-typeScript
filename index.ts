

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
