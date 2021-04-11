import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import meme2 from "../images/meme2.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h3>I'm Andrew 👋 this is a short blog of my journey learning React</h3>
      <img src={meme2} alt="meme2" />
      <p>
        This blog site was put together using Gatsby with a Contentful CMS. All
        posts from this site are generated from Contentful.
      </p>
    </Layout>
  )
}

export default IndexPage
