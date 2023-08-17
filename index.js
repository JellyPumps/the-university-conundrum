const toggles = document.querySelectorAll('.switch input');
    
toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        if (document.querySelectorAll('.switch input:checked').length > 2) {
            toggle.checked = false;
        }
    });
});