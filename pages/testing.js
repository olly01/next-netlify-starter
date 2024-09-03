import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Testing(){
    const router = useRouter();
    const { count } = router.query;
    const playerCount = parseInt(count, 10) || 0;
    return(
    <div className="container">
    <Head>
      <title>Players Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header title="Player Information" />

      <h2>Number of Players: {playerCount}</h2>

      <table style="width:100%">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
      </main>

      <Footer />
      
    </div>
  )
}