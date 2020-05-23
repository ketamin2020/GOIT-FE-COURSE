

let cost;
let country;

country = prompt('Укажите в какую страну Вы хотите доставить товар?');
country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();



switch(country){
    case 'Китай':
    cost = 100;
    break;

    case 'Чили':
    cost = 250;
    break;

    case 'Австралия':
    cost = 170;
    break;
    
    case 'Индия':
    cost = 80;
    break;
    
    case 'Ямайка':
    cost = 120;
    break;

    default:
     alert('В вашей стране доставка не доступна.');
}


if (cost === undefined){

    alert ('Выберите другую страну');

} else { alert(`Доставка в страну ${country} будет стоить ${cost} кредитов.`);
}

   

