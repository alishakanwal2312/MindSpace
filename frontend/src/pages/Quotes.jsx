import { useState } from "react";

function MoodSection({ title, quotes }) {

  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * quotes.length
    );

    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="mood-box">

      <h3>{title}</h3>

      <p>{quote}</p>

      <button onClick={randomQuote}>
        New Quote
      </button>

    </div>
  );
}

function Quotes() {

  const quotes = [
    "Believe in yourself and all that you are. ✨",
    "Every day is a fresh start. 🌸",
    "You are stronger than you think. 💪",
    "Small progress is still progress. 🌿",
    "Stay positive and keep moving forward. 🚀",
    "Your only limit is your mind. 🌈",
    "Peace begins with a smile. 😊",
    "Good things take time. ⏳"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {

    const randomIndex =
      Math.floor(Math.random() * quotes.length);

    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">

      {/* Main Quote Generator */}

      <div className="card">

        <h1>✨ Daily Motivation</h1>

        <p>
          Click the button below to get a
          random motivational quote.
        </p>

        <div className="quote-card">

          <h3>
            "{quote}"
          </h3>

        </div>

        <button onClick={generateQuote}>
          New Quote
        </button>

      </div>

      {/* Mood Quotes */}

      <div className="card">

        <h2>🎭 Mood Based Quotes</h2>

        <div className="mood-grid">

          <MoodSection
            title="😊 Happy Mood"
            quotes={[
              "Smile more, worry less.",
              "Enjoy every little moment.",
              "Happiness looks good on you.",
              "Today is a beautiful day."
            ]}
          />

          <MoodSection
            title="😔 Sad Mood"
            quotes={[
              "This feeling will pass.",
              "You are stronger than today.",
              "Tomorrow is a fresh start.",
              "Keep faith in yourself."
            ]}
          />

          <MoodSection
            title="😰 Stressed Mood"
            quotes={[
              "Take a deep breath.",
              "Slow down and relax.",
              "You can handle this.",
              "One step at a time."
            ]}
          />

          <MoodSection
            title="🚀 Motivated Mood"
            quotes={[
              "Dream big.",
              "Take action today.",
              "Success loves consistency.",
              "Never stop learning."
            ]}
          />

        </div>

      </div>

      {/* Positive Thinking */}

      <div className="wellness-card">

        <h2>🌿 Positive Thinking</h2>

        <p>
          Positive thoughts help reduce stress,
          improve mental well-being and create
          a happier lifestyle.
        </p>

        <p>
          Every small positive step today can
          make a big difference tomorrow.
        </p>

      </div>

    </div>
  );
}

export default Quotes;