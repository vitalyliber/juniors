import Head from "next/head";
import Footer from "../components/Footer";
import { fetchJuniors } from "../api/juniors";
import Card from "../components/Card";
import Header from "../components/Header";
import Jimbotron from "../components/Jimbotron";

export default function Home({ list }) {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <Jimbotron />
            <div className="card-columns">
              {list.map((el) => (
                <Card item={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { list } = await fetchJuniors();
  return { unstable_revalidate: 1, props: { list } };
}
