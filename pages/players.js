import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Players() {
  return (
    <div className="container">
      <Head>
        <title>Players Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Player Information" />
        <p>Here is the players' information...</p>
      </main>

      <Footer />
    </div>
  )
}