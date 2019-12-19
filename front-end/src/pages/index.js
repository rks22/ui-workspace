import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <details style={{marginBottom:'20px'}}> 
            <summary style={{marginBottom:'8px'}}>Intro</summary> 
          <i>Please go through the  <Link
          to="/usefulLinks"
          style={{
            color: `blue`,
            textDecoration: `underline`,
          }}
        >
          useful links
        </Link> for details.</i>
          <p style={{margin:'8px 0'}}>Gatsby and netlify makes the developers not to worry about  bundling,transpiling and deploying the code 
            effectively. It takes care of everything where team can just focus on their goals.This platform is created
            for developers to put thier thoughts , build proof of concepts for the ease of UX UI design and development.
            This also can be used to put any of the out of the box thoughts.
            </p> 

        </details> 
        <details style={{marginBottom:'20px'}}> 
            <summary  style={{marginBottom:'8px'}}>Simple steps :- Setting up development environment</summary> 
           <i>Please go through the  <Link
          to="/usefulLinks"
          style={{
            color: `blue`,
            textDecoration: `underline`,
          }}
        >
          useful links
        </Link> for details.</i>
        <ol>
            <li style={{margin:'8px 0'}}>Install gatsby-cli globally in your system :- npm install -g gatsby-cli</li>
            <li style={{margin:'8px 0'}}> Clone from the repository(create a github account if you dont have one) :-
               https://github.com/rks22/ui-workspace </li>
               <li> In the front-end folder run :- gatsby develop</li>
               <li> Now your server be  will running on the port 8000 :- access http://localhost:8000/ </li>
               <li> Gatsby will be watching your changes . Make the changes , stabilize it and push to the repository's master branch</li>
               <li> Dont worry about deployment . Netlify is already watching our repository.If not we can trigger the build in netlify manually</li>
          </ol>
          
        </details> 

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
      <li>
        <Link to="/">Anything</Link> 
      </li> 
      </ul> 
  </Layout>
)

export default IndexPage
