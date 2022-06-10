import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle=" ">
    
    
    <Link to="/thetax-starters/camera-connection/">
    <h2>#1 - Camera API Connection</h2>

      <StaticImage alt="Oppkey Palo Alto Office"         
      src="../images/office.png"/>
      </Link>

      <p>
        Send API commands to the camera. Display camera response information.  
        Output test of starter app #2 below.  Shows the response.body from the 
        camera in a text window on the app. 
      </p>
      <hr></hr>
      {/* begin tutorial #2 state management */}
      <Link to="/thetax-starters/app-state/">
      <h2> #2 - Camera Response and State Management</h2>
      <StaticImage alt="concept 2 state management" src='../images/concept_2_state_management.png' />
      </Link>
      <p></p>
      <hr />
      {/* begin tutorial #3 */}

      <Link to="/thetax-starters/bloc-intro/">
      <h2> #3 - BLoC State Management</h2>
      <StaticImage alt="Concept 3 BloC " src="../images/staff.png" />

      </Link>
      <p>Use Business LOgic Components to separate logic from gui and state</p>
      <hr />

      
<h2>THETA Community Coding Culture </h2>
      <StaticImage alt="June Group Picnic" src="../images/june_picnic_group.png" />
      <p> Project kick-off and test of Gatsby StaticImage system to host starter
        apps. File above is 2.0MB. 
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