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