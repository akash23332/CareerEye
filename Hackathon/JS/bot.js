 // Show/hide chatbot
 document.getElementById("chatbot-btn").addEventListener("click", function() {
    document.getElementById("chat-container").classList.toggle("hidden");
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chat-container").classList.add("hidden");
});


const predefinedAnswers = {
    "What is your name?": "I am Gemini AI, your chatbot assistant!",
    "Who created you?": "I was created by Google and integrated by Team INNOVATORS.",
    "What is Platform?": "Platform is a career-focused platform created by Team INNOVATORS.",
    "How does the bookstore recommendation system work?": "It suggests books based on user preferences, browsing history, and popular trends."
};

async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");


    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";

    
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerText = "Thinking...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        let response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAFGFEOyQeKvUsTYZHjwNFw2DMt9xrjo0w`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    { role: "user", parts: [{ text: userInput }] }
                ]
            })
        });

        let data = await response.json();

        if (data && data.candidates && data.candidates.length > 0) {
            botMessage.innerText = data.candidates[0].content.parts[0].text;
        } else {
            botMessage.innerText = "Sorry, I couldn't generate a response.";
        }
    } catch (error) {
        botMessage.innerText = "Error: Unable to connect to AI.";
        console.error("API Error:", error);
    }
}



function displayBotMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerText = message;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chat-container").classList.add("hidden");
});


function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
