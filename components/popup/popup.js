document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById("popup-container");
  if (!container) {
    return;
  }

  const popupFolder = '/components/popup/';

  fetch(popupFolder + "popup.html")
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;

      if (!document.querySelector('link[href="${popupFolder}popup.css"]')) {
        let link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = popupFolder + 'popup.css';
        document.head.appendChild(link);
      }

      const modal = document.getElementById("window");
      const frame = document.getElementById("frame");
      const close = document.querySelector(".close");

      document.querySelectorAll("a.doc-link").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          frame.src = this.href;
          modal.style.display = "flex";

          document.body.style.overflow = "hidden";
        });
      });

      function closePopup() {
        modal.style.display = "none";
        frame.src = "";

        document.body.style.overflow = "auto";
      }

      close.onclick = closePopup;

      window.onclick = function (e) {
        if (e.target === modal) {
          closePopup();
        }
      };
    })
});