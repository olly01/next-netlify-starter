import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Players() {
  const router = useRouter();
  const { count } = router.query;
  const playerCount = parseInt(count, 10) || 0;

  // State to manage scores
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

        {playerCount > 0 ? (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Hole 1</th>
                <th>Hole 2</th>
                <th>Hole 3</th>
                <th>Hole 4</th>
                <th>Hole 5</th>
                <th>Hole 6</th>
                <th>Hole 7</th>
                <th>Hole 8</th>
                <th>Hole 9</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.id}</td>
                  <td>{player.name}</td>
                  {Array.from({ length: 9 }).map((_, holeIndex) => (
                    <td key={holeIndex + 1}>
                      <input 
                        type="text" 
                        name={`player${player.id}_hole${holeIndex + 1}`} 
                        placeholder={`Score ${holeIndex + 1}`}
                        value={scores[`player${player.id}_hole${holeIndex + 1}`] || ''}
                        onChange={(e) => handleInputChange(e, player.id, holeIndex + 1)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No players to display.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}