import Navbar from "./Navbar"
import localFont from "next/font/local"

const myfont = localFont({src:"../fonts/Pacifico-Regular.ttf"});


export default function Header(){
    return(
        <header><h1 style={myfont.style}className='logo'>Puppy Encyclopedia!</h1>
        <Navbar/>
        </header>


    )
}