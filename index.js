function sum(a, b) {
    console.log(a + b);
}
sum(5, 6);
sum(6, 47);

//функция которая находит площадь прямоугольника
function area(c, d) {
    console.log("площадь прямоугольника равна " +  c * d);
}
area(15, 20);


//число четное или не четное
function  number(v){
 if (v % 2 === 0){
    console.log (v + " even");
 } 
 else if( v % 2 === 1){
    console.log( v + " odd");
 }
 else{
    console.log( v + " is not a number");
 }

}
number( "tea");
