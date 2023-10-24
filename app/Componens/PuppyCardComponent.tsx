import { Puppy } from "@/interfaces";
interface Props {
  puppy: Puppy;
}
export default function PuppyCardComponent(props: Props) {
  return (
    <div
      className="bg-yellow-50 rounded-lg 
    m-2 p-4 w-full"
    >
      <h3 className="text-xl text-blue-600">
        {props.puppy.name}
      </h3>
      <p>{props.puppy.information}</p>
      <p>{props.puppy.funFact}</p>
    </div>
  );
}