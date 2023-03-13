function doAction() {
 const ul = document.getElementById('users');
 // createDocumentFragment 메모리 상 임시공간을 만드는 함수
 const list = document.createDocumentFragment();
 const url = 'https://jsonplaceholder.typicode.com/users'

//  fetch(url) 
//   .then((reponse)=> {
//     console.log('통신 시작');
//     return reponse.json();
//   })
//   .then((data) => {
//     console.log(data);
//     let users = data;

//     users.map(function(user) {
//       let li = document.createElement('li');
//       let name = document.createElement('h2');
//       let email = document.createElement('span');
//       let phone = document.createElement('p');
      
//       name.innerHTML = user.name;
//       email.innerHTML = user.email;
//       phone.innerHTML = user.phone
       
//       li.appendChild(name);
//       li.appendChild(email);
//       li.appendChild(phone);
     
//       list.appendChild(li);
//       ul.appendChild(list);
//     });
//   })

//   .catch(function(error) {
//     console.log(error)
//   });

//   console.log('통신 종료')


$.ajax({
  // 주로 사용하는 것 //
  // type
  // url
  // success
  // error
  // async
  // headers
  // dataType
  // data
  // succes
 

  type : 'GET',
  url : 'https://jsonplaceholder.typicode.com/users',
  success : function(result) {
    console.log(result);
    for(let i = 0; i < result.length; i++) {
      var res = result[i];
      var classNm = 'changeRed';
      if(res.name.length <= 17){
        classNm = 'changeYellow';
      }
      $('#users').append(
                           '<li class=' + classNm + '>'
                          +  '<h2>' + res.name + '</h2>'
                          +  '<span>' + res.email + '</span>'
                          +'</li>'
      )
    }
  },
  error : function(request, status, error) {
    console.log("code" + request.status);
    console.log("message" + request.responseText);
    console.log("error" + error);
  }
})
console.log('통신 종료');





}