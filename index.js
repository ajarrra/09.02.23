function sum(a, b) {
    console.log(a + b);
}
sum(5, 6);
sum(6, 47);

//функция которая находит площадь прямоугольника
function area(c, d) {
    console.log("площадь прямоугольника равна " + c * d);
}
area(15, 20);


//число четное или не четное
function number(v) {
    if (v % 2 === 0) {
        console.log(v + " even");
    }
    else if (v % 2 === 1) {
        console.log(v + " odd");
    }
    else {
        console.log(v + " is not a number");
    }

}
number("tea");
number(6);
number(3);


//от 5 до 10 и от - 10 до 10 создать цикл
function countop(a, b) {
    let countop = a;
    while (countop <= b) {
        console.log(countop);
        countop++;
    }
}
countop(5, 10);
countop(-10, 10);


//создать отчет 
function countdown(a, b) {
    let num = a;
    while (num >= b) {
        console.log(num);
        num--;
    }

}
countdown(10, 5);
countdown(10, -10);


function countop1(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
countop1(7, 12)



function count(a, b) {
    if (a < b) {
        countop(a, b);
    }
    else {
        countdown(a, b);
    }

}
count(5, 10);

//массивы
let names = ["Aidai", "Bakyt", "Joldosh"];
for (let i = 0; i <= names.length; i++) {
    console.log(" my name is " + names[i]);
}


//вывести имена наоборот
for(i = names.length -1 ; i >= 0 ; i--){
  console.log("my name is " + names[i]);
}

//Aiday - 5
//Bakyt - 5
//Joldosh - 7

//вывести длину имени(кол-во букв )
for( i = 0; i < names.length ;i++){
    console.log(names[i].length);
}



