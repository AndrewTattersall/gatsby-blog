import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import meme2 from "../images/meme5.jpg"
import meme3 from "../images/react2.jpg"

const About = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h3>What is React.js?</h3>
        <img src={meme3} alt="React framework meme" />
        <p>
          React.js is the most popular front-end JavaScript library for building
          Web applications.{" "}
        </p>
        <p>
          React.js is an open-source JavaScript library that is used for
          building user interfaces specifically for single-page applications.
          It’s used for handling the view layer for web and mobile apps. React
          also allows us to create reusable UI components. React was first
          created by Jordan Walke, a software engineer working for Facebook.
          React first deployed on Facebook’s newsfeed in 2011 and on
          Instagram.com in 2012.
        </p>
        <p>
          As a junior developer, I held off learning a JS framework for months
          and just focused on learning the fundamentals well. I think React is a
          good move for now, but who knows, maybe Vue will overtake React or
          maybe even Angular will make a comeback. But in particular at the
          start of your coding journey, a framework will allow you build bigger
          and more ambitious projects and keep you motivated.
        </p>
        <img src={meme2} alt="React meme" />
      </Layout>
    </div>
  )
}

export default About
