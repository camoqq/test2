import React from "react";
import "./sharedCSS.css";
import Numbers from "./components/numbers";
import Head from "next/head";
import Navbar from "./components/navbar";
import Chart from "./components/chart";
import "./sharedCSS.css";
import Minimenu from "./components/minimenu";

const Home = async () => {
  return (
    <div className="container">
      <Head>
        <title>Dashboard </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="firstPage">
        <Minimenu />
        <h1>MEDICAL DASHBOARD</h1>
        <Numbers />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
