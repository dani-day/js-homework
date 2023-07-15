# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.



---
# 결과화면
![js-01](https://github.com/dani-day/js-homework/assets/134567470/13d3b139-5144-47e1-ad3c-0e23430ee722)


# index.html 변경사항
click 이벤트 적용을 위해, `<button type = "submit">` 에서 `<button type = "button">` 으로 변경하였습니다.

# main.js
## 기존 코드
1. function emailReg(text): 정규식을 사용하여 email 주소 validation
2. function pwReg(test): 정규식을 사용하여 pw validation

## 추가
### 1. email validation 여부에 따라 class 명 추가 및 삭제
- addEventListner 에 이벤트 타입을 input 으로 하여 입력된 value 에 따라 validation 여부 확인할 수 있도록 함.
- emailReg(this.value) 의 True | False 여부에 따라 class 명에 'is--valid' 삭제 또는 추가하도록 함.

```javascript
const email = document.getElementById('userEmail');
email.addEventListener('input', function () {
  if (emailReg(this.value)) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
});
```

### 2. pw validation 여부에 따라 class 명 추가 및 삭제
위와 동일한 로직입니다.

### 3. 이메일 및 비밀번호 일치 시 로그인
- 이메일 및 비밀번호 일치 여부 && 조건으로 확인
- 이후 welcome.html 로 이동
- 불일치 시, alert

```javascript
const loginBtn = document.querySelector('.btn-login');
loginBtn.addEventListener('click', () => {
  if (email.value === user.id && pw.value === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
  }
});
```
