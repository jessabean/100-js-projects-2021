import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout style={{ display: `flex` }}>
    <Seo title="Home" />
    <h1 style={{ textAlign: `center` }}>A bunch of little JS projects, made with <span role="img" aria-label="nerdy determination">🤓</span></h1>

    <ol style={{ maxWidth: `20em`, margin: `0 auto`}}>
      <li><Link to="/projects/1-binary-to-decimal">Binary to Decimal Converter</Link></li>
    </ol>

  </Layout>
)

export default IndexPage
