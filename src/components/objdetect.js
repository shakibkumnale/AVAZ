import React, { useState } from 'react';
import YouTube from 'react-youtube';
const ObjectDetectionComponent = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [objects, setObjects] = useState([]);
  const [hoveredObject, setHoveredObject] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      setImageSrc(event.target.result);
      try {
        const data = event.target.result.split(',')[1]; // Get base64 image data
        // const response = await fetch('https://api-inference.huggingface.co/models/facebook/detr-resnet-50', {
        const response = await fetch('https://api-inference.huggingface.co/models/facebook/detr-resnet-50', {
          headers: { Authorization: 'Bearer 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', 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ inputs: data }),
        });
        const result = await response.json();
        
        console.log(result);
        setObjects(result);
      } catch (error) {
        console.error('Error detecting objects:', error);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleMouseOver = (object) => {
    setHoveredObject(object);
  };

  const handleMouseOut = () => {
    setHoveredObject(null);
  };

  return (
<div className='w-full h-full bg-gray-500  rounded-2xl p-4 flex justify-center' >
<YouTube videoId="N6gOxEFr2ZE" />
</div>

    // <div style={{ position: 'relative', display: 'inline-block' }}>
      
    //   {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
    //   {objects.map((object, index) => (
    //     <div
    //       key={index}
    //       className="absolute border-2 border-transparent transition-colors duration-300 hover:border-red-500"
    //       style={{
    //         left: object.box.xmin,
    //         top: object.box.ymin,
    //         width: object.box.xmax - object.box.xmin,
    //         height: object.box.ymax - object.box.ymin,
    //         // pointerEvents: 'none', // Prevent the box from blocking mouse events on the image
    //       }}
    //       onMouseEnter={() => handleMouseOver(object)}
    //       onMouseLeave={handleMouseOut}
    //     >
    //       {hoveredObject === object && (
    //         <div className="absolute top-0 left-0 bg-white text-black p-1">{object.label}</div>
    //       )}
    //     </div>
    //   ))}
    //   <input type="file" accept="image/*" onChange={handleFileChange} />
    // </div>
  );
};

export default ObjectDetectionComponent;
