


const randomNumber = Math.floor(Math.random() * 5) + 1
const firstAttempt = parseInt(prompt('Введіть число від 1 до 5(спроба 1)'))

if (randomNumber === firstAttempt)
	document.write(`Ви вгадали з першого разу </br>
  згенероване число - ${randomNumber} </br>
  введене число - ${firstAttempt}`)
else {
	const secondAttempt = parseInt(prompt('Спробуйте ще раз(схоже на якійсь розвод)'))
	if (randomNumber === secondAttempt)
		document.write(`Ви вгадали з другого разу </br>
	згенероване число ${randomNumber}
	введене число - ${secondAttempt}`)
	else document.write (`
	Ви не вгадали жодного число </br>
	Згенероване число - ${randomNumber} </br>
	Введені числа - ${firstAttempt} та ${secondAttempt}`)
} 
