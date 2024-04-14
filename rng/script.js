var buttonEnabled = true;
var nextNumber = null;

// custom console command
function setNextNumber(number) {
    nextNumber = parseInt(number);
    console.log('next number set to ' + nextNumber);
}

// execute "setNextNumber" command console
function executeCommand(input) {
    var parts = input.split(' ');
    var command = parts[0];
    var value = parts[1];
    
    if (command === 'nextNumber' && value) {
        setNextNumber(value);
    }
}

// Function to play sound
function playSound(soundId) {
  var sound = document.getElementById(soundId);
  if (sound) {
    sound.currentTime = 0; // Reset sound to beginning
    sound.play();
  }
}

// listen for console input
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        var input = document.getElementById('console-input').value;
        executeCommand(input);
        document.getElementById('console-input').value = ''; // Clear the input field
    }
});

document.getElementById('generate-btn').addEventListener('click', function() {
    if (!buttonEnabled) {
        return; // do nothing if the button is disabled
    }

    // disable the button to prevent multiple clicks
    buttonEnabled = false;
    setTimeout(function() {
        buttonEnabled = true; // enable the button after 3 seconds
    }, 1000);

    // use the nextNumber if set, otherwise generate a random number
    var randomNumber = nextNumber !== null ? nextNumber : Math.floor(Math.random() * 10000) + 1;
    nextNumber = null; // reset nextNumber after using it

    // display the number with pop-up animation
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous content
    var numberElement = document.createElement('b');
    numberElement.classList.add('pop-up');
    numberElement.textContent = randomNumber;
    resultElement.appendChild(numberElement);
    
    // determine rarity based on the generated number
    var rarity;
    var rarityColor;
    if (randomNumber <= 50) {
      rarity = 'Pray to RNGesus';
      rarityColor = '#FA8CE6';
      playSound('rngesus-sound');
    } else if (randomNumber <= 500) {
        rarity = 'Mythical';
        rarityColor = '#FF69B4';
        playSound('mythical-sound');
    } else if (randomNumber <= 1000) {
      rarity = 'Legendary';
      rarityColor = '#FFD700'; // Gold
      playSound('legendary-sound');
    } else if (randomNumber <= 2500) {
      rarity = 'Epic';
      rarityColor = '#800080'; // Purple
      playSound('epic-sound');
    } else if (randomNumber <= 5000) {
      rarity = 'Rare';
      rarityColor = '#0000FF'; // Blue
      playSound('rare-sound');
    } else {
      rarity = 'Common';
      rarityColor = '#FFFFFF'; // White
      playSound('common-sound');
    }
    
    // update text with rarity after a delay
    setTimeout(function() {
      var rarityElement = document.createElement('div');
      rarityElement.innerHTML = '<b class="pop-up" style="text-transform: uppercase; font-style: 500; font-size: 14px; color: ' + rarityColor + ';">' + rarity + '</b>';
      resultElement.appendChild(rarityElement);
    }, 500); // .5 sec delay for rarity popup
});
// update
