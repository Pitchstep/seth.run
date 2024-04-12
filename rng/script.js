var buttonEnabled = true;
var nextNumber = null;

// Custom console command
function setNextNumber(number) {
    nextNumber = parseInt(number);
    console.log('Next number set to: ' + nextNumber);
}

// Execute the custom console command
function executeCommand(input) {
    var parts = input.split(' ');
    var command = parts[0];
    var value = parts[1];
    
    if (command === 'nextNumber' && value) {
        setNextNumber(value);
    }
}

// Listen for console input
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        var input = document.getElementById('console-input').value;
        executeCommand(input);
        document.getElementById('console-input').value = ''; // Clear the input field
    }
});

document.getElementById('generate-btn').addEventListener('click', function() {
    if (!buttonEnabled) {
        return; // Do nothing if the button is disabled
    }

    // Disable the button to prevent multiple clicks
    buttonEnabled = false;
    setTimeout(function() {
        buttonEnabled = true; // Enable the button after 3 seconds
    }, 2000);

    // Use the nextNumber if set, otherwise generate a random number
    var randomNumber = nextNumber !== null ? nextNumber : Math.floor(Math.random() * 1000) + 1;
    nextNumber = null; // Reset nextNumber after using it

    // Display the number with pop-up animation
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous content
    var numberElement = document.createElement('b');
    numberElement.classList.add('pop-up');
    numberElement.textContent = randomNumber;
    resultElement.appendChild(numberElement);
    
    // Determine rarity based on the generated number
    var rarity;
    var rarityColor;
    if (randomNumber <= 1) {
      rarity = 'Mythical';
      rarityColor = '#FF69B4'; // Pink
      document.getElementById('mythical-sound').play();
    } else if (randomNumber <= 20) {
      rarity = 'Legendary';
      rarityColor = '#FFD700'; // Gold
      document.getElementById('legendary-sound').play();
    } else if (randomNumber <= 100) {
      rarity = 'Epic';
      rarityColor = '#800080'; // Purple
      document.getElementById('epic-sound').play();
    } else if (randomNumber <= 300) {
      rarity = 'Rare';
      rarityColor = '#0000FF'; // Blue
      document.getElementById('rare-sound').play();
    } else {
      rarity = 'Common';
      rarityColor = '#FFFFFF'; // White
      document.getElementById('common-sound').play();
    }
    
    // Update text with rarity after a delay
    setTimeout(function() {
      var rarityElement = document.createElement('div');
      rarityElement.innerHTML = '<b class="pop-up" style="text-transform: uppercase; font-style: normal; font-size: 14px; color: ' + rarityColor + ';">' + rarity + '</b>';
      resultElement.appendChild(rarityElement);
    }, 200); // 500 milliseconds delay for rarity pop-up animation
});
