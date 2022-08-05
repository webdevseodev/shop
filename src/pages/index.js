import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Emanuel Swedenborg</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/icon.png"
      />
      {/* <Link to="../papka/proba">Proba</Link> */}
    </Layout>
  )
}

export default IndexPage