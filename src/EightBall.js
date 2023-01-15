import React, {useState} from "react";
import ('./EightBall.css')

const EightBall = ({ answers }) =>{    
    const getRandom = () => {
        return Math.floor(Math.random() * answers.length
        )}
    const i = getRandom();
    const restart = () =>{
        setMessage("Think of a Question");
        setColor('')
        setGreenCount(0)
        setRedCount(0)
        setGoldenredCount(0)
    }

    const getanswer = () =>{
        setMessage(answers[i].msg); 
        setColor(answers[i].color);
        setGreenCount(greenCount)
        setRedCount(redCount)
        setGoldenredCount(goldenrodCount)
    }
    const [message, setMessage] = useState("Think of a Question")
    const [color, setColor] = useState('')
    const [greecount, setGreenCount] = useState(0)
    const [redcount, setRedCount] = useState(0)
    const [goldenredcount, setGoldenredCount] = useState(0)

    const greenCount = ()=>{
        if (answers[i].color === "green"){
            return greecount + 1;
        }
    }
    const redCount = ()=>{
        if (answers[i].color === "red"){
            return redcount + 1;
        }
    }
    const goldenrodCount = ()=>{
        if (answers[i].color === "goldenrod"){
            return goldenredcount + 1;
        }
    }
   
    return(
        <div>
            <button style={{backgroundColor:`${color}`}} className="EightBall-msg" onClick={getanswer}>{message}</button>
            <button onClick={restart}>Restart</button>
            <ul>
                <li>Green:{greecount}</li>
                <li>goldenrod:{goldenredcount}</li>
                <li>red:{redcount}</li>
            </ul>
        </div>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}
export default EightBall



