import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Calculator(){


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
            <td><input type="text" id="Hole 1" name="Hole 1"/></td>
        </tr>
        <tr>
            <td>Hole 2</td>
            <td><input type="text" id="Hole 2" name="Hole 2"/></td>
        </tr>
        <tr>
            <td>Hole 3</td>
            <td><input type="text" id="Hole 3" name="Hole 3"/></td>
        </tr>
        <tr>
            <td>Hole 4</td>
            <td><input type="text" id="Hole 4" name="Hole 4"/></td>
        </tr>
        <tr>
            <td>Hole 5</td>
            <td><input type="text" id="Hole 5" name="Hole 5"/></td>
        </tr>
        <tr>
            <td>Hole 6</td>
            <td><input type="text" id="Hole 6" name="Hole 6"/></td>
        </tr>
        <tr>
            <td>Hole 7</td>
            <td><input type="text" id="Hole 7" name="Hole 7"/></td>
        </tr>
        <tr>
            <td>Hole 8</td>
            <td><input type="text" id="Hole 8" name="Hole 8"/></td>
        </tr>
        <tr>
            <td>Hole 9</td>
            <td><input type="text" id="Hole 9" name="Hole 9"/></td>
        </tr>
        </table>
        </div>
        
        
        
    )
        
    
}