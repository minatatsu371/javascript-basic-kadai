// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// h2要素を取得し、定数に代入する
const header = document.getElementById('header');

// ボタンがクリックされた際のイベントリスナーを追加する
btn.addEventListener('click', () => {
  // h2要素のテキストを変更する
  header.textContent = 'ボタンをクリックしました';
});
