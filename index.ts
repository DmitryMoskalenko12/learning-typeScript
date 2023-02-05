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