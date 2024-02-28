import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import ReactPlayer from 'react-player';

const AudioGenerator = () => {
  const [input, setInput] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/facebook/musicgen-small',
        { inputs: input },
        {
          headers: {
            Authorization: 'Bearer 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',
          },
          responseType: 'arraybuffer',
        }
      );
      const blob = new Blob([response.data], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    //   saveAs(blob, 'audio.mp3');
    } catch (error) {
      console.error('Error generating audio:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Generate Audio</button>
      </form>
      {audioUrl && <ReactPlayer url={audioUrl} controls />}
    </div>
  );
};

export default AudioGenerator;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { saveAs } from 'file-saver';

// const AudioGenerator = () => {
//   const [input, setInput] = useState('');
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'https://api-inference.huggingface.co/models/facebook/musicgen-small',
//         { inputs: input },
//         {
//           headers: {
//             Authorization: 'Bearer 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',
//           },
//           responseType: 'arraybuffer', // Specify response type as arraybuffer
//         }
//       );
//       const blob = new Blob([response.data], { type: 'audio/mp3' });
//       saveAs(blob, 'audio.mp3');
//     } catch (error) {
//       console.error('Error generating audio:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter your prompt"
//         />
//         <button type="submit">Generate Audio</button>
//       </form>
//     </div>
//   );
// };

// export default AudioGenerator;


// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageFetcher = () => {
//   const [input, setInput] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
//         { inputs: input },
//         {
//           headers: {
//             Authorization: 'Bearer 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',
//           },
//           responseType: 'blob', // Specify response type as blob
//         }
//       );
//       const url = URL.createObjectURL(new Blob([response.data]));
//       setImageUrl(url);
//     } catch (error) {
//       console.error('Error fetching image:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter your query"
//         />
//         <button type="submit">Fetch Image</button>
//       </form>
//       {imageUrl && <img src={imageUrl} width="340px"  alt="Fetched" />}
//     </div>
//   );
// };

// export default ImageFetcher;
