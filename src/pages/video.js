import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const VideoPage = () => {
    return (
            <Layout pageTitle="RICOH THETA API Videos">
                <a href="https://youtube.com/playlist?list=PL0feeJIlTI8mYdNPu5zJxsHuwkt-jlfiv">
            <StaticImage alt="June Group Picnic" src="../images/getting_started_banner.jpg" />
            </a>


        <ul>
            <li><a href="https://youtu.be/YtMggR7dxKc">
                RICOH THETA Development Getting Started</a></li>
            <li><a href="https://youtu.be/q4a-a_EoDnQ">API Introduction With Examples</a></li>
            <li><a href="https://youtu.be/lA79R6eEsU8">Camera Settings Introduction</a></li>
        </ul>
        </Layout>
    )
}

export default VideoPage