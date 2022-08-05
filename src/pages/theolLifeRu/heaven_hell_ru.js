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
    <Layout pageTitle="О Рае и аде">
     
      <h1 className={heading1}><p>Разные переводы книг и оригинал</p> </h1>
      <nav className={navbar}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
            На главную страницу
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
   Категории
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
          <li className={navLinkItem}>
            <Link to="/theolLifeRu/hh_ager-ru" className={navLinkText}>
              О Рае и аде ( Ager (перевод с английского))
            </Link>
          </li>


         
        </ul>
      </nav>



    </Layout>
  )
}
export default Life