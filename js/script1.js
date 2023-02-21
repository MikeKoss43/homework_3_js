


const firstName = prompt('Введіть ім`я першої дитини')
const firstCandy = parseInt(prompt('Введіть кількість цукерок у першої дитини'))

const secondName = prompt('Введіть ім`я другої дитини')
const secondCandy = parseInt(prompt('Введіть кількість цукерок у другої дитини'))

if (firstCandy > secondCandy)
document.write(`<mark>Цукерок більше у ${firstName}</mark>`)
else if (firstCandy < secondCandy)
document.write(`<mark>Цурекок білше у ${secondName}</mark>`)
else document.write(`<mark>Порівну</mark>`)
