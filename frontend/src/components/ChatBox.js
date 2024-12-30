import React from "react";

export function ChatBoxSender({ message, user }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", margin: 10 }}>
      <p
        style={{
          padding: 10,
          backgroundColor: "#d1e7dd",
          borderRadius: 10,
          maxWidth: "60%",
        }}
      >
        <strong style={{ fontSize: 13 }}>{user}</strong>
        <br />
        {message}
      </p>
    </div>
  );
}

export default function ChatBoxReceiver({ message, user }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", margin: 10 }}>
      <p
        style={{
          padding: 10,
          backgroundColor: "#f8d7da",
          borderRadius: 10,
          maxWidth: "60%",
        }}
      >
        <strong style={{ fontSize: 13 }}>{user}</strong>
        <br />
        {message}
      </p>
    </div>
  );
}
