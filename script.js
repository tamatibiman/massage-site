
document.getElementById('line-btn')?.addEventListener('click', function () {
  document.getElementById('line-options').classList.toggle('hidden');
  document.getElementById('chat-options').classList.add('hidden');
});

document.getElementById('chat-btn')?.addEventListener('click', function () {
  document.getElementById('chat-options').classList.toggle('hidden');
  document.getElementById('line-options').classList.add('hidden');
});

function goLine(message) {
  const encoded = encodeURIComponent(message);
  window.open('https://line.me/R/ti/p/あなたのLINE_ID?text=' + encoded, '_blank');
}

function setChatMessage(message) {
  alert('チャットに送信されます: ' + message);
}
