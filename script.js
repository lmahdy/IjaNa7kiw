var audioPlayer = document.getElementById('audio-player');
var muteButton = document.getElementById('mute-button');
var isMuted = false;

// Event listener for the mute button
muteButton.addEventListener('click', function () {
  if (isMuted) {
    audioPlayer.volume = 1; // Unmute the audio
    muteButton.classList.remove('bi-volume-mute-fill');
    muteButton.classList.add('bi-volume-up-fill');
  } else {
    audioPlayer.volume = 0; // Mute the audio
    muteButton.classList.remove('bi-volume-up-fill');
    muteButton.classList.add('bi-volume-mute-fill');
  }
  isMuted = !isMuted;
});
