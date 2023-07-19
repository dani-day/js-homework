const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}

// Node 받아오는 함수
function getNode(text) {
  if (typeof text !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입이어야 합니다.');
  }
  let node = document.querySelector(text);
  return node;
}

// email 및 pw 일치여부 확인
function checkLogin(type) {
  if (type === 'email') {
    return getNode('#userEmail').value === user.id;
  } else if (type === 'pw') {
    return getNode('#userPassword').value === user.pw;
  }
}

// email 및 pw 밸리데이션 확인
function validTest(type) {
  if (type === 'email') {
    let node = getNode('#userEmail');
    return emailReg(node.value);
  } else if (type === 'pw') {
    let node = getNode('#userPassword');
    return pwReg(node.value);
  }
}

function handleEvent() {
  // Email input 확인
  getNode('#userEmail').addEventListener('input', function () {
    this.classList.toggle('is--invalid', !validTest('email'));
    //> 요 함수 분리하는 것이 좋음
  });

  // Password input 확인
  getNode('#userPassword').addEventListener('input', function () {
    this.classList.toggle('is--invalid', !validTest('pw'));
  });

  // 로그인 버튼 클릭 시, 확인
  getNode('.btn-login').addEventListener('click', (e) => {
    e.preventDefault();
    //> 얘는 항상 최상위에 있어야 함.

    if (validTest('email') && validTest('pw')) {
      if (checkLogin('email') && checkLogin('pw')) {
        window.location.href = 'welcome.html';
      } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    }
  });
}

handleEvent();

// * 범쌤 풀이

// const user = {
//   id:'asd@naver.com',
//   pw:'spdlqj123!@'
// }

// /*

// 1. email 정규표현식을 사용한 조건처리
//    - false면 해당 input에 is--invalid 추가
//    - true면 해당 input에 is--invalid 제거

// 2. pw 정규표현식을 사용한 validation
//    - false면 해당 input에 is--invalid 추가
//    - true면 해당 input에 is--invalid 제거

// 3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
// 4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교

// 5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

// */

// // @ 기호 포함, .포함 이후 2글자 이상
// function emailReg(text){
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return re.test(String(text).toLowerCase())
// }

// // 최소 6글자 이상, 0~9숫자 1개 이상 포함, 특수기호 1개 이상 포함
// function pwReg(text){
//   const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
//   return re.test(String(text).toLowerCase());
// }

// const emailInput = document.querySelector('#userEmail');
// const pwInput = document.querySelector('#userPassword');
// const loginButton = document.querySelector('.btn-login');

// let emailPass = false;
// let pwPass = false;

// // 태그가 가지고있는 고유한 능력 x

// function handleCheckEmail(){

//   const value = this.value;

//   if(emailReg(value)){
//     this.classList.remove('is--invalid');
//     emailPass = true;
//   }else{
//     this.classList.add('is--invalid');
//     emailPass = false;
//   }
// }

// function handleCheckPw(){
//   const value = this.value;

//   if(pwReg(value)){
//     this.classList.remove('is--invalid')
//     pwPass = true;
//   }else{
//     this.classList.add('is--invalid')
//     pwPass = false;
//   }
// }

// function handleLogin(e){
//   e.preventDefault();

//   if(emailPass && pwPass){

//     try{

//       const id = emailInput.value;
//       const pw = pwInput.value;

//       const getUserId = user.id;
//       const getUserPw = user.pw;

//       if(id === getUserId && pw === getUserPw){
//         window.location.href = 'welcome.html';
//       }else{
//         console.log('정확한 아이디와 비밀번호를 입력해 주세요.');
//       }
//     }
//     catch(e){
//       alert(e.message)
//     }

//   }else{
//     console.log('정확한 아이디와 비밀번호를 입력해 주세요.');
//   }

// }

// emailInput.addEventListener('input',handleCheckEmail)
// pwInput.addEventListener('input',handleCheckPw)
// loginButton.addEventListener('click',handleLogin)
