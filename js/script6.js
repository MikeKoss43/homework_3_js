


const dayNunber = parseInt(prompt('Введіть номен дня тижня(1-7)'))

let result

if (dayNunber === 1) result = `${dayNunber} - Понеділок`
else if (dayNunber === 2) result = `${dayNunber} - Вівторок`
else if (dayNunber === 3) result = `${dayNunber} - Середа`
else if (dayNunber === 4) result = `${dayNunber} - Четвер`
else if (dayNunber === 5) result = `${dayNunber} - П'ятниця`
else if (dayNunber === 6) result = `${dayNunber} - Субота`
else if (dayNunber === 7) result = `${dayNunber} - Неділя`
else result = 'Некорректне значення, будь-ласка введіть число від 1 до 7'

document.write(result)
