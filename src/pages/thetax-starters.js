import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const ThetaXStartersPage = ({data}) => {
    return (
        <Layout pageTitle="THETA X Getting Started Apps">
        <p>Getting started quickly with the RICOH THETA API</p>
        <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
        </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
            allFile {
            nodes {
                name
            }
        }
    }
  `
  
  export default ThetaXStartersPage
