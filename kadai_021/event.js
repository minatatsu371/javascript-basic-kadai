const change = document.getElementById('btn');

setTimeout(() => {
    change.addEventListener('click', ()=>{
      document.getElementById('text').innerHTML = 'ボタンがクリックされました';
    });
  }, 2000);