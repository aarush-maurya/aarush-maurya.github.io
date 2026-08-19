// Copy Discord Username on Click
const discordBtn = document.getElementById('discordBtn');

if (discordBtn) {
  discordBtn.addEventListener('click', () => {
    const discordTag = 'aarush.lives';
    navigator.clipboard.writeText(discordTag).then(() => {
      // Changed .copy-hint to .copy-status to match HTML
      const statusElement = discordBtn.querySelector('.copy-status');
      const originalText = statusElement.textContent;
      
      statusElement.textContent = 'Copied!';
      statusElement.style.borderColor = 'var(--accent-cyan)';
      statusElement.style.color = 'var(--accent-cyan)';

      setTimeout(() => {
        statusElement.textContent = originalText;
        statusElement.style.borderColor = '';
        statusElement.style.color = '';
      }, 2000);
    });
  });
}