import { Puppies } from "@/interfaces"
interface Props {
    puppy : Puppies;
}

export default function DisplayPuppies(props: Props){
    return(
        <main>
            <div>
                <h3>{props.puppy.name}</h3>
                <p>{props.puppy.information}</p>
            </div>
        </main>

    )

}