document.addEventListener('DOMContentLoaded', function() {
    const muteButton = document.getElementById('muteButton');
    const video = document.getElementById('myVideo');
  
    muteButton.addEventListener('click', function() {
      video.muted = !video.muted; // Toggle the muted state
      this.classList.toggle('muted'); // Toggle the 'muted' class
    });
  });

