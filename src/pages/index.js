import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>My Personal Website</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="description" content="Sam Balent's personal website showcasing projects and interests." />
        <meta name="keywords" content="Sam Balent, computer science, CU Boulder, projects, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>

      <main>
        <h1 className='title'>Hi! Welcome to my Website</h1>

        <p className='description'>
          My name is Sam Balent and I am a computer science student at CU Boulder
        </p>
        <p className='description2'>
          "Your the creator,anything that you want you can build here this is your world" - Bob Ross
        </p>

        <div className='languages-section'>
        {/* Java Section */}
        <div className='language-row'>
          <img src='https://media.licdn.com/dms/image/v2/C4E0BAQFX9tqZmIgI0w/company-logo_200_200/company-logo_200_200/0/1630608974950/javacommunity_logo?e=2147483647&v=beta&t=e65thVrspokNMYyQxl1ZvsQeJmzwlWA0_nu9zsoAvVc' alt='Java Logo' className='language-image' />
          <p className='language-description'>
            Java was the first language that I fell in love with. I enrolled in a computer science class
            my last year of highschool that was focused on Java. This class was super competetive and pushed
            me to do more then just the basic of the class. I focused on implementing API's and learned the
            basics of source control and Git. Check out some of my java projects below.
          </p>
        </div>

        {/* C++ Section */}
        <div className='language-row reverse'>
          <p className='language-description'>
            I am currently learning C++ and love it. I have learned how to use IO-Stream, classes, data types
            and many other fundimental things in CPP.
          </p>
          <img src='https://avatars.githubusercontent.com/u/59276?s=280&v=4' alt='C++ Logo' className='language-image' />
        </div>
      </div>

        <div className='grid'>

          <a href='/personal' className='card'>
            <h3>Personal Page &rarr;</h3>
            <p>Click here to navigate to my personal page</p>
          </a>

          <a href='/projects' className='card'>
            <h3>Projects Page &rarr;</h3>
            <p>Click here to see my projects on Github</p>
          </a>
        </div>
  
      </main>

      <footer>
        <a href='https://github.com/sammy12bammy/Personal-Website' alt='Github username: Samuel Balent'>
          This website was written in Javascript, HTML, and CSS by me! Check it out on Github by clicking 
          on this text
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
          color: #0070f3;
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
          color: #ededf2;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          color: #ededf2;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .description2 {
          color: #ededf2;
          line-height: 1.5;
          font-size: 1.25rem;
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

        .card:hover {
          transform: scale(1.2);
          z-index: 1;
          transition: transform 0.2s ease-in-out;
        }

        .card:hover ~ .card,
        .card:not(:hover) {
          transform: scale(0.9);
          opacity: 0.8;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          color: #ededf2;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          color: #ededf2;
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

        /* Programming Languages Section */
        .languages-section {
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 0 7rem;
        }

        .language-row {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .language-row.reverse {
          flex-direction: row-reverse;
        }

        .language-image {
          width: 100px;
          height: auto;
        }

        .language-description {
          flex: 1;
          font-size: 1.25rem;
          color: #ededf2;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .language-row {
            flex-direction: column;
            text-align: center;
          }

          .language-row.reverse {
            flex-direction: column;
          }

          .language-image {
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #1c1d4d;
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
  );
}
