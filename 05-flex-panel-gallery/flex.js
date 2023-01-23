const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    panels.classList.toggle("open");
    
    // this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => addEventListener('click', toggleOpen));
panels.forEach(panel => addEventListener('transitionend', toggleActive))