document.addEventListener('DOMContentLoaded', () => {

const buttons = document.querySelectorAll('.btn');
const projects = document.getElementById('projects');
const designs = document.getElementById('designs');
const sectionTitle = document.querySelector('.section-title');
const slider = document.querySelector('.slider');

function moveSlider(btn) {
    slider.style.width = `${btn.offsetWidth}px`;
    
    if (btn.dataset.target === 'design-gallery') {
        slider.style.left = 'calc(50% - 0.7rem)';
    }
    else {
        slider.style.left = '0.3rem';
    }
}

designs.style.display = 'none';
moveSlider(document.querySelector('.btn.active'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projects.style.display = target === 'case-studies' ? '' : 'none';
        designs.style.display = target === 'design-gallery' ? '' : 'none';

        moveSlider(button);
    });
});

const tab = new URLSearchParams(window.location.search).get('tab');
if (tab) {
    const targetBtn = document.querySelector(`[data-target="${tab}"]`);
    if (targetBtn) {
        targetBtn.click();
    }
}

})
