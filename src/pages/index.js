import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="RICOH THETA X Development Getting Started">
      <p>Short tutorials using Flutter and HTTP to access RICOH THETA APIs</p>
      <StaticImage alt="Oppkey Palo Alto Office"         
      src="../images/office.png"/>
      <StaticImage alt="Concept 2" src="../images/staff.jpg" />

    </Layout>
  )
}

export default IndexPage