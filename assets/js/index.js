/*
Level 2

6 Спросите у пользователя номер месяца (это будет число из интервала от 1 до 12) . Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let vremyaGoda = prompt('Введите какой сейчас номер месяца от 1 до 12')
let seasons
if (vremyaGoda >= 12 || vremyaGoda <= 2) {
  seasons = 'Сейчас пора Зимы'
} else if (vremyaGoda > 2 && vremyaGoda < 6) {
  seasons = 'Сейчас пора Весны'
} else if (vremyaGoda >= 6 && vremyaGoda < 9) {
  seasons = 'Сейчас пора Лета'
} else if (vremyaGoda >= 9 && vremyaGoda < 12) {
  seasons = 'Сейчас пора Осени'
}
alert(`${seasons}`)
*/

/*
7 Если переменная a равна или меньше 1, а переменная b больше 5, то выведите сумму этих переменных, иначе выведите их разность.

let peremA = prompt('Введите переменную a')
let peremB = prompt('Введите переменную b')

let sum
let razn
if (peremA <= 1 && peremB >= 5) {
  let sum = Number(peremA) + Number(peremB)
  alert(`сумму переменных a и b равна,${sum}`)
} else {
  let razn = Number(peremA) - Number(peremB)
  alert(`разность переменных a и b равна,${razn}`)
}
*/

/*
let price = 100
let col = Number(prompt('Хот-дог по 100грн. Сколько вы хотите купить?'))
let value = col * price
if (value >= 500 && value < 800) {
  value = value * 0.98
  console.log(`Вы получили скидку в 2%, сумма к оплате: ${value}`)
} else if (value >= 800) {
  value = value * 0.97
  console.log(`Вы получили скидку в 3%, сумма к оплате: ${value}`)
} else {
  console.log(
    `Ваша сумма покупки меньше 500 грн, сумма к оплате без скидки ${value} грн.`,
  )
}
*/

/*
Level 3

9 Определите к внешней или к внутренней части круга принадлежит введенная пользователем точка с координатами (x, y) если уравнение окружности в центре координат (0,0) будет x^2 + y^2 = r^2. Значение радиуса и координаты точки задаёт пользователь.
Примечание : значком ^ отмечена степень числа.

let x = prompt('Введите координаты x')
let y = prompt('Введите координаты y')
let z = prompt('Введите радиус круга')
let r = Math.sqrt(x * x + y * y)
if (r > z) {
  alert('Точка принадлежит внешней части круга')
} else {
  alert('Точка принадлежит внутренней части круга')
}
*/
