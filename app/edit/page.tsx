"use client";
import PuppyCardComponent from "../../Componens/PuppyCardComponent";
import { Puppy } from "@/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";

//OBS: funktionen måste vara async om hämtningen sker direkt i en serverkomponent
export default function PuppyCard() {
  // const sql = "SELECT * FROM posts";
  // const posts = (await dbQuery({sql, values:[]})) as Post[];
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const getPuppies = async () => {
      const result = await fetch("/api/allPuppies");
      const puppiesFromApi = await result.json();
      setPuppies(puppiesFromApi);
    };
    getPuppies();
  }, []);

  return (
    <div>
      {puppies.map((puppy: Puppy) => (
        <div key={puppy.id} className="card">
            <PuppyCardComponent puppy={puppy}/>

        </div>
      ))}
    </div>
  );
}