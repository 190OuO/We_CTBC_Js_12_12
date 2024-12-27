console.log("這是外部的JS")

// 變數  Variable (會改變的數值)
// 儲存網站內的資料，例如:顏色、字體大小、元素、使用者資訊

// 變數語法
// let 變數名稱 (指定 預設值);

//變數命名習慣(守則)
// 1. 不使用中文命名
// 2. 不使用數字開頭
// 3. 不使用全形符號＠
// 4. 空格 test 1
// 5. 保留字 (有作用的關鍵字) if、let

// 建議命名方式:(駝峰式命名)
// 1.多個單字開頭
// 2.開頭使用小寫
// 3.單字相連自首用大寫
// 4.用有意義的名稱命名
let test =7;
let fonColor = "#f63";

// 取得變數 get
console.log(test);
console.log(fonColor);

// 設定變數 set 
test =9;
console.log(test);

// 資料類型
let VarNumber =1.5;   //數值
let VarString ="字串";//字串
let varBool = true;   //布林值(true、false)

// typeof 獲得資料型態
console.log(VarNumber);
console.log(VarString);
console.log(varBool);

// 運算子 
// 加、減、乘、除、餘、次方(+,-,*,/,%,**)
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);   // 10除以3=3餘1
                        // 10除以3次方

// 指定運算子 (指定符號=)
let numberTest = 99 + 1;
console.log(numberTest);
numberTest++;
console.log(numberTest);
numberTest--;
console.log(numberTest);
numberTest+=10;          // 適用於+-*%  
console.log(numberTest);
numberTest-=10; 
console.log(numberTest);

console.log("%c比較運算子","color: gold");
// > < >= <= === !== ( 執行結果是布林值)
console.log(100 > 1);
console.log(100 < 1);
console.log(100 === 1); //等於F
console.log(100!==1);   //不等於 T

//  == 與 === (嚴格比較，數值與類型都要相同)

let VarNumber10 =10;
let VarString10 ="10";

console.log(VarNumber10 == VarString10);
console.log(VarNumber10 === VarString10);      //嚴格比較，資料類型不同，結果為false

console.log("%c判斷式","color:gold");
// 判斷式語法
// if (布林值){ 布林值等於 true 執行此區塊 block }
if (false) {             //if (假如是false 則不會執行 且字顏色會變淡 )
    console.log("這裡是判斷式");  // 這邊
}

let score = 60;

if (score>=90){
    console.log("你的評級:A");
}
else if(score>=80){
    console.log("你的評級:A-");
}
else if(score>=75){
    console.log("你的評級:A");
}
else if(score>=70){
    console.log("你的評級:B+");
}
else if(score>=65){
    console.log("你的評級:B-");
}
else if(score>=60){
    console.log("你的評級:B");
}
else{
    console.log("你的評級:F");
}

// 判斷玩家生命值 

let HP=1000;

if (HP>=60){
    console.log("你的血量很健康")
}
else if (HP<=60 && HP >0){
    console.log("你需要補血")
}
else if (HP<60){
    console.log("你已死亡")
}

console.log("%c迴圈","color:gold");
// for 迴圈
// for 語法:
// for (初始值; 條件 選代器) {程式區塊 }
for(let index =0; index <=5; index++){
    console.log("迴圈",index);
    // alert("笑你關不掉")
}

// 變數
let letCount =1;
letCount =2;
letCount =3;

// 常數(不可變的數值)
const constConst =1;
//  constConst =2;          //產生錯誤，原因:常數不可改變

// 不可重新定義
// let letCount =10;        //產生錯誤，原因:重複宣告
// const constCount =10;    //產生錯誤，原因:重複宣告

// 常數命名習慣會使用全大寫並使用底線區隔
const PI =3.14
const WEB_FONT_SIZE = 24;

//  變數 var (variable)
var varCount =1;
varCount =123;
var varCount =3;      //可重新賦予值
console.log(varCount); //可重新定義(不建議)

// 作用域 Scope {} 
// let 與 const 的作用域都在{}區塊內
{
    let letTest =1;
    const constTest =1;
    var varTest =1;
    console.log("let:"+letTest); 
    console.log("const:"+constTest);
    console.log("var:"+varTest );
}
/* 
console.log("let:"+letTest);     錯誤 超出作用域
console.log("const",constTest);  錯誤 超出作用域
 */
console.log("var",varTest);

console.log("cfunction 函式、方法或功能","color: gold")
//函數語法

// function 函式名稱(){ }
function logLine(){
    console.log("%c ----我是分隔線----","color: gold");
}

// 函式需要被呼叫:函式名稱();
logLine();
logLine();
logLine();
logLine();
logLine();

// 對照組 (比較不適合的寫法)
function logLineRed(){
    console.log("%c ------我是分隔線------","color:red");
}

function logLineGreen(){
    console.log("%c ------我是分隔線------","color:green");
}
logLineRed();
logLineGreen();

// 程式要注意的事情:思考未來的維護性、擴充性、可讀性

// (比較適合的寫法)
// fauction 函式名稱 (參數){ }
function logLineWithColor(color){
    console.log("%c ------我是分隔線------",`color:${color}`);
}
logLineWithColor("blue");
logLineWithColor("black");

// 參數的預設值
function logLineWithColor(color="gold"){
    console.log("%c ------我是分隔線------",`color:${color}`);
}
logLineWithColor("red");
//  不給參數會直接使用預設值
logLineWithColor();

console.log("%c表達式函式","color:gold");
// 表達式函式語法:
// const 變數 =函式 (參數) {}
const print =function (color="red"){
    console.log("%c測試",`color: ${color}`);
}

// 變數名稱(參數)
print("green")
print("gray")

const printMessage =function (color="red",message="這是預設文字"){
    console.log(`%c${message}`,`color: ${color}`);
}

printMessage();
printMessage("gold");
printMessage("gold","訊息");
// 想要使用預設顏色，文字要使用" 訊息"
printMessage("訊息")            //錯誤結果
printMessage(undefined,"訊息"); //正確結果

console.log("%c函式傳回值","color:gold");
// 有傳回值的函式，必須使用一個return 關鍵字將值傳回
function double(number){
    return number *2;
}

// 使用方式 1:用變數將傳回值儲存
const result =double(10);
console.log(result);
// 使用方式 2:直接將傳回函式當作數值使用
console.log(double(7));

// 表達式傳回函式
// 平方函式
const square =function (number){
    return number * number;
}
console.log(square(9));
console.log(square(321));
// 提升 hosting
// 在定義函式以前就能呼叫
// 一般函式會提升
console.log("一般函式",Math.floor (bmi(60,1.68)));
// 表達式函式不會提升，不能在定義以前呼叫(相對安全)
// console.log("表達式函式",Math.floor(bmiExpression(60,1.68)));
// console.log("箭頭函式",Math.floor(bmiArrow(60,1.68)));


// 一般函式:BMI
function bmi(weight, height){
    return weight /square (height);
}

console.log(Math.floor (bmi(60,1.68)));

// 表達函式:BMI
const bmiExpression = function (weight, height){
    return weight / square(height);
}
console.log(Math.floor(bmiExpression(60,1.68)))
console.log(Math.floor(bmiExpression(90,1.90)))

// 箭頭函式=>
const bmiArrow =(weight, height) =>{
    return weight / square(height);
}
console.log(Math.floor(bmiArrow(60,1.68)))
console.log(Math.floor(bmiArrow(90,1.90)))






