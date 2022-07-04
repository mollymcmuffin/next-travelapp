import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Header/Navbar";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import { Fragment } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </Fragment>
  );
}
