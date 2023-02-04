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

const calculatePayments = ({readings, mode}:{readings: number, mode: string}, {readings: readingsWData}: {readings: number, units: string}, elRate: number, wRate: number): number[] => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = readingsWData * wRate;
  return monthPayments
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = ([electricity, water]: number[], {readings, units}:{readings: number, units: string}, {readings: readingsWData, units: unitsW}: {readings: number, units: string}): void => {
	const text = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${electricity}€
    
    This month you used ${readingsWData} ${unitsW} of water
    It will cost: ${water}€`;

	console.log(text);
};
const finalCalculate = calculatePayments(electricityUserData, waterUserData, elRate, wRate);

sendInvoice(finalCalculate, electricityUserData, waterUserData)