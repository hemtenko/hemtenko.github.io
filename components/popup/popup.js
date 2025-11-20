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

      //Document popup
      document.querySelectorAll("a.doc-link").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          frame.src = this.href;
          modal.style.display = "flex";

          document.body.style.overflow = "hidden";
        });
      });

      //Design popup
      document.querySelectorAll("img.design").forEach(img => {
        img.addEventListener("click", function () {
          const post = document.getElementById("post");
          const designLayout = document.getElementById("design-layout");
          const postTitle = document.getElementById("post-title");
          const postDesc = document.getElementById("post-desc");

          frame.style.display = "none";
          post.src = this.src;
          post.style.display = "block";
          designLayout.style.display = "flex";
          postTitle.textContent = this.dataset.title || "";
          postDesc.innerHTML = this.dataset.description || "";
          modal.classList.add("design");
          modal.style.display = "flex";
          document.body.style.overflow = "hidden";
        });
      });

      //Close popup
      function closePopup() {
        modal.style.display = "none";
        frame.src = "";
        frame.style.display = "block";

        const post = document.getElementById("post");
        const designLayout = document.getElementById("design-layout");
        const postTitle = document.getElementById("post-title");
        const postDesc = document.getElementById("post-desc");
        post.src = "";
        post.style.display = "none";
        designLayout.style.display = "none";
        postTitle.textContent = "";
        postDesc.innerHTML = "";
        modal.classList.remove("design");

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