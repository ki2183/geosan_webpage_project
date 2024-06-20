import { useState, ChangeEvent, useEffect } from 'react';
import { sql } from '@vercel/postgres';
import Test from './test';

export default function Home() {
  

  return (
    <div>
      {/* <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Image Name" value={imageName} onChange={handleNameChange} />
      <button onClick={handleUpload}>Upload Image</button> */}

      <Test></Test>
    </div>
  );
}

