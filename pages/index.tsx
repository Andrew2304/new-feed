import { useState, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/layout"

const HomePage: NextPage = () => {
  useEffect(() => {
  }, [])

  return (
    <Layout pageName="HomePage">
      <Head>
        <title>NFT</title>
        <meta name="description" content="NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homePage}>
        Hello
      </div>
    </Layout>
  )
}

export default HomePage
