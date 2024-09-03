import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Testing() {
    const router = useRouter();
    const { count } = router.query;
    const playerCount = parseInt(count, 10) || 0;
    
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
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Company">Alfreds Futterkiste</td>
                            <td data-label="Contact">Maria Anders</td>
                            <td data-label="Country">Germany</td>
                        </tr>
                        <tr>
                            <td data-label="Company">Centro comercial Moctezuma</td>
                            <td data-label="Contact">Francisco Chang</td>
                            <td data-label="Country">Mexico</td>
                        </tr>
                    </tbody>
                </table>
            </main>

            <Footer />
        </div>
    )
}