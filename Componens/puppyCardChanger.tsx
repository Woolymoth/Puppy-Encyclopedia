
import React, { useState } from 'react';
import { Puppy } from "@/interfaces";

interface Props {
  puppy: Puppy;
  onUpdate: (updatedPuppy: Puppy) => void; // Add the onUpdate prop
}

export default function PuppyCardChanger(props: Props) {
  const [editedPuppy, setEditedPuppy] = useState<Puppy>({ ...props.puppy }); // Initialize with the puppy's data

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedPuppy((prevPuppy) => ({
      ...prevPuppy,
      [name]: value,
    }));
  };

  const handleUpdatePuppy = () => {
    // Call the onUpdate prop to update the puppy in the parent component
    props.onUpdate(editedPuppy);
  };

  return (
    <div>
      <h3>
        <input type="text" name="name" value={editedPuppy.name} onChange={handleInputChange} />
      </h3>
      <p>
        <input type="text" name="picture" value={editedPuppy.picture} onChange={handleInputChange} />
      </p>
      <p>
        <input type="text" name="lifeSpan" value={editedPuppy.lifeSpan} onChange={handleInputChange} />
      </p>
      <p>
        <textarea name="information" value={editedPuppy.information} onChange={handleInputChange} />
      </p>
      <p>
        <textarea name="funFact" value={editedPuppy.funFact} onChange={handleInputChange} />
      </p>
      <button onClick={handleUpdatePuppy}>Update</button>
    </div>
  );
}