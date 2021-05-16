import React, {useState} from 'react';
import './EightBall.css';
import answers from './answers';
import changeBox from './helper';

const Eightball = () => {
    // set up the magic ball
    const [answer, setAnswer] = useState("Think of a Question");
    const [bgcolor, setBgcolor] = useState("black");
    // change box including content and color
    const getNewBox = () => {
        let box = changeBox(answers);
        setAnswer(box.msg);
        setBgcolor(box.color);
    }

    return (
        <div className = "magicBall">
            <div className = "magicBall-ball" style={{backgroundColor:bgcolor}}>
                {answer}
            </div>
            <button onClick={getNewBox} className = "magicBall-btn">Change Box</button>
        </div>
    )
}

export default Eightball;