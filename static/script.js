// Animate form on load
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = 0;
        setTimeout(() => {
            container.style.transition = 'opacity 1s';
            container.style.opacity = 1;
        }, 100);
    }
});

// Button ripple effect
const btn = document.querySelector('.btn-primary');
if (btn) {
    btn.addEventListener('click', function (e) {
        let ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        let max = Math.max(this.offsetWidth, this.offsetHeight);
        ripple.style.width = ripple.style.height = max + 'px';
        ripple.style.left = e.offsetX - max / 2 + 'px';
        ripple.style.top = e.offsetY - max / 2 + 'px';
        ripple.addEventListener('animationend', function () {
            ripple.remove();
        });
    });
}

// Confetti animation if prediction result is present
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.result-box')) {
        confetti();
    }
});

// Simple confetti animation
function confetti() {
    for (let i = 0; i < 40; i++) {
        let conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;
        conf.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 2000);
    }
} 