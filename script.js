// Language toggle (simplified for demo; replace with actual translations)
document.getElementById('language').addEventListener('change', function() {
    const lang = this.value;
    if (lang === 'ta') {
        alert('Tamil translation coming soon!');
        // Add Tamil translations here
    } else if (lang === 'kn') {
        alert('Kannada translation coming soon!');
        // Add Kannada translations here
    }
});

// Form submission (placeholder)
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
});