import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="RICOH THETA X Development Getting Started">
      <p>Short tutorials using Flutter and HTTP to access RICOH THETA APIs. 
        Testing basic camera command app below.  Code and tutorial available in 
        starter app #1.
      </p>
      <StaticImage alt="Oppkey Palo Alto Office"         
      src="../images/office.png"/>
      <p>
        Send API commands to the camera. Display camera response information.  
        Output test of starter app #2 below.  Shows the response.body from the 
        camera in a text window on the app. 
      </p>
      <StaticImage alt="Concept 2" src="../images/staff.png" />
      
<h2>Summer of Code 2022 Kick-Off Picnic</h2>
      <StaticImage alt="June Group Picnic" src="../images/june_picnic_group.png" />
      <p> Test of Gatsby StaticImage system. File above is 2.0MB. 
      </p>
      <hr></hr>

      <StaticImage alt="Jesse Agueda" src="../images/jesse_agueda.png" />
      <p> File above of Jesse and Agueda is 
        1.17MB</p>
        <hr></hr>

    <StaticImage alt="Picnic Wind" src="../images/picnic_wind.png" />
    <p> The wind kept things cool and lively.  Static image file above of Agueda grabbing a beverage cup blowing away is 1.8MB.</p>
    <hr></hr>
    <StaticImage alt="Steak" src="../images/steak.png" />
    <p> We had several pounds of charcoal-grilled steak and several pounds of chicken. Image file is 1.3MB.</p>
    <hr></hr>

    </Layout>
  )
}

export default IndexPage