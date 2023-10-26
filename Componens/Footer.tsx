import localFont from "next/font/local"

const myfont = localFont({src:"../fonts/Pacifico-Regular.ttf"});

export default function Footer(){
    return(
        <footer>
            <div className="contact">
            <h1>Contact us</h1>
            <p>puppy@encyclopedia.org</p>
            <p>0001-0304 90182</p>
            </div>
            <div className="links">
            <h1>Our socials</h1>
            <a id="facebook"href="https://www.facebook.com/groups/690063234423023">Facebook</a>
            <a id="youtube"href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Youtube</a>
            </div>
            <div>
            <h1 style={myfont.style}className='logo'>Puppy Encyclopedia!</h1>
            </div>
        </footer>
    )
}