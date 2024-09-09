import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Calculator(){
    const calculator  = (event) => {
        event.preventDefault();
        
        let math = 0;
        for (let i = 1; i < 10; i++) {
            let val = "Hole"
            let addition = String(i);
            val = val + addition;
            let input = document.getElementById(val).value;
            math += Number(input);
          }
        alert(`Total score: ${math}`);
      }

    <script>
            
    </script>
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
            <td>Hole 1</td>
            <td><input type="text" id="Hole1" name="Hole 1"/></td>
        </tr>
        <tr>
            <td>Hole 2</td>
            <td><input type="text" id="Hole2" name="Hole 2"/></td>
        </tr>
        <tr>
            <td>Hole 3</td>
            <td><input type="text" id="Hole3" name="Hole 3"/></td>
        </tr>
        <tr>
            <td>Hole 4</td>
            <td><input type="text" id="Hole4" name="Hole 4"/></td>
        </tr>
        <tr>
            <td>Hole 5</td>
            <td><input type="text" id="Hole5" name="Hole 5"/></td>
        </tr>
        <tr>
            <td>Hole 6</td>
            <td><input type="text" id="Hole6" name="Hole 6"/></td>
        </tr>
        <tr>
            <td>Hole 7</td>
            <td><input type="text" id="Hole7" name="Hole 7"/></td>
        </tr>
        <tr>
            <td>Hole 8</td>
            <td><input type="text" id="Hole8" name="Hole 8"/></td>
        </tr>
        <tr>
            <td>Hole 9</td>
            <td><input type="text" id="Hole9" name="Hole 9"/></td>
        </tr>

        </table>
        <button onClick={calculator} >Result</button>
        </div>
        
        
        
    )
        
    
}