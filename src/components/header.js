import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--color-black)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `40em`,
        textAlign: `center`,
        padding: `3rem 1.0875rem`,
      }}
    >
      <h1 style={{
          margin: 0,
          fontSize: `4.5rem`
        }}
      >
        <Link
          to="/"
          className="site-header-link"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
