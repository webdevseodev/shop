import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {heading1} from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <h1 className={heading1}> <p>Emanuel Swedenborg</p> </h1>
      <StaticImage
        alt=""
        src="../images/icon.png"
        layout="fullWidth"
        
      />
   
  

   
     




  








    </Layout>
  )
}

export default IndexPage