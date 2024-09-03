import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Players() {
  const router = useRouter();
  const { count } = router.query; // Get the "count" query parameter
  const playerCount = parseInt(count, 10) || 0; // Convert to an integer or default to 0

  // Create an array to represent the players
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
                  <td> <input type="text" id="Hole1"> </input></td>
                  <td> <input type="text" id="Hole2"> </input></td>
                  <td> <input type="text" id="Hole3"> </input></td>
                  <td> <input type="text" id="Hole4"> </input></td>
                  <td> <input type="text" id="Hole5"> </input></td>
                  <td> <input type="text" id="Hole6"> </input></td>
                  <td> <input type="text" id="Hole7"> </input></td>
                  <td> <input type="text" id="Hole8"> </input></td>
                  <td> <input type="text" id="Hole9"> </input></td>
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