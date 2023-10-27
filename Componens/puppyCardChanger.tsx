import React, { useState } from 'react';
import { Puppy } from "@/interfaces";

interface Props {
  puppy: Puppy;
}

const PuppyCardChanger = (props: Props) => {
  const [name, setName] = useState(props.puppy.name);
  const [pic, setPic] = useState(props.puppy.picture);
  const [life, setLife] = useState(props.puppy.lifeSpan);
  const [info, setInfo] = useState(props.puppy.information);
  const [fact, setFact] = useState(props.puppy.funFact);
  const handleUpdatePuppy = async () => {
    console.log('här är ett namn',name)
    console.log('här är en bild',pic)
    console.log('här är life',life)
    console.log('här är info',info)
    console.log('här är fact',fact)
    console.log('här är id', props.puppy.id)
    // Call the onUpdate prop to update the puppy in the parent component
    const res = await fetch('/api/' + props.puppy.id, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.puppy.id,
        name: name,
        picture: pic,
        lifeSpan: life,
        information: info,
        funFact: fact,
      })
    });
  };

  return (
    <div>
      <h3>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </h3>
      <p>
        <input type="text" name="picture" value={pic} onChange={(e) => setPic(e.target.value)} />
      </p>
      <p>
        <input type="text" name="lifeSpan" value={life} onChange={(e) => setLife(parseInt(e.target.value))} />
      </p>
      <p>
        <input name="information" value={info} onChange={(e) => setInfo(e.target.value)} />
      </p>
      <p>
        <input name="funFact" value={fact} onChange={(e) => setFact(e.target.value)} />
      </p>
      <button onClick={handleUpdatePuppy}>Update</button>
    </div>
  );
}

export default PuppyCardChanger;
