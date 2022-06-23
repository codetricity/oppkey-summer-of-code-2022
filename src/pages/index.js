import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle=" ">

<p>
  HTTP request to RICOH THETA using Wi-Fi.
  </p>
  <p>
    curl 192.168.1.1/osc/info
</p>

      <p>
        HTTP response edited for conciseness.
        </p>
        <p>
      <code>
      {`{..."firmwareVersion":"1.10.1","manufacturer":"Ricoh Company, Ltd.","model":"RICOH THETA X","serialNumber":"14010001","_wlanMacAddress":"0C:8B:FD:2F:05:7B"}`}
      </code>
      </p>
    
    <Link to="/thetax-starters/camera-connection/">
    <h2>#1 - Camera API Connection</h2>

      <StaticImage alt="Oppkey Palo Alto Office"         
      src="../images/office.png"/>
      </Link>

      <p>
        Camera as HTTP endpoint. HTTP GET and POST request format. Header format. POST request
        with body. 
        
        <a href="https://api.ricoh/docs/theta-web-api-v2.1/">
        Official RICOH API documentation</a>. <a href="https://community.theta360.guide/">Community support</a>. 
      </p>
      <hr></hr>
      {/* begin tutorial #2 state management */}
      <Link to="/thetax-starters/app-state/">
      <h2> #2 - Camera Response and State Management</h2>
      <StaticImage alt="concept 2 state management" src='../images/concept_2_state_management.png' />
      </Link>
      <p>
        Camera response is JSON. Encode into object for the language you are using to extract 
        information such as battery level. Update mobile app interface when camera response is
        received.
      </p>
      <hr />
      {/* begin tutorial #3 */}

      <Link to="/thetax-starters/bloc-intro/">
      <h2> #3 - BLoC State Management</h2>
      <StaticImage alt="Concept 3 BloC " src="../images/staff.png" />

      </Link>
      <p>List thumbnails at reduced size for network efficiency. Show 360 image with navigation. 
        Set 8K 2fps  and 8K 5fps video. Switch between image and video mode. Extract URL of
        files on camera using listFiles.
        Use Business LOgic Components to separate logic from GUI and application state.</p>
      <hr />

      
<h2>THETA Community Coding Culture </h2>
      <p> Project kick-off and test of Gatsby StaticImage system to host starter
        apps. 
      </p>
      <hr></hr>

      <StaticImage alt="Jesse Agueda" src="../images/jesse_agueda.png" />
      <p> Jesse and Agueda eye the tasty food. </p>
        <hr></hr>

    <StaticImage alt="Picnic Wind" src="../images/picnic_wind.png" />
    <p> The wind kept things cool and lively.  Agueda grabbing a beverage cup blowing away!</p>
    <hr></hr>
    <StaticImage alt="Steak" src="../images/steak.png" />
    <p> We had several pounds of charcoal-grilled steak and several pounds of chicken.</p>
    <hr></hr>

    </Layout>
  )
}

export default IndexPage