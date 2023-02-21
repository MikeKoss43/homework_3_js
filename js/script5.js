

const userCategory = prompt('Введіть категорію водійських прав (А, В, С)').toUpperCase()

let vehicle

switch (userCategory) {
	case 'A':
      vehicle = 'Мотоцикл'
		break;
   case 'B':
		vehicle = 'Легковий автомобіль'
		break;
	case 'C':
		vehicle = 'Вантажний автомобіль'
		break;	
	default:
		vehicle = 'Некоректне введення, оберіть одну із запропонованих категорій'
		break;
}

document.write(vehicle)
