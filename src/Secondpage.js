import { useEffect, useState } from "react";
import {Howl, Howler} from 'howler';
import goodscore from "./Images/goodscore.mp3";
import no from "./Images/no.mp3";
let isPlaying
let sound1 = new Howl({
  src: [goodscore],
});
let sound2 = new Howl({
  src: [no]
});
let sound3 = new Howl({
  src: [goodscore, no]
});

const Secondpage = () => {


const [is, setIs] = useState(false)
const [is2, setIs2] = useState(false)


//AGRANDIS LIMAGE POUR QUILL  NE PUISSE PLUS APPUYER

  const handleClickYes = () => {
    console.log(sound1.playing())
    if (sound1.playing() === true) {
    }
    else{
      setIs(true)
      sound1.play()
      sound1.once("end", () =>{
        sound1.stop()
        setIs(false)
      })
    }

  }
  const handleClickNo = () => {
    if (sound2.playing() === true) {
    }
    else{
      setIs2(true)
      sound2.play()
      sound2.once("end", () =>{
        sound2.stop()
        setIs2(false)
      })
    }
  }
  
  return (
    <div className="Secondpage">
      <div className="divyourname">
      <p className="yourname">What IS your NAME</p>
      </div>
      {is && <img className="cat44"src={require("./Images/Cat4.png").default} height={250} width={250} />}
      {is2 && <img className="cat55"src={require("./Images/cat6.jpg").default} height={250} width={250} />}
      <button className="yes"onClick={handleClickYes}>Yes</button>
      <button className="no   "onClick={handleClickNo}>No </button>
    </div>
  );
}
export default Secondpage;