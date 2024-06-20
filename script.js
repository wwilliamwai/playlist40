function offsetAnchorScroll(targetId, offset) {
    document.querySelector(`a[href="#${targetId}"]`).addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.getElementById(targetId);
        const scrollOffset = section.offsetTop - offset;
        window.scrollTo({
            top: scrollOffset,
            behavior: 'smooth'
        });
    });
}
offsetAnchorScroll('members', 90);
offsetAnchorScroll('photography', 90);