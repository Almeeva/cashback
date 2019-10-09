const regularAmount = 100;
const increasedAmount = 1000;
const specialAmount = 30000;
const purchaseSum = regularAmount + increasedAmount + specialAmount;

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;
const maxValueOfCashback = 3000;

let cashback = regularAmount * regularPercent
    + increasedAmount * increasedPercent 
    + specialAmount * specialPercent;

    console.log(cashback);

if (cashback > maxValueOfCashback)
{cashback = maxValueOfCashback};

const resultStrOfPurchase = 'Сумма покупки ' + purchaseSum + ' руб.'
const resultStrOfCashback = 'Кэшбэк составил ' + cashback + ' руб.'
console.log(resultStrOfPurchase);
console.log(resultStrOfCashback);