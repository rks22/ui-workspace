import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1></h1>
    <ul>
      <li>
<Link to="/fela/">Fela</Link>
      </li>
       <li>
     <Link to="/emotions/">Emotions</Link>   
      </li>
       <li>
        <Link to="/styledcomponents/">Styled-components</Link> 
      </li> 
      </ul> 
  </Layout>
)

export default IndexPage
