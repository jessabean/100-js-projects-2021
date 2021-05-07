/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="page-wrapper">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer
          style={{
            maxWidth: `40em`,
            margin: `0 auto`,
            padding: `3rem`,
            textAlign: `center`
          }}
        >
          © {new Date().getFullYear()}, Built with <span role="img" aria-label="sparkles">✨</span> by
          {` `}
          <a href="https://jessabean.github.io">jessabean</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
