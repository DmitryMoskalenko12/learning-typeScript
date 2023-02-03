
const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

function logBrtMsg(isBirthday: boolean, userName: string, age: number) {
  if (isBirthday) {
    console.log(`Congrats ${userName}, age: ${age + 1}`)
  }
}
logBrtMsg(isBirthdayData, userNameData, ageData);
