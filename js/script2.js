

const cost = parseInt(prompt('Введіть вартість товару'))
const many = parseInt(prompt('Введіть наявну кількість грошей'))



if (many < cost)
document.write('Коштів не вистачає(в мене таке постійно)')
else if (many - cost > 4)
document.write('Дякуємо за покупку! Не хочете лотерейний лохотрон за 4грн?')
else if (many >= cost)
document.write('Дякуемо за покупку!')
