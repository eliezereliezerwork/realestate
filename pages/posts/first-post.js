import Link from 'next/link'
export default function FirstPost() {
    return (<div  className="container">

          <h1>עורך דין</h1>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>

            <h1>עורך דין תותח </h1>
            <a href="http://www.2all.co.il/web/Sites19/zegelshten/DEFAULT.asp">תאונת עבודה</a>
            <h1>עורך דין מלך</h1>
            <a href="https://xn----6hceqci6ar9c.yolasite.com/">תאונת עבודה</a>
            <a href= "https://segelstein.com/">דיני עבודה</a>
            <a href="http://www.hup.co.il/link/%D7%A2%D7%95%D7%A8%D7%9A-%D7%93%D7%99%D7%9F/63118-%D7%96%D7%92%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F-%D7%9E%D7%A9%D7%A8%D7%93-%D7%A2%D7%95%D7%93">תאונת עבודה</a>
            <a href= "https://workaccident.vercel.app/">תאונת עבודה</a>

            <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            a {
              color: #0070f3;
              text-decoration: none;
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
    )}