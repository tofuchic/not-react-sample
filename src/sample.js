/**
 * const, let等の変数宣言
 */
// BeforeモダンJSにおいて使われていたvar変数
var var1 = "var変数";
console.log(var1);

// var変数は上書き可能
var1 = "var変数を上書き";
console.log(var1);

// var変数は再宣言可能
var var1 = "var変数を再宣言";
console.log(var1);

// ------------------------------------------------- //

// 上書きのみ可能なlet変数
let let1 = "let変数";
console.log(let1);

// let変数は上書き可能
let1 = "let変数を上書き";
console.log(let1);

// let変数は再宣言不可能
// let let1 = "let変数を再宣言";
// console.log(let1);

// ------------------------------------------------- //

// 一度のみ宣言可能なconst変数
const const1 = "const変数";
console.log(const1);

// const変数は上書き不可能
// const1 = "const変数を上書き";
// console.log(const1);

// const変数は再宣言不可能
// const const1 = "const変数を再宣言";
// console.log(const1);

// ------------------------------------------------- //

// constで定義した構造体の中身は上書き可能だが、どのタイミングで参照されても最終形が出力される
const const2 = {
  name: "豆腐",
  age: 27
};
console.log(const2);
const2.name = "とうふ";
const2.address = "東京都";
console.log(const2);

// ------------------------------------------------- //

// constで定義した配列でも同様
const const3 = ["dog", "cat"];
console.log(const3);

const3[0] = "bird";
const3.push("monkey");
console.log(const3);

// ------------------------------------------------- //

/**
 *  テンプレート文字列
 */

const name = "とうふ";
const age = 28;
// 「私の名前はとうふです。年齢は28歳です。」と出力したい

// 従来（+をたくさん書かないといけなくて無駄が多い）
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// モダンJS
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// ------------------------------------------------- //

/**
 *  アロー関数
 */

// 従来（）
function func1(str) {
  return str;
}
console.log(func1("func1です。"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2です。"));

// モダンJS
const func3 = (str) => {
  return str;
};
console.log(func3("func3です。"));

const func4 = (str) => str;
console.log(func4("func4です。"));

const func5 = (num1, num2) => num1 + num2;
console.log(func5(10, 20));

// ------------------------------------------------- //

/**
 *  分割代入
 */

// 従来（変数名が長かったり子要素が多いとテンプレート文字列が長くなってしまう）
const myProfile = {
  name: "とうふ",
  age: 28
};
const message3 = `名前は${myProfile.name}で、年齢は${myProfile.age}です。`;
console.log(message3);

// モダンJS
const myProfile2 = {
  name2: "とうふ",
  age2: 28
};
const { name2, age2 } = myProfile2;
const message4 = `名前は${name2}で、年齢は${age2}です。`;
console.log(message4);

const myProfile3 = ["とうふ", 28];
const message5 = `名前は${myProfile3[0]}で、年齢は${myProfile3[1]}です。`;
console.log(message5);

const [name3, age3] = myProfile3;
const message6 = `名前は${name3}で、年齢は${age3}です。`;
console.log(message6);

// ------------------------------------------------- //

/**
 *  デフォルト値
 */

// undefinedと表示されたくない
const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
sayHello();

// undefinedと表示しない
const sayHello2 = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello2();

// ------------------------------------------------- //

/**
 *  スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

// 配列の中身を全て関数にぶち込むときには便利
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめるときも便利
const arr2 = [1, 2, 3, 4, 5];
// const [...arr3, numError] = arr2; // arr3にarr2がすべて格納されてしまうので、numErrorが浮く
const [num3, num4, ...arr3] = arr2;
console.log(num3);
console.log(num4);
console.log(arr3);

// 配列のコピーや結合でも便利
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4, ...arr5];
console.log(arr6);

// 配列のコピーを=でやったときの問題（同じアドレスを共有するので注意が必要）
const arr7 = arr4;
arr4[0] = 100;
console.log(arr7);

// ------------------------------------------------- //

/**
 *  mapやfilterを使った配列の処理
 */
// 従来
const nameArr = ["田中", "山田", "とうふ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// モダンJS
const nameArr2 = nameArr.map((name, index) => {
  return `${index + 1}番目は${name}です。`;
});
console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// 変数の順番は大事
// nameArr.map((index, name) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => num % 2 === 1);
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name == "とうふ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// ------------------------------------------------- //

/**
 *  三項演算子
 */
// ひとつ↑の処理を簡略化する
const newNameArr2 = nameArr.map((name) =>
  name == "とうふ" ? `${name}` : `${name}さん`
);
console.log(newNameArr2);

// typeの判定
const num5 = "100";
console.log(
  typeof num5 === "number" ? num5.toLocaleString() : "数値を入力してください"
);

// ------------------------------------------------- //

/**
 *  論理演算子の意味
 */
// 一般的な使い方
const flag1 = true;
const flag2 = false;

flag1 || flag2 ? console.log("1か2はtrue") : null;
flag1 && flag2 ? console.log("1も2もtrue") : null;

// これは？（||は、左側がtrueなら左側を、左側がfalseだったら右側を返す）
const numA = 100;
// const numA = null;
const numB = numA || "金額未設定です";
console.log(numB);

// これは？（&&は、左側がfalseなら左側を、左側がtrueなら右側を返す）
const numC = 100;
// const numC = null;
const numD = numC && "金額が設定されました";
console.log(numD);
