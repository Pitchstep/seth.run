              function generateUniqueCode() {
            return Math.random().toString(36).substring(2, 8);
        }

              function saveNote() {
            const noteTitle = document.getElementById('noteTitle').value;
              const noteContent = document.getElementById('noteContent').value;

              if (noteTitle.trim() !== '' || noteContent.trim() !== '') {
                const uniqueCode = generateUniqueCode();
              const note = {
                title: noteTitle,
              content: noteContent
                };

              localStorage.setItem(uniqueCode, JSON.stringify(note));
              copyToClipboard(uniqueCode);
              showNotification(`note saved! ${uniqueCode} has been copied.`);
            } else {
                showNotification('there isnt anything to save yet!');
            }
        }

              function loadNote() {
            const loadCodeInput = document.getElementById('loadCodeInput');
              const uniqueCode = loadCodeInput.value.trim();

              if (uniqueCode !== '') {
                const storedNote = localStorage.getItem(uniqueCode);

              if (storedNote) {
                    const note = JSON.parse(storedNote);
              document.getElementById('noteTitle').value = note.title;
              document.getElementById('noteContent').value = note.content;
              showNotification('note loaded!');
                } else {
                showNotification('that note doesnt seem to exist!');
                }
            } else {
                showNotification('thats not a valid id!');
            }
        }

              function showNotification(message) {
            const notificationElement = document.getElementById('notification');
              notificationElement.textContent = message;
              notificationElement.style.display = 'block';

            setTimeout(() => {
                notificationElement.style.display = 'none';
            }, 5000); // Hide after 5 seconds
        }

              function copyToClipboard(text) {
            const textArea = document.createElement('textarea');
              textArea.value = text;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);
        }

              function updateWordCount() {
            const content = document.getElementById('noteContent').value;
            const wordCount = content.split(/\s+/).filter(word => word !== '').length;
              document.getElementById('wordCount').textContent = `words: ${wordCount}`;
        }
