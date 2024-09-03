import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    router.push('/players'); // Navigate to the "players" page
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
              <input type="text" placeholder="Amount of players" required />
            </div>
            <button type="submit" className="btn">Enter</button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}