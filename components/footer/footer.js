
document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.getElementById("footer");
    if (!footerContainer) {
        return;
    }

    const footerFolder = '/components/footer/';

    fetch(footerFolder + 'footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
            if (!document.querySelector('link[href="${footerFolder}footer.css"]')) {
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = footerFolder + 'footer.css'
                document.head.appendChild(link);
            }
        })
});
