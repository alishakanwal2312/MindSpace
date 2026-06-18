import { useState } from "react";

function MoodTracker() {

  const [mood, setMood] = useState("");
  const [history, setHistory] = useState([]);

  const saveMood = () => {

    if (mood === "") {
      alert("Please Select Mood");
      return;
    }

    setHistory([...history, mood]);
  };

  return (
    <div className="container">

      <div className="card">

        <h1>😊 Mood Tracker</h1>

        <p>
          Track your emotions and understand
          your daily mental well-being.
        </p>

        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">Select Mood</option>

          <option value="Happy">
            Happy 😊
          </option>

          <option value="Sad">
            Sad 😔
          </option>

          <option value="Tired">
            Tired 😴
          </option>

          <option value="Stressed">
            Stressed 😰
          </option>

          <option value="Excited">
            Excited 🎉
          </option>

        </select>

        <br />

        <button onClick={saveMood}>
          Save Mood
        </button>

        <h3>
          Current Mood: {mood}
        </h3>

      </div>

      <div className="wellness-card">

        <h2>🌿 Wellness Tip</h2>

        <p>
          Writing down your mood every day
          can improve self-awareness and
          emotional understanding.
        </p>

      </div>

      <div className="about-card">

        <h2>📋 Mood History</h2>

        {history.length === 0 ? (
          <p>No Mood Saved Yet</p>
        ) : (
          history.map((item, index) => (
            <p key={index}>
              {index + 1}. {item}
            </p>
          ))
        )}

      </div>

    </div>
  );
}

export default MoodTracker;