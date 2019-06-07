"use strict"
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true,
    optionalExpenses: {},
    chooseExpenses: function() {
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
    },
    detectedDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectedLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Мигимальный уровень достатка");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }else if (appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = + prompt("Под какой процент?", "");
    
            appData.mounthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != "") {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();
            }else { 
                i = i - 1;
            }
        }
        appData.income.forEach(function(item, i) {
            alert("Способы доп. зароботка " + ++i + ": " + item);
        });
    }
};
appData.chooseIncome();
for (let key in appData) {
    alert("Наша программа включает в себя данные: " + appData[key]);
}

// //1
// let x = 5;
// console.log(x++);

// //2
// console.log([] + false - null + true);

// //3
// let y = 1;
// let x = y = 2;
// console.log(x);

// //4
// console.log([] + 1 + 2);

// //5
// console.log("1"[0]);

// //6
// console.log(2 && 1 && null && 0 && undefined);

// //7
// let a = 3;
// let b = 4;
// console.log(!!(a && b));
// console.log((a && b));

// //8
// console.log(null || 2 && 3 || 4);

// //9
// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a!=b);
// console.log(a);
// console.log(b);

// //10
// console.log(+"Infinity");

// //11
// console.log("ёжик">"яблоко");

// //12
// console.log(0 || "" || 2 || undefined || true || false);

