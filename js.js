
    const inputs = document.querySelectorAll('.elementor-field-group');

inputs.forEach(item => {
    const inputs = item.querySelectorAll('input, textarea');
    if (!inputs) return
    const label = item.querySelector('.elementor-field-label');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            
            if (input.value.trim() === '') {
                label.classList.remove('active');
            } else {
                label.classList.add('active');
            }
        });
    })
});

