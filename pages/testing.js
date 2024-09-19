import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Calculator(){
    const [totalScore, setTotalScore] = useState(0);
    const numberDictionary = ["0","1","2","3","4","5","6","7","8","9"];
    
    const calculator  = (event) => {
        event.preventDefault();
        let math = 0;
        for (let i = 1; i < 6; i++) {
            const mathHolder = [];
            let val = "Player";
            let addition = String(i);
            val = val + addition;
            let scoreArray = val.split();
            scoreArray.forEach(arrayCreator);
            let input = mathHolder.forEach(playerAddition);
            math += Number(input) || 0;
          }
          setTotalScore(math);
        }

      function arrayCreator(Points){
        for (let i = 1; i < numberDictionary.length(); i++) {
            if(Points == numberDictionary(i)){
                mathHolder.push(Points);
                console.log(mathHolder(i));
            }
        }
      }

      function playerAddition(score){
        let math = 0;
        math += Number(score);
        console.log(math);
        return math;
      }

    return(
        <div class = "scoring">
        <Head>
            <title>Golf Calculator</title>
        </Head>
        <div class ="details">
        <Header title="Welcome to my app!" />
        <p>Enter your score of each hole in each input form</p>
        </div>
        
        <table>
        <tr>
            <td>Player 1</td>
            <td><input type="text" id="Player1" name="Player1"/></td>
        </tr>
        <tr>
            <td>Player 2</td>
            <td><input type="text" id="Player2" name="Player2"/></td>
        </tr>
        <tr>
            <td>Player 3</td>
            <td><input type="text" id="Player3" name="Player3"/></td>
        </tr>
        <tr>
            <td>Player 4</td>
            <td><input type="text" id="Player4" name="Player4"/></td>
        </tr>
        <tr>
            <td>Player 5</td>
            <td><input type="text" id="Player5" name="Player5"/></td>
        </tr>
        

        </table>
        <button onClick={calculator} >Result</button>

        <div className="result">
        <h2>Total Score: {totalScore}</h2>
      </div>
        </div>
        
        
        
    )
        
    
}