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
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.id}</td>
                  <td>{player.name}</td>
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