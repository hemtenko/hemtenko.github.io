const colors = ['#F0070A', '#0875DA', '#F2D00F'];
let index = 0;

document.querySelectorAll('.thumbnail').forEach(thumbnail => {

    thumbnail.addEventListener('mouseenter', () => {
        let color = colors[index % colors.length];
        index++;
        thumbnail.style.outline = `0.4rem solid ${color}`;
    });

    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.style.outline = '';
    });
});