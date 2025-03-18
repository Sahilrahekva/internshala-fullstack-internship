import React, { useState } from "react";

const MessagingDashboard = ({ contacts = [] }) => {
  const [selectedContact, setSelectedContact] = useState(contacts.length > 0 ? contacts[0] : null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      text: inputText,
      sender: "You",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
  };

  return (
    <div className={`messaging-dashboard ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Contacts Sidebar */}
      <aside className="contacts-list">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            className={selectedContact === contact ? "active" : ""}
            onClick={() => setSelectedContact(contact)}
          >
            {contact.name}
          </button>
        ))}
      </aside>

      {/* Chat Window */}
      <main className="chat-window">
        <header>
          <h2>{selectedContact ? selectedContact.name : "Select a contact"}</h2>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Messages Section */}
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.sender}:</strong> {msg.text} <span>{msg.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <footer>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </footer>
      </main>
    </div>
  );
};

export default MessagingDashboard;
