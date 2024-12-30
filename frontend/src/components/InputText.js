import React, { useState } from "react";

const styles = {
  button: {
    width: "10%",
    height: 50,
    fontWeight: "bold",
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#34b7f1",
    borderWidth: 0,
    color: "#fff",
  },
  textarea: {
    width: "60%",
    height: 50, // Adjusted height for better usability
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20, // Added spacing
  },
};

export default function InputText({ addMessage }) {
  const [message, setMessage] = useState("");

  // Handle sending a new message
  const handleSend = () => {
    if (message.trim()) {
      addMessage({ message }); // Pass the message to ChatContainer
      setMessage(""); // Clear the textarea
    } else {
      console.log("Message is empty. Please type something.");
    }
  };

  return (
    <div style={styles.textContainer}>
      <textarea
        style={styles.textarea}
        rows={6}
        placeholder="Write something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button style={styles.button} onClick={handleSend}>
        Enter
      </button>
    </div>
  );
}
