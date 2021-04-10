import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact </h1>
        <p>Email - tattwo@live.com</p>
        <p>Mobile - 07464781785</p>
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
