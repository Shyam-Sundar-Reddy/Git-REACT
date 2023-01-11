import React from "react";
import Entry from "./Entry";
import commands from "../commands";
import Footer from "./Footer";

function createEntry(entry) {
  return (
    <Entry key={entry.id} emo={entry.emoji} git={entry.comm} mean={entry.use} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span role="img" aria-label='book'>📖 learn Git Commands</span>
      </h1>
      <dl className="dictionary">{commands.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
