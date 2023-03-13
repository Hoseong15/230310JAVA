// let user = prompt('가위 바위 보를 합시다')
// let userChoise = parseInt(Math.random() * 3) + 1
// console.log(userChoise)
// document.write('당신의 선택은' + user + '<br>')
// document.write('컴퓨터의 선택은' + userChoise + '<br>')

// switch(userChoise - user) {
//   case 2 : case - 1:
//     document.write('당신이 이겼습니다')
//     break;
//   case 1 : case -2 :
//     document.write('당신이 졌습니다')
//     break;
//   case 0:
//     document.write('비겼습니다')
//     break; 
//   default:
//     document.write('잘못 입력')  
//     break;
// }


// for(i =0; i < 10; i++) {
//   document.write(i + "<br>")
//   console.log(i)
// }


// let a = 0
// do {
//   document.write(a)
//   a++
// } while (a < 10) {
//   document.write()
//   // document.write(a)
// };

// let arr = ['딸기', '오렌지', '파인애플', '포도', '사과', '배']

// text : for(let i in arr) {
//   document.write(arr[i] + '<br>')
// }

// let a = 0;

// for(let i =0; i <=10; i++) {
//   document.write(i*2 + '<br>')
// }


// let sum = 0;
// for(let i = 1; i <= 10; i++) {
//   sum = sum + i;
//   document.writeln(sum );
// }

// let seascon = ['봄', '여름', '가을', '겨울']

// for(let i =0; i < 4; i++) {
//   document.write(seascon[i]+ '')
// }

// for(let i =0; i <seascon.length; i++) {
//   document.write('<p>' + seascon[i] +'</p>')
// }
// let c = seascon.slice(1)
// console.log(c)

// let nums = [1,2,3]
// let chars = ['a','b','c','d']

// let nusChars = nums.concat(chars);
// let charsNum = chars.concat(nums);

// document.write("첫번째 :" + nusChars ,'<br>' + '두번째 :' + charsNum)


// let ccc = [1,2,3,4,5]
// let ddd = ccc.slice(2)
// // 2부터 끝까지 //  
// let dddd = ccc.slice(2, 4)
// // 2부터 4번 까지 // 
// console.log(ddd)
// console.log(dddd)


// let eee = [1,2,3,4,5] 
// let eeee = eee.splice(1,4)
// console.log(eeee)


// let str = '안녕하세요'
// console.log(str.substring(1,4));
// document.write('<h1>' + str.substr(1,4) + '<h1>');


let str1 = '우리나라 대한민국 좋은나라'
// substring => '민국 좋은'
document.write('<h1>' + str1.substring(12 , 7))
// 우리나라 대한민국 좋은  에서 7번째까지 자르고 나오게

// substr => '나라 대한'
document.write('<h1>' + str1.substr(2,5))
// 우리나라 대한민국 좋은나라 에서 2개 자르고 5개까지 보이게

// slice => '대한민국 좋'
document.write('<h1>' + str1.slice(4,11))
// 우리나라 대한민국 좋은나라 에서 4까지 자르고 11까지 보이게

function openPopup() {
  open('http://www.google.co.kr', '_blank', 'width=200, height:200')
}

let cover = document.getElementsByTagName('img')[0];
cover.addEventListener('mouseover', changePic, false);
cover.addEventListener('mouseout', originPic, false);

function changePic() {
  cover.src = './202212008462_206.jpg';
}

function originPic() {
  cover.src = './f26523b6d699852ace4f3c49f086f7a4617ea012db208c18f6e83b1a90a7baa7.png';
}
