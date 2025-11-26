    document.addEventListener('DOMContentLoaded', function () {
        const navContainer = document.getElementById("nav");
        if (!navContainer) {
            return;
        }

        const navFolder = '/components/navigation/';

        fetch(navFolder + 'navigation.html')
            .then(response => response.text())
            .then(data => {
                navContainer.innerHTML = data;
                if (!document.querySelector('link[href="${navFolder}navigation.css"]')) {
                    let link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = navFolder + 'navigation.css'
                    document.head.appendChild(link);
                }

                const toggle = document.getElementById("menu-toggle");
                const navigation = navContainer.querySelector(".navigation");
                const dropdown = navContainer.querySelector('.dropdown');

                if (toggle && navigation) {
                    toggle.addEventListener('click', function() {
                        navigation.classList.toggle('open');

                        if (window.innerWidth <= 768) {
                            dropdown.classList.add("open");
                        }
                    });
                }
            });
    });
