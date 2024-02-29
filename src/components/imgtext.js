import React, { useState } from 'react';
import axios from 'axios';

function VQAComponent() {
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('question', question);

    try {
      const response = await axios.post('http://localhost:5000/vqa', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
}

export default VQAComponent;
