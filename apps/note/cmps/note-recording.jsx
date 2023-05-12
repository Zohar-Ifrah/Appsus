import React, { useState } from 'react';

 export function RecordAudio({ onRecorded }) {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');

  function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        setRecording(true);
        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
          audioChunks.push(event.data);
        });
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioURL(audioUrl);
          onRecorded(audioUrl);
        });
        setTimeout(() => {
          mediaRecorder.stop();
          setRecording(false);
        }, 5000);
      });
  }

  return (
    <div>
      {!recording && !audioURL && <button onClick={startRecording}>Record Audio</button>}
      {recording && <div>Recording...</div>}
      {audioURL && <audio controls src={audioURL}></audio>}
    </div>
  );
}