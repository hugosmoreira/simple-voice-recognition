const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['I am really good, thanks for asking', 'Im pissed off so move on bitch', 'Leave me alone and go do something else']
const weather = ['The weather is beautiful go outside have fun', 'It is raining you should go practice your programing skills', 'If you are in Brazil probably hot as hell']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecgonition;
const recognition = new webkitSpeechRecognition(); 




recognition.onstart = function () {
    
    console.log('Voice is activated, you can microphoneee');
};

recognition.onresult = function(event) {
    
   const current = event.resultIndex;
   const transcript = event.results[current][0].transcript;
   content.textContent = transcript;
   readOutLoud(transcript);
   
    
};

// adicione um listerner ao botao

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I did not understand, please repeat'

    if(message.includes('how you doing')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('how is the weather')) {
        const finalWeather = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalWeather
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}
