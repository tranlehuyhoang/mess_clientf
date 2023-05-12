import React, { useState } from 'react';
import annyang from 'annyang';

const SpeechRecognition = () => {
  const [text, setText] = useState('');

  const handleSpeechRecognition = () => {
    if (annyang) {
      annyang.start({ autoRestart: false, continuous: false });
      annyang.addCallback('result', (phrases) => {
        setText(phrases[0]);
        annyang.abort();
      });
    }
  };
  return (
    <div>
      <button onClick={handleSpeechRecognition}>Start Speech Recognition</button>
      <p>You said: {text}</p>
    </div>
  );
};

export default SpeechRecognition;