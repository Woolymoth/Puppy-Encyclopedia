import { Puppy } from "@/interfaces";
interface Props {
  puppy: Puppy;
}
export default function PuppyCardComponent(props: Props) {
  return (
    <main>
    <div className="puppyCard">
      <h2 id="puppyName" className="puppyInfo">
        {props.puppy.name}
      </h2>
      <img src={props.puppy.picture} alt="Puppy" id="puppyImage"/>
      <div id="lifeSpan">
      <h3>Lifespan</h3>
      <p>Aprox {props.puppy.lifeSpan} years.</p>
      </div>
      <p className="puppyInfo">{props.puppy.information}</p>
      <p className="puppyInfo">{props.puppy.funFact}</p>
    </div>
    </main>
  );
}