const copper = '#D87D49';
const burgundy = '#260E0A';
const charcoalGrey = '#535353';

const colors = [copper, burgundy, charcoalGrey];

const isLight = (color) => {
    const hex = color.replace('#', '');
    const c = parseInt(hex, 16);
    const r = (c >> 16) & 0xFF;
    const g = (c >> 8) & 0xFF;
    const b = c & 0xFF;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125;
}

const sectionObserver = new MutationObserver((mutations, obs) => {
    const sections = document.querySelectorAll('.section')
    if (sections) {
        sections.forEach((section, i) => {
            const color = colors[i % colors.length];
            const nextColor = colors[(i + 1) % colors.length];
            section.style.backgroundColor = color;

            if (!isLight(color)) {
                section.style.color = '#fff';
            }

            if (i !== sections.length - 1) {
                section.style.backgroundImage = `linear-gradient(${color} 0%, ${color} 95%, ${nextColor})`;
            }
            section.style.paddingBottom = '1.35rem';
        });
        return;
    }
});

sectionObserver.observe(document, {
    childList: true,
    subtree: true
});

