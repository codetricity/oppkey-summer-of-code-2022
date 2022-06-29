import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle=" ">

<p>
  HTTP request to RICOH THETA API using Wi-Fi.
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
    
    <Link to="/thetax-starters/01-camera-connection/">
    <h2>#1 - RICOH THETA API Camera Connection</h2>

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
      <Link to="/thetax-starters/02-app-state/">
      <h2> #2 -Using RICOH THETA API Response to Update App Screen</h2>
      <StaticImage alt="concept 2 state management" src='../images/concept_2_state_management.png' />
      </Link>
      <p>
        Camera response is JSON. Encode into object for the language you are using to extract 
        information such as battery level. Update mobile app interface when camera response is
        received.
      </p>
      <hr />
      {/* begin tutorial #3 */}

      <Link to="/thetax-starters/03-bloc-intro/">
      <h2> #3 - RICOH THETA API App State Management with BLoC</h2>
      <StaticImage alt="Concept 3 BloC " src="../images/staff.png" />

      </Link>
      <p>
        Use Business LOgic Components to separate logic from GUI and application state.</p>
        <p>
          API Examples:
        </p>
        <ul>
          <li>list thumbnails to improve app performance</li>
          <li>Show 360 image with navigation</li>
          <li>8K 2fps and 8K 5fps video</li>
          <li>Extract URL of files using listFiles</li>
        </ul>
      <hr />

      <Link to="/thetax-starters/04-multibloc/">
      <h2> #4 - RICOH THETA API Screen and Settings Organization</h2>
      <StaticImage alt="Concept 4 BloC " src="../images/04_screen_main.png" />

      </Link>
      <p>Organize camera settings onto different screens using multiple blocs. </p>
      <p>API Examples:
      </p>
      <ol>
        <li>image stitching</li>
        <li>image top/bottom correction</li>
        <li> image exposure compensation</li>
        <li> image HDR on/off</li>
        <li> video stitching</li>
        <li>video formats: 8K 2fps, 8K 10fps, 4K 30fps</li>
        <li> video bitrate: fine, normal, economy</li>
   

      </ol>
      <hr />      

      
<h2>RICOH THETA API Community Culture </h2>
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