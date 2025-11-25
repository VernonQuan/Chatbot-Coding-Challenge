import React from 'react'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Chatbot Website — Coding Challenge</h1>
        <p className="subtitle">Build a small chatbot UI here — this scaffold uses React + TypeScript.</p>
      </header>

      <main className="content">
        <section className="chat-panel">
          <div className="messages">
            <div className="message bot">Hello! This is a placeholder for the chatbot UI.</div>
            <div className="message user">Hi — replace this with your UI / messages.</div>
          </div>

          <form className="input-row" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Type a message…" aria-label="Message input" />
            <button type="submit">Send</button>
          </form>
        </section>

        <aside className="notes">
          <h2>Notes for reviewers</h2>
          <ul>
            <li>Use the <code>src/App.tsx</code> as the primary sample UI.</li>
            <li>No backend in this challenge — store everything in local state.</li>
            <li>Make it interactive and accessible; avoid long synchronous work on the main thread.</li>
          </ul>
        </aside>
      </main>
    </div>
  )
}
