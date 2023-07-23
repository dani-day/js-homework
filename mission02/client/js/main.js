/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// 1. `setBgColor` 함수
// 2. `setImage` 함수
// 3. `setNameText` 함수

import { getNode, getNodes, attr, addClass, removeClass } from '../lib/index.js';

const navigation = getNode('.nav');
const list = getNodes('.nav li');
const image = getNode('.visual img');
const nickName = getNode('.nickName');
const audio = getNode('.audio');

function setImage(target, index) {
  const name = data[index - 1].name.toLowerCase();

  attr(image, 'src', `/mission02/client/assets/${name}.jpeg`);
  attr(image, 'alt', data[index - 1].alt);

  list.forEach((li) => {
    removeClass(li, 'is-active');
  });

  addClass(target, 'is-active');
}

function setBgColor(color1, color2 = '#000') {
  document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}

function setAudio(index) {
  const name = data[index - 1].name.toLowerCase();

  attr(audio, 'src', `/mission02/client/assets/audio/${name}.m4a`);
  audio.play();
}

function handleSlider(e) {
  const target = e.target.closest('li');

  if (!target) return;
  const index = attr(target, 'data-index');

  const color1 = data[index - 1].color[0];
  const color2 = data[index - 1].color[1];

  setImage(target, index);
  setNameText(index);
  setBgColor(color1, color2);
  setAudio(index);
}

navigation.addEventListener('click', handleSlider);
