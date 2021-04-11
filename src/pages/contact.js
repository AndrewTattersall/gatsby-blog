import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h3>Contact </h3>
        <p>Email - tattwo@live.com</p>
        <p>
          Follow me on{" "}
          <a href="https://github.com/" target="_blank">
            Github
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default Contact
