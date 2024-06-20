// pages/upload.js
import { useEffect, useState } from 'react';

export default function Upload() {
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleNameChange = (e) => {
    setImageName(e.target.value);
  };

  const handleUpload = async () => {
    if (!imageFile || !imageName) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const imageData = reader.result.split(',')[1]; // Base64 인코딩 데이터에서 헤더 제거

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: imageName,
            imageData,
          }),
        });

        if (response.ok) {
          console.log('Image uploaded successfully');
        } else {
          console.error('Error uploading image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    reader.readAsDataURL(imageFile); // Base64 인코딩으로 읽기
  };

  useEffect(()=>{
    // console.log(getUsers())
  },[])

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Image Name" value={imageName} onChange={handleNameChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}
