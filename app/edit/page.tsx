'use client'
import React, { useState, useEffect } from 'react';
import PuppyCardComponent from "../../Componens/PuppyCardComponent";
import { Puppy } from "@/interfaces";
import Link from "next/link";

export default function PuppyCard() {
  const [puppies, setPuppies] = useState<Puppy[]>([]); // Specify the type as an array of Puppy

  useEffect(() => {
    const getPuppies = async () => {
      const result = await fetch("/api/allPuppies");
      const puppiesFromApi = await result.json();
      setPuppies(puppiesFromApi);
    };
    getPuppies();
  }, []);

  const handleRemovePuppy = async (puppyId: number) => {
    try {
      // Send a DELETE request to the API to remove the puppy
      await fetch(`/api/deletePuppy?id=` + puppyId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
      });
      // Update the state by filtering out the removed puppy
      setPuppies((prevPuppies) => prevPuppies.filter((puppy) => puppy.id !== puppyId));
    } catch (error) {
      console.error('Failed to remove the puppy:', error);
    }
  };
  
  

  return (
    <div>
    <main>
      {puppies.map((puppy: Puppy) => (
        <div key={puppy.id} className="card">
          <PuppyCardComponent puppy={puppy} />
          <button onClick={() => handleRemovePuppy(puppy.id)}>Remove</button>
        </div>
      ))}
      </main>
    </div>
  );
}