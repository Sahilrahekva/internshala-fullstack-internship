
import React from "react";
import MessagingDashboard from "./MessagingDashboard"; // Ensure correct import

function App() {
  return (
    <div className="App">
      <h1>Chat Application</h1>
      <MessagingDashboard contacts={[{ id: 1, name: "John Doe" }]} /> 
    </div>
  );
}

export default App;
