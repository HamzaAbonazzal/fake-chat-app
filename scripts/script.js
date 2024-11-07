$(document).ready(function () {
  const chatInput = $("#chat-input");
  const sendButton = $("#send-button");
  const chatWindow = $("#chat-window");
  const darkModeToggle = $("#dark-mode-toggle");

  function appendMessage(message, sender) {
    const messageElement = $("<div></div>").addClass("message").text(message);
    if (sender === "user") {
      messageElement.addClass("user-message");
    } else {
      messageElement.addClass("bot-message");
    }
    chatWindow.append(messageElement);
    chatWindow.scrollTop(chatWindow[0].scrollHeight);
  }

  function sendMessage() {
    const message = chatInput.val().trim();
    if (message) {
      appendMessage(message, "user");
      chatInput.val("");

      // Fake bot response
      setTimeout(() => {
        appendMessage("I'm just a bot 🤖", "bot");
      }, 1000);
    }
  }

  sendButton.click(function () {
    sendMessage();
  });

  chatInput.keypress(function (e) {
    if (e.which == 13) {
      // Key code for Enter is 13
      sendMessage();
    }
  });

  darkModeToggle.click(function () {
    $("body").toggleClass("light-mode");
    if ($("body").hasClass("light-mode")) {
      darkModeToggle.text("🌙");
    } else {
      darkModeToggle.text("🌞");
    }
  });
});
