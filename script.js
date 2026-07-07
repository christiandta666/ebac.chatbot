const responses = {
    "hola": "¡Hola! ¿Cómo estás?",
    "adiós": "¡Adiós! Que tengas un buen día.",
    "como estas": "Estoy bien, gracias por preguntar.",
    "cómo estás": "Estoy bien, gracias por preguntar.",
    "que puedes hacer": "Puedo responder preguntas básicas.",
    "qué puedes hacer": "Puedo responder preguntas básicas.",
    "gracias": "¡De nada!",
    "quien eres": "Soy un chatbot creado con JavaScript.",
    "quién eres": "Soy un chatbot creado con JavaScript."
};

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const button = document.getElementById("send-btn");

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});

function sendMessage(){

    const message = input.value.trim();

    if(message === ""){
        return;
    }

    addMessage(message, "user-message");

    const response = getBotResponse(message);

    setTimeout(() => {
        addMessage(response, "bot-message");
    },500);

    input.value = "";
}

function addMessage(text, className){

    const message = document.createElement("div");

    message.classList.add(className);

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message){

    const userMessage = message.toLowerCase();

    return responses[userMessage] || "Lo siento, no entiendo esa pregunta.";
}