import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
            <Layout pageTitle="About theta360.guide">
            <StaticImage alt="June Group Picnic" src="../images/june_picnic_group.png" />


                <p>The THETA X Development Getting Started Guide is created by 
                theta360.guide, an independent community site run by Oppkey. 
                The community receives sponsorship from RICOH, but is not an
                official RICOH site.  Please contact RICOH directly for official
                information </p>
                <p>info@oppkey.com</p>
        </Layout>
    )
}

export default AboutPage