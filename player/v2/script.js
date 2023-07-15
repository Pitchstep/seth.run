document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.querySelector('.play-button');
  var playIcon = playButton.querySelector('i');
  var timerElement = document.querySelector('.timer');
  var audio = document.getElementById('audio-player');


  var isPlaying = false;
  var isSeeking = false; // Track seeking state
  var guideDisplayed = false; // Track if guide has been displayed

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    } else {
      audio.play();
      isPlaying = true;
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    }

    if (!guideDisplayed) {
      displayGuide();
      guideDisplayed = true;
    }
  }

  playButton.addEventListener('click', function() {
    togglePlay();
  });

  audio.addEventListener('timeupdate', function() {
    if (!isSeeking) {
      var currentTime = audio.currentTime;
      var duration = audio.duration;

      // Update the progress bar width
      var progress = (currentTime / duration) * 100;
      var progressBarFill = document.querySelector('.progress-bar-fill');
      progressBarFill.style.width = progress + '%';

      // Update the timer
      var currentTimeFormatted = formatTime(currentTime);
      var durationFormatted = formatTime(duration);
      timerElement.textContent = currentTimeFormatted + ' / ' + durationFormatted;
    }
  });

  function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  }

  // Seek functionality
  var progressBar = document.querySelector('.progress-bar');

  progressBar.addEventListener('mousedown', function(event) {
    isSeeking = true;

    if (isPlaying) {
      audio.pause();
    }

    var progressBarRect = progressBar.getBoundingClientRect();
    var progressBarWidth = progressBarRect.width;
    var clickX = event.clientX - progressBarRect.left;
    var seekPercentage = clickX / progressBarWidth;
    var seekTime = seekPercentage * audio.duration;

    audio.currentTime = seekTime;
    updateProgressBar(clickX);
  });

  document.addEventListener('mousemove', function(event) {
    if (isSeeking) {
      var progressBarRect = progressBar.getBoundingClientRect();
      var progressBarWidth = progressBarRect.width;
      var clickX = event.clientX - progressBarRect.left;
      var seekPercentage = clickX / progressBarWidth;
      var seekTime = seekPercentage * audio.duration;

      audio.currentTime = seekTime;
      updateProgressBar(clickX);
    }
  });

  document.addEventListener('mouseup', function() {
    if (isSeeking) {
      isSeeking = false;

      if (isPlaying) {
        audio.play();
      }
    }
  });

  function updateProgressBar(clickX) {
    var progressBarRect = progressBar.getBoundingClientRect();
    var progressBarWidth = progressBarRect.width;
    var seekPercentage = clickX / progressBarWidth;
    var progress = seekPercentage * 100;
    var progressBarFill = document.querySelector('.progress-bar-fill');
    progressBarFill.style.width = progress + '%';
  }

  // Pause song by pressing spacebar
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // Prevent scrolling the page when pressing spacebar
      togglePlay();
      fadeOutGuide();
    }
  });

  function displayGuide() {
    var guideElement = document.createElement('div');
    guideElement.classList.add('guide');
    guideElement.textContent = 'You can also press the spacebar to pause or play.';
    document.body.appendChild(guideElement);

    setTimeout(function() {
      guideElement.classList.add('fade-in');
    }, 100);
  }

  function fadeOutGuide() {
    var guideElement = document.querySelector('.guide');
    guideElement.classList.remove('fade-in');
    guideElement.classList.add('fade-out');

    setTimeout(function() {
      guideElement.remove();
    }, 1000);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('sound-wave');
  var ctx = canvas.getContext('2d');
  var audio = document.getElementById('audio-player');
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createMediaElementSource(audio);
  var analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  function draw() {
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';

    ctx.beginPath();

    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {
      var v = dataArray[i] / 128.0;
      var y = v * HEIGHT / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  }

  function handleUserGesture() {
    if (audio.paused) {
      audioCtx.resume().then(function() {
        audio.play();
        draw();
      });
    } else {
      audio.pause();
    }
  }

  var playButton = document.querySelector('.play-button');
  playButton.addEventListener('click', handleUserGesture);
});
