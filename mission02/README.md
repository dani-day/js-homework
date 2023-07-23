# 결과 화면

![element](https://github.com/dani-day/js-homework/assets/134567470/10f4a41c-e389-4a2b-86ac-6e1f76d4504a)

---

# 구현 내용

- [x] 1. 클릭 이벤트 활성화
- [x] 2. 클릭 시, 배경 색상 변경
- [x] 3. 클릭 시, 이미지 변경
- [x] 4. 클릭 시, 텍스트 변경
- [x] 5. 함수 분리
- [x] - 추가 구현: 클릭 시, audio 재생

---

# HTML

audio 구현을 위해 audio 태그 추가하였습니다.

```javascript
<audio class="audio" src="/"></audio>
```

---

# JavaScript

## main.js

### 1. 전역변수

전역변수는 nav, li, img, nickName, audio 총 5개 선언/할당 하였습니다.

```javascript
const navigation = getNode('.nav');
const list = getNodes('.nav li');
const image = getNode('.visual img');
const nickName = getNode('.nickName');
const audio = getNode('.audio');
```

### 2. 함수

함수는 총 5개로 구현하였습니다.
navigation 의 클릭 이벤트 시, handleSlider 함수가 실행되며 handleSlider 안에서 setting 함수들을 call 하는 구조입니다.

```javascript
function setImage(target, index) {}
function setBgColor(color1, color2 = '#000') {}
function setNameText(index) {}
function setAudio(index) {}
function handleSlider(e) {}
```

### 2-1. handleSlider 함수

최초 구현 시 함수마다 변수를 별도로 선언하였으나, target 변수와, index 변수가 중복되어 리팩토링하였습니다.

```javascript
function handleSlider(e) {
  const target = e.target.closest('li');

  if (!target) return;
  const index = attr(target, 'data-index');

  const color1 = data[index - 1].color[0];
  const color2 = data[index - 1].color[1];

  setImage(target, index);
  setNameText(index);
  setBgColor(index, color1, color2);
  setAudio(index);
}
```

### 3. 이벤트리스너

handlerSlider 함수에 setting 함수를 모두 포함하였기 때문에, 이벤트는 한번만 실행하였습니다.

```javascript
navigation.addEventListener('click', handleSlider);
```
