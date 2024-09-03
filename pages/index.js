import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
      <body>
        
        <div class="wrapper">
          <form action="">
            <div class ="input-box">
              <input type="number" placeolder="Amount of players" required>
              </input>
            </div>
          </form>
        </div>
      </body>
    </div>
  )
}
