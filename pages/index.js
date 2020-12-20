import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>עורך דין מקרקעין</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        צור קשר <a href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/">מקרקעין</a>
        </h1>

        <p className="description">
          אם נפצעת <code>תתבע</code>
        </p>

        <div className="grid">
          <a href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/" className="card">
            <h3>מקרקעין &rarr;</h3>
            <p>אם זה קרה לך , תתבע. אל תוותר, אל תכעס, תתבע. צור קשר עם עורך דין </p>
          </a>

          <a href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/" className="card">
            <h3>צור קשר &rarr;</h3>
            <p>עורך דין מקרקעין</p>
          </a>

          <a
            href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/"
            className="card"
          >
            <h3>מקרקעין &rarr;</h3>
            <p>עורך דין למקרקעין, עוד מקרקעין, עורך דין מקרקעין</p>
          </a>

          <a
            href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/"
            className="card"
          >
            <h3>מקרקעין &rarr;</h3>
            <p>
              אל תצא פראייר תתטבע את המעסיק שלך, יש חוקים פה.
            </p>
          </a>
          <a
            href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/"
            className="card"
          ></a>
        </div>
      </main>
      <div>
        <h1 className="title">
         עורך דין{' '}
          <Link href="/posts/first-post">
          <a>בעמוד זה</a>
          </Link>
        </h1>
      </div>

      <footer>
        <a
          href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
