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
    <form className="" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          required
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Lifespan</span>
        <input
          required
          name="lifeSpan"
          onChange={(e) => setLifeSpan(e.target.value)}
          value={lifeSpan}
        />
      </label>
      <label>
        <span>Information</span>
        <input
          required
          name="information"
          onChange={(e) => setInformation(e.target.value)}
          value={information}
        />
      </label>
      <label>
        <span>Fun fact</span>
        <input
          required
          name="funFact"
          onChange={(e) => setFunFact(e.target.value)} // Fixed the variable name here
          value={funFact}
        />
      </label>
      <label>
        <span>Picture</span>
        <input
          required
          name="picture"
          onChange={(e) => setPicture(e.target.value)}
          value={picture}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}