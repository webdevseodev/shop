import * as React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import {
  
  navbar,
  heading1,
  navLinks,
  navLinkItem,
  navLinkText
} from '../../components/layout.module.css'


const Life = () => {
  return (
    <Layout pageTitle="Теологичесские опубликованные при жизни">
     
      <h1 className={heading1}><p></p> </h1>
      <nav className={navbar}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
            На главную страницу
            </Link>
          </li>
         
          <li className={navLinkItem}>
            <Link to="/categories/life" className={navLinkText}>
          Назад
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>


         
        </ul>
      </nav>



    </Layout>
  )
}
export default Life