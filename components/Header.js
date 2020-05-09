import Head from "next/head";
import Link from "next/link";
import colors from "../utils/colors";

const title = "Работа для Junior разработчиков";
const desc =
  "Работа для начинающих разработчиков, которые недавно закончили обучение и готовы начать карьеру в IT";
const Header = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={desc} />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://juniors.casply.com/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="https://juniors.casply.com/favicon.png"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://juniors.casply.com/twitter-card.jpg"
        />
      </Head>

      <nav className="navbar navbar-light bg-dark">
        <div className="container justify-content-between">
          <Link href="/" as="/">
            <a className="navbar-brand text-white">
              <span>Juniors</span> Jobs
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        span {
          color: ${colors.main};
        }
      `}</style>
    </>
  );
};

export default Header;
