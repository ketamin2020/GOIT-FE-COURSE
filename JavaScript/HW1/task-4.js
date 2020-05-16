const credits = 23580; 
const pricePerDroid = 3000;


 let inputAmount = prompt('Какое количество дроидов Вы бы хотели купить?');
   
 let totalPrice = inputAmount * pricePerDroid;  
 let total = credits - totalPrice;
 
if (inputAmount === null){
    console.log('Отменено пользователем!');

} else if(totalPrice > credits){ 
    console.log('Недостаточно средств на счету!');

} else { console.log(`Вы купили ${inputAmount} дроидов, на счету осталось ${total} кредитов.`)}

 





