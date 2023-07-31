const form = document.getElementById('message-form');

const scrollableContent = document.getElementById('scrollable-content');

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight;
}

function handleChatSubmission(userInput) {
    fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: userInput })
    })
      .then(response => response.json())
      .then(data => {
        const botResponse = data.response;
        location.reload()
        
        scrollToBottom(scrollableContent);
        displayBotResponse(botResponse);
      })
      .catch(error => {
        // Handle error
      });
  }

const textArea = document.getElementById('query')

textArea.addEventListener('keydown', function(event){
    if(event.key === 'Enter' && !event.shiftKey){
        event.preventDefault();
        submitForm();
    }
});

window.addEventListener('load', () => {
  const scrollableContent = document.getElementById('scrollable-content');
  scrollToBottom(scrollableContent);
});

function submitForm(){
  console.log(textArea.value);
  handleChatSubmission(textArea.value);
}