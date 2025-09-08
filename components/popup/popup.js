const container = document.getElementById("popup-container");

container.innerHTML = 
` 
<div id="window" class="popup">
    <div class="popup-content">
      <span class="close">&times;</span>
      <iframe id="frame" src="" frameborder="0"></iframe>
    </div>
  </div>
`;

const modal = document.getElementById("window");
const frame = document.getElementById("frame");
const close = document.querySelector(".close");

  document.querySelectorAll("a.doc-link").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      frame.src = this.href;
      modal.style.display = "flex";
    });
  });

  close.onclick = function() {
    modal.style.display = "none";
    frame.src = "";
  }

  window.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      frame.src = "";
    }
  };