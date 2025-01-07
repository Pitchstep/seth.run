var buttonEnabled = true
function playSound(_0x2615f0) {
  var _0x76d4ba = document.getElementById(_0x2615f0)
  _0x76d4ba && ((_0x76d4ba.currentTime = 0), _0x76d4ba.play())
}
function changeVolume(_0x4bedf7) {
  var _0x2c5ed5 = document.querySelectorAll('audio')
  _0x2c5ed5.forEach(function (_0x198900) {
    _0x198900.volume = _0x4bedf7
  })
}
document.getElementById('generate-btn').addEventListener('click', function () {
  if (!buttonEnabled) {
    return
  }
  buttonEnabled = false
  setTimeout(function () {
    buttonEnabled = true
  }, 1)
  var _0x5c8a18 = Math.floor(Math.random() * 10000) + 1
  _0x5c8a18 !== null ? _0x5c8a18 : Math.floor(Math.random() * 10000) + 1
  var _0x91e4af = document.getElementById('result')
  _0x91e4af.innerHTML = ''
  var _0x5a8272 = document.createElement('b')
  _0x5a8272.classList.add('pop-up')
  _0x5a8272.textContent = _0x5c8a18
  _0x91e4af.appendChild(_0x5a8272)
  var _0x3694df,
    _0x51ede7,
    _0x20cdd1 = false
  if (_0x5c8a18 === 13) {
    _0x3694df = 'Unlucky'
    _0x51ede7 = '#ff0000'
    playSound('unlucky-sound')
    _0x20cdd1 = true
  } else {
    if (_0x5c8a18 === 404) {
      _0x3694df = 'Not Found'
      _0x51ede7 = '#ffabe0'
      playSound('404-sound')
      _0x20cdd1 = true
    } else {
      if (_0x5c8a18 === 777) {
        _0x3694df = 'Triple Seven'
        _0x51ede7 = '#fffb00'
        playSound('luckysevens-sound')
        _0x20cdd1 = true
      } else {
        if (_0x5c8a18 <= 1) {
          _0x3694df = 'RNGesus Incarnate'
          _0x51ede7 = '#FFD700'
          playSound('ultra-sound')
        } else {
          if (_0x5c8a18 <= 100) {
            _0x3694df = 'Glorious'
            _0x51ede7 = '#FA8CE6'
            playSound('super-sound')
          } else {
            if (_0x5c8a18 <= 300) {
              _0x3694df = 'Mythic'
              _0x51ede7 = '#FF69B4'
              playSound('mystical-sound')
            } else {
              if (_0x5c8a18 <= 500) {
                _0x3694df = 'Legendary'
                _0x51ede7 = '#FFD700'
                playSound('legendary-sound')
              } else {
                if (_0x5c8a18 <= 2500) {
                  _0x3694df = 'Epic'
                  _0x51ede7 = '#800080'
                  playSound('epic-sound')
                } else {
                  if (_0x5c8a18 <= 5000) {
                    _0x3694df = 'Rare'
                    _0x51ede7 = '#0000FF'
                    playSound('rare-sound')
                  } else {
                    _0x5c8a18 >= 10001
                      ? ((_0x3694df = 'Too Common?'),
                        (_0x51ede7 = '#FFFFFF'),
                        playSound('common-sound'))
                      : ((_0x3694df = 'Common'),
                        (_0x51ede7 = '#FFFFFF'),
                        playSound('common-sound'))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  !_0x20cdd1 && playSound('original-rarity-sound')
  setTimeout(function () {
    var _0x1729b2 = document.createElement('div')
    _0x1729b2.innerHTML =
      '<b class="pop-up" style="text-transform: uppercase; font-style: 680; font-size: 14px; color: ' +
      _0x51ede7 +
      ';">' +
      _0x3694df +
      '</b>'
    _0x91e4af.appendChild(_0x1729b2)
  }, 200)
})
