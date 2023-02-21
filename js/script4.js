




const userAge = parseInt(prompt('Введіть вік і отримаєте соціальне становище'))


if (userAge <= 6) document.write('Дитина ходить до садочка')
else if (userAge < 17) document.write('Школяр')
else if (userAge < 21) document.write('Студент')
else if (userAge < 65) document.write('Працівник')
else document.write('Пенсіонер')


