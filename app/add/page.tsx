'use client';
import { useState } from "react";

export default function PuppyForm() {
  // Initialize state for form inputs
  const [name, setName] = useState('');
  const [lifeSpan, setLifeSpan] = useState('');
  const [information, setInformation] = useState('');
  const [funFact, setFunFact] = useState(''); // Fix the typo here
  const [picture, setPicture] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a newPuppy object with form data
    const newPuppy = {
      name,
      lifeSpan,
      information,
      funFact, // Corrected the variable name here
      picture,
    };

    try {
      const res = await fetch('/api/allPuppies', { // Updated the API endpoint URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPuppy),
      });

      if (res.status === 201) {
        console.log('Data was posted successfully');
      } else {
        console.error('Failed to post data. Status:', res.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main>
    <form className="form" onSubmit={handleSubmit}>
      <label className="formSection">
        <span>Name</span>
        <input
          required
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className="formSection">
        <span>Lifespan</span>
        <input
          required
          name="lifeSpan"
          onChange={(e) => setLifeSpan(e.target.value)}
          value={lifeSpan}
        />
      </label>
      <label className="formSection">
        <span>Information</span>
        <textarea className="informationInput"
          required
          name="information"
          onChange={(e) => setInformation(e.target.value)}
          value={information}
        />
      </label>
      <label className="formSection">
        <span>Fun fact</span>
        <textarea className="funFactInput"
          required
          name="funFact"
          onChange={(e) => setFunFact(e.target.value)} // Fixed the variable name here
          value={funFact}
        />
      </label>
      <label className="formSection">
        <span>Picture URL</span>
        <input
          required
          name="picture"
          onChange={(e) => setPicture(e.target.value)}
          value={picture}
        />
      </label>
      <button  className="submit" type="submit">Submit</button>
    </form>
    </main>
  );
}