import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="usefullinks" />
    <p><a target="_blank" href='https://www.gatsbyjs.org/'>Gatsby intro</a></p>
    <p><a target="_blank" href='https://www.netlify.com/'>Netlify</a></p>
    <p><a target="_blank" href='https://www.gatsbyjs.org/docs/deploying-to-netlify/'>Gatsby site on Netlify</a></p>
  </Layout>
)

export default IndexPage
