// Copy Discord Username on Click
const discordBtn = document.getElementById('discordBtn');

if (discordBtn) {
  discordBtn.addEventListener('click', () => {
    const discordTag = 'aarush.lives';
    navigator.clipboard.writeText(discordTag).then(() => {
      const hint = discordBtn.querySelector('.copy-hint');
      const originalText = hint.textContent;
      
      hint.textContent = '(Copied!)';
      hint.style.color = '#38bdf8';

      setTimeout(() => {
        hint.textContent = originalText;
        hint.style.color = '';
      }, 2000);
    });
  });
}
