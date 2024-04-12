document.getElementById('generate-btn').addEventListener('click', function() {
    // Disable the button to prevent multiple clicks
    this.disabled = true;
  
    // Generate a random number between 1 and 1000
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
  
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
    if (randomNumber <= 2) {
      rarity = 'Mythical';
      rarityColor = '#FF69B4'; // Pink
    } else if (randomNumber <= 20) {
      rarity = 'Legendary';
      rarityColor = '#FFD700'; // Gold
    } else if (randomNumber <= 100) {
      rarity = 'Epic';
      rarityColor = '#800080'; // Purple
    } else if (randomNumber <= 300) {
      rarity = 'Rare';
      rarityColor = '#0000FF'; // Blue
    } else {
      rarity = 'Common';
      rarityColor = '#FFFFFF'; // White
    }
    
    // Update text with rarity after a delay
    setTimeout(function() {
      var rarityElement = document.createElement('div');
      rarityElement.innerHTML = '<b class="pop-up" style="text-transform: uppercase; font-style: normal; font-size: 14px; color: ' + rarityColor + ';">' + rarity + '</b>';
      resultElement.appendChild(rarityElement);
      
      // Enable the button after the rarity appears
      document.getElementById('generate-btn').disabled = false;
    }, 500); // 500 milliseconds delay for rarity pop-up animation
  });
  
