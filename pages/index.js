import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Home() {
  const router = useRouter();
  const [playerCount, setPlayerCount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/testing?count=${playerCount}`);
  }
  const calculator  = (event) => {
    router.push('/calculator')
  }
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Amount of players" 
                required
                value={playerCount}
                onChange={(e) => setPlayerCount(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">Enter</button>
            
          </form>
          <button onclick={calculator} >Calculator</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}