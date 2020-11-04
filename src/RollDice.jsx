import React, {
    useState
} from "react";
import Die from "./Die"
import "./RollDice.css"

const numbers = ["one", "two", "three", "four", "five", "six"]

function RollDice() {
    const [die, setDie] = useState({
        die1: "one",
        die2: "one",
        isRolling: false
    });

    let rand1 = Math.floor(Math.random() * numbers.length);
    let rand2 = Math.floor(Math.random() * numbers.length);



    function roll() {
        let face1 = numbers[rand1]
        let face2 = numbers[rand2]
        setDie({
            die1: face1,
            die2: face2,
            isRolling: true
        })
        setTimeout(() => {
            setDie({
                die1: face1,
                die2: face2,
                isRolling: false
            })
        }, 1000)
    }


    return ( 
       < div >
        <
        Die face = {
            `fas fa-dice-${die.die1}`
        }
        rolling={die.isRolling}
        /> <
        Die face = {
            `fas fa-dice-${die.die2}`
        }
        rolling={die.isRolling}
        /> <
        button onClick = {
            roll
        }
        style = {
            {
                background: die.isRolling && "red"
            }
        }
        disabled = {
            die.isRolling
        } > {
            die.isRolling ?
            "Rolling..." : "Roll Dice"
        } </button> 
        </div>
    )
}

export default RollDice;