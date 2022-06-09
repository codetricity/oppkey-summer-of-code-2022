import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="RICOH THETA X Development Getting Started">
      <p>Short tutorials using Flutter and HTTP to access RICOH THETA APIs</p>
      <StaticImage alt="Oppkey Palo Alto Office"         
      src="../images/office.png"/>
      <p>
        Send API commands to the camera. Display camera response information.
      </p>
      <StaticImage alt="Concept 2" src="../images/staff.png" />
      
<h2>Summer of Code 2022 Kick-Off Picnic</h2>
      <StaticImage alt="June Group Picnic" src="../images/june_picnic_group.png" />
      <p> Test of Gatsby StaticImage system</p>


    </Layout>
  )
}

export default IndexPage