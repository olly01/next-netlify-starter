import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Testing() {
    const router = useRouter();
    const { count } = router.query;
    const playerCount = parseInt(count, 10) || 0;
    const players = Array.from({ length: playerCount }, (_, i) => ({
        id: i + 1,
        name: `Player ${i + 1}`
      }));
    return (
        <div className="container">
            <Head>
                <title>Players Page</title>
                <link rel="icon" href="/favicon.ico" />
                <style>
                    {`
                    .responsive-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        overflow-x: auto;
                        display: block;
                    }

                    .responsive-table th, .responsive-table td {
                        padding: 12px;
                        text-align: left;
                        border: 1px solid #ddd;
                    }

                    .responsive-table th {
                        background-color: #f4f4f4;
                    }

                    @media (max-width: 768px) {
                        .responsive-table thead {
                            display: none;
                        }

                        .responsive-table, .responsive-table tbody, .responsive-table tr, .responsive-table td {
                            display: block;
                            width: 100%;
                        }

                        .responsive-table tr {
                            margin-bottom: 15px;
                            border-bottom: 2px solid #ddd;
                        }

                        .responsive-table td {
                            text-align: right;
                            padding-left: 50%;
                            position: relative;
                        }

                        .responsive-table td::before {
                            content: attr(data-label);
                            position: absolute;
                            left: 0;
                            width: 45%;
                            padding-left: 10px;
                            font-weight: bold;
                            text-align: left;
                        }
                    }
                    `}
                </style>
            </Head>

            <main>
                <Header title="Player Information" />

                <h2>Number of Players: {playerCount}</h2>

                <table className="responsive-table">
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
                        <tr key ={player.id}>
                            <td data-label="ID">{player.id}</td>
                            <td data-label="Name">{player.name}</td>
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
            </main>

            <Footer />
        </div>
    )
}