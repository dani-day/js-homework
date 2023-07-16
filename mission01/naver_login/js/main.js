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

const email = document.getElementById('userEmail');
email.addEventListener('input', function () {
  if (emailReg(this.value)) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
});

const pw = document.getElementById('userPassword');
pw.addEventListener('input', function () {
  if (pwReg(this.value)) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
});

const loginBtn = document.querySelector('.btn-login');
loginBtn.addEventListener('click', () => {
  if (email.value === user.id && pw.value === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
  }
});
