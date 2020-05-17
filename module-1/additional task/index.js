const case1 = 5 + '5' + 5;
const case2 = !true + '' + 5;
const case3 = '' - 5 + true;
const case4 = '' + !"string" - 5 + true;
console.log(`Случай 1 :${typeof case1}`);
console.log(`Случай 2 :${typeof case2}`);
console.log(`Случай 3 :${typeof case3}`);
console.log(`Случай 4 :${typeof case4}`);
console.log("Когда прибавляем число, если есть строка прибавляется как строка. Но если отнимать число, оно сразу преобразует в число");