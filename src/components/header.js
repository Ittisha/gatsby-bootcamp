import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
        </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Contact</Link>
          </li>
          <li>
            <Link to="/blog" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
