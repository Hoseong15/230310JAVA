function doAction() {
 const ul = document.getElementById('users');
 // createDocumentFragment 메모리 상 임시공간을 만드는 함수
 const list = document.createDocumentFragment();
 const url = 'https://jsonplaceholder.typicode.com/users'


 fetch(url) 
  .then((reponse)=> {
    console.log('통신시작');
    return reponse.json();
  })
  .then((data) => {
    console.log(data)
  })
}