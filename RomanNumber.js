// function convertToRoman(num) {
//   var romanLookup = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
//   var roman = [];
//   var romanKeys = Object.keys(romanLookup);
//   var curValue;
//   var index;
//   var count = 1;
//   for (var numeral in romanLookup) {
//     curValue = romanLookup[numeral];
//     index = romanKeys.indexOf(numeral);
//     while (num >= curValue) {
//       if (count < 4) {
//         roman.push(numeral);
//       } else {
//         if (roman.indexOf(romanKeys[index - 1]) > -1) {
//           roman.splice(roman.indexOf(romanKeys[index - 1]));
//           roman.push(romanKeys[index], romanKeys[index - 2]);
//         } else {
//           roman.splice(-3);
//           roman.push(romanKeys[index], romanKeys[index - 1]);
//         }
//       }
//       num -= curValue;
//       count++;
//     }
//     count = 1;
//   }
//   return roman.join("");
// }
// convertToRoman(36);


// function palindrome (str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return alert("No es un palindromo")
//       }
//     }
//     return alert("Es un palindromo");
//    }
//    palindrome("A man, a /*plan, a canal. Panama");


//Caesar cipher

// function caesarCipher (str,num){
//     var num = 13;
//     var lowerCaseStr = str.toLowerCase();
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     var newStr = '';

//     for(var i = 0; i < lowerCaseStr.lenght; i++){
//         var currentLetter = lowerCaseStr[i];
//         if(currentLetter === ''){
//             newStr += currentLetter;
//             continue;
//         }
//         var currentIndex = alphabet.indexOf('currentLetter');
//         var newIndex = currentIndex + num;
//         if(newIndex > 25) newIndex = newIndex - 26;
//         if(newIndex < 0) newIndex = newIndex + 26;
//         if(str[i] === str[i].toUpperCase()) {
//             newStr += alphabet[newIndex].toUpperCase();
//         }
//         else newStr += alphabet[newIndex];
//     }
//     return newStr;
// }

// function telephoneCheck(str) {
//   const regExp = /^1{1} [(]{1}[0-9]{3}[)]{1}\-[0-9]{3}\-[0-9]{4}$|^1{1} [0-9]{3} [0-9]{3} [0-9]{4}$|^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$|^[0-9]{10}$|^[(]{1}[0-9]{3}[)]{1}[0-9]{3}\-[0-9]{4}$|^[(]{1}[0-9]{3}[)]{1} [0-9]{3}\-[0-9]{4}$|^1{1} [0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
//   return regExp.test(str);
// }

// console.log(telephoneCheck("1 (555)-555-5555"));

// //Para añadir arriba a la expresion regular

// function checador(str){
//   const regExp = /^1{1}[(]{1}[0-9]{3}[)]{1}[0-9]{3}\-[0-9]{4}$/ 
// }

//Caja Registradora

function checkCashRegister(price, cash, cid) {
  let disponible = cid.slice()
  let cambio = cash*100-price*100;
  let change = [];
  let total = 0, parcial = 0;
  let dineroCaja = 0;
  let valores = [1,5,10,25,100,500,1000,2000,10000];
  
  for (let i=0; i<disponible.length;i++){
    dineroCaja += (disponible[i][1]*100);
  }
  
  
  
  
  if(cambio>dineroCaja){
    return {status:"INSUFFICIENT_FUNDS", change: []}
  }
  
  for(let i=valores.length-1;i>=0; i--){
    if(cambio>=valores[i]){
      while(cambio>=total+valores[i]&&disponible[i][1]*100>0){
        parcial = parcial + valores [i];
        total = total + valores[i];
        disponible[i][1] = (disponible[i][1] - (valores[i]/100));
        dineroCaja = dineroCaja - valores[i]
      }
      if(parcial>0)
      change.push([disponible[i][0],parcial/100]);
    parcial = 0;
    }
  }
  
  
  if(total===cambio){
    if(dineroCaja>0)
    return {status:"OPEN", change: change};
    else 
    return {status: "CLOSED", change: cid};
  }
    else
    return {status:"INSUFFICIENT_FUNDS", change: []}
   
  }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

  // Debe devolver
  // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
