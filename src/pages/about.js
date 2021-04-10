import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <p>I'm Andrew, a front-end web developer based in Manchester</p>
        <p>
          Need a developer? <Link to="/contact">Contact Me</Link>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default About
