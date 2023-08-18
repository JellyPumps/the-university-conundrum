const toggles = document.querySelectorAll('.switch input');
const selectedToggles = []; // Array to store selected switches

toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            if (selectedToggles.length >= 2) {
                const randomIndex = Math.floor(Math.random() * selectedToggles.length);
                const toggleToToggleOff = selectedToggles[randomIndex];
                toggleToToggleOff.checked = false;

                // Remove the toggled-off switch from the selectedToggles array
                selectedToggles.splice(randomIndex, 1);
            }
            selectedToggles.push(toggle); // Add the newly selected toggle
        } else {
            const indexToRemove = selectedToggles.indexOf(toggle);
            if (indexToRemove !== -1) {
                selectedToggles.splice(indexToRemove, 1); // Remove the deselected toggle
            }
        }
    });
});
