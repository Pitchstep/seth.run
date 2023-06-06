function showParticles(event) {
  const button = event.target;
  const particles = document.createElement('span');
  particles.classList.add('particles');
  button.appendChild(particles);

  const rect = button.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const offsetX = x - centerX;
  const offsetY = y - centerY;

  particles.style.left = centerX + offsetX + 'px';
  particles.style.top = centerY + offsetY + 'px';

  setTimeout(() => {
    particles.remove();
  }, 1000);
}
let playButton = document.querySelector('.button[data-description="Join the adventure!"]');
let clickCount = 0;

playButton.addEventListener('click', function() {
  clickCount++;
  playButton.style.animation = `shakeAnimation ${clickCount * 0.2}s`;

  // Reset animation after it completes
  setTimeout(() => {
    playButton.style.animation = '';
  }, clickCount * 200);
});
