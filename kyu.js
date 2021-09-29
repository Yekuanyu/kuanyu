const readline = require('readline-sync');
w = readline.question('請輸入您的體重(kg)');
h = readline.question('請輸入您的身高(cm)');
if (w > 200 | w < 10 |h > 220 | h< 50){
    console.log("數值錯誤");
    return 0 ;
}
var bmi =w/((h/100)**2);
console.log("BMI = "+ bmi);
if (bmi < 18.5) {
    console.log("體重過輕");
}
if (bmi > 24){
    console.log("體重過重");
}