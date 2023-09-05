import React, { useState } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";


import Footer from "../components/Footer";

import Tokenomics from "../components/Tokenomics";

import Buy from "../components/Buy";
import Chart from "../components/Chart";

const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main>
            <Navigation />
            <Banner />
       
            <Tokenomics />
            <Buy />
            <Chart />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
