
document.getElementById("chat-btn").addEventListener("click", function () {
  document.getElementById("chat-options").classList.remove("hidden");
  document.getElementById("line-options").classList.add("hidden");
});

document.getElementById("line-btn").addEventListener("click", function () {
  document.getElementById("line-options").classList.remove("hidden");
  document.getElementById("chat-options").classList.add("hidden");
});

function setChatMessage(msg) {
  if (window.$crisp) {
    $crisp.push(["do", "chat:open"]);
    $crisp.push(["do", "message:send", ["text", msg]]);
  }
}

function goLine(message) {
  const encoded = encodeURIComponent(message);
  const link = "https://line.me/ja/?text=" + encoded;
  window.open(link, "_blank");
}
