
//задача про студентов и двоечников


let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let but = document.getElementById('but')

let students = ['Иванов','Петров','Сидоров','Ковалев','Тумашов','Наумова','Пупкин','Соловьева','Пригожина','Усачева']



function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function f1(){
    const grade = [random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5)]
    let str1 = '<tr><td>Фамилия</td><td>Оценка</td></tr>'
    let str2 = ''

for ( let i=0; i<students.length; i++){
str1 += '<tr><td>'+students[i]+'</td><td>'+grade[i]+'</td></tr>'
}
for (let i=0; i<grade.length; i++){
if (grade[i] === 2){
str2 += '<tr><td>'+students[i]+'</td></tr>'
}
}

out1.innerHTML = str1
out2.innerHTML = str2

}

but.onclick = f1

//задача про машины


let names = document.getElementById('names')
let img = document.getElementById('img')
let characteristics = document.getElementById('characteristics')

let imeges = ['img/ВАЗ-2101.jpg','img/ВАЗ-2105.jpg','img/ВАЗ-2170.jpg','img/ГАЗ-М20.jpg']

let name_cars = ['ВАЗ-2101','ВАЗ-2105','ВАЗ-2170','ГАЗ-М20']

let caracterist = ['ВАЗ-2101 «Жигули» — советский заднеприводный легковой автомобиль малого класса с кузовом типа седан. Первая модель, выпущенная Волжским автомобильным заводом. На базе ВАЗ-2101 было создано так называемое «классическое» семейство автомобилей ВАЗ, которое находилось на конвейере до 17 сентября 2012 года',

'ВАЗ-2105 «Жигули» (LADA 2105) — советский и российский заднеприводный автомобиль III группы малого класса с кузовом типа седан. Был разработан и серийно выпускался на Волжском автомобильном заводе. Первые опытно-промышленные партии были собраны в октябре 1979, полномасштабное производство развёрнуто в январе 1980 года и длилось до 30 декабря 2010 года. Самый длительно выпускавшийся автомобиль классического семейства (30 лет, с 1980 по 2010 годы). За всё время производства АвтоВАЗ выпустил 2 091 000 автомобилей ВАЗ-2105 всех модификаций с кузовом седан.',

'LADA Priora — семейство рестайлинговых российских автомобилей, ранее носивших названия «Lada 110», «Lada 111», «Lada 112»[2], III группы малого класса, выпускавшихся ПАО «АвтоВАЗ» c 2007 по 2018 год. Головной моделью семейства является седан, носящий по отраслевой нормали ОН 025270-66 ВАЗ-2170.',

'ГАЗ М-20 «Побе́да» — советский легковой автомобиль среднего класса, серийно производившийся на Горьковском автомобильном заводе (ГАЗ) в 1946—1958 годах, в Польше в 1951—1973 годах и в Камбодже или Китае (предположительно) в 1957—2002 годах.Заводской индекс модели — М-20. Легковой автомобиль представляет собой третье поколение легковых машин ГАЗ и является преемником модели М-1. 28 июня 1946 года начался серийный выпуск автомобилей «Победа». Всего до 31 мая 1958 года было выпущено 241 497 машин, включая 14 222 кабриолетов и 37 492 такси.']

but1.onclick = f2
but2.onclick = f3


let s = 0
function f2(){
    s++
    img.src = imeges[s]
    names.innerHTML = name_cars[s]
    characteristics.innerHTML = caracterist[s]
    if (s > name_cars.length - 3 ){
        but1.setAttribute('disabled','')
        {but2.removeAttribute('disabled','')}
    }
}

function f3(){
    s--
    img.src = imeges[s]
    names.innerHTML = name_cars[s]
    characteristics.innerHTML = caracterist[s]
    if (s <= 0 ){
        but1.setAttribute('disabled','')
    }
}


