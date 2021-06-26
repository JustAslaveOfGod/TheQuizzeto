import { Link } from "react-router-dom";
import goodscore from "./Images/goodscore.mp3";
import no from "./Images/no.mp3";
import timefor from "./Images/timefor.mp3";
import { Howl, Howler } from 'howler';
import { useEffect, useState } from "react";




const Firstpage = () => {
    let sound = new Howl({
        src: [timefor],
        autoplay: false,
        onend: () =>{setIsPlaying(false)}
    });
    useEffect(() => {
        sound.play()
    }, [])
    const [isPlaying, setIsPlaying] = useState(true)
    console.log(sound.state())
    return (

        <div className="firstpage">
            <div className="drapeaux">
                <h1 className="titre">El Questionnaire</h1>
                {!isPlaying && <div className="start">
                    <div className="kikoo">
                    <Link className="starttart" to="/questions">start</Link>
                    </div>
                </div>}

                <div className="image">
                    <img src={require("./Images/Cat1.jpg").default} height={250} width={250} />
                    <img src={require("./Images/Cat2.jpg").default} height={250} width={250} />
                    <img src={require("./Images/Cat3.jpg").default} height={250} width={250} />
                    <img src={require("./Images/Cat5.jpg").default} height={250} width={250} />

                </div>
            </div>

        </div>

    );
}


export default Firstpage;