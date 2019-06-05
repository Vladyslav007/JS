"use strict"
let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    saving: false
};
let q1 = prompt("Введите обезательную статью расходов в этом месяце", "");
let q2 = prompt("Во сколько обойдется?", "");
let q3 = prompt("Введите обезательную статью расходов в этом месяце", "");
let q4 = prompt("Во сколько обойдется?", "");
appData.expenses[q1] = q2;
appData.expenses[q3] = q4;
console.log(appData);
console.log(appData.budget / 30);