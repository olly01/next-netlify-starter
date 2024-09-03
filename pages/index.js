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
        
        <body>
        
        <div class="wrapper">
          <form action="">
            <div class ="input-box">
              <input type="text" placeholder="Amount of players" required>
              </input>
            </div>
            <button type="submit" class ="btn">Enter</button>
          </form>
        </div>
      </body>
      </main>

      <Footer />
      
    </div>
  )
}
