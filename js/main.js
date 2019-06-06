"use strict"
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true,
    optionalExpenses: {}
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обезательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        }else{
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectedDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectedDayBudget();

function detectedLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Мигимальный уровень достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    }else{
        console.log("Произошла ошибка");
    }
}
detectedLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = + prompt("Под какой процент?", "");

        appData.mounthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = i + 1,
            b = prompt("Статья необязательных расходов?", "");

        appData.optionalExpenses[a] = b;
    }
}
chooseOptExpenses();
console.log(appData);