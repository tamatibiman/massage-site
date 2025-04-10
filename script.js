
document.getElementById("chat-btn").addEventListener("click", function () {
  document.getElementById("chat-options").classList.remove("hidden");
});

document.getElementById("line-btn").addEventListener("click", function () {
  window.open("https://line.me/ja/", "_blank");
});

function setChatMessage(msg) {
  if (window.$crisp) {
    $crisp.push(["do", "chat:open"]);
    $crisp.push(["do", "message:send", ["text", msg]]);
  }
}
