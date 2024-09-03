import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Testing() {
    const router = useRouter();
    const { count } = router.query;
    const playerCount = parseInt(count, 10) || 0;

    const [scores, setScores] = useState({});

    const handleInputChange = (event, playerId, holeIndex) => {
      const { value } = event.target;
      setScores((prevScores) => ({
        ...prevScores,
        [`player${playerId}_hole${holeIndex}`]: value,
      }));
    };

    const players = Array.from({ length: playerCount }, (_, i) => ({
        id: i + 1,
        name: `Player ${i + 1}`
      }));
    return (
        <div className="container">
            <Head>
                <title>Players Page</title>
                <link rel="icon" href="/favicon.ico" />
                
            </Head>

            <main>
                <Header title="Player Information" />

                <h2>Number of Players: {playerCount}</h2>

                <table>
  <tr>
    <td><label for="surname">Surname:</label></td>
    <td><input type="text" id="surname" name="surname"/></td>
  </tr>
  <tr>
    <td><label for="othernames">Other Names:</label></td>
    <td><input type="text" id="othernames" name="othernames"/></td>
  </tr>
  <tr>
    <td><label for="email">Email:</label></td>
    <td><input type="email" id="email" name="email"/></td>
  </tr>
  <tr>
    <td><label for="phone">Phone:</label></td>
    <td><input type="tel" id="phone" name="phone"/></td>
  </tr>
  <tr>
    <td><label for="address">Address:</label></td>
    <td><input type="text" id="address" name="address"/></td>
  </tr>
</table>
            </main>

            <Footer />
        </div>
    )
}