import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import {

  navbar,

  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'


const AboutPage = () => {
  return (
    <Layout pageTitle="Категории">
      <nav className={navbar}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
             На главную страницу
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="../categories/life" className={navLinkText}>
            Теологичесские опубликованные при жизни
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="../categories/after_death" className={navLinkText}>
            Теологичесские опубликованные посмертно
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="../categories/first_works" className={navLinkText}>
            Дотеологичесские работы 
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="../papka/proba" className={navLinkText}>
           Proba
            </Link>
          </li> */}
        </ul>
      </nav>
    </Layout>
  )
}

export default AboutPage