import * as React from 'react'
import {graphql} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const ThetaXStartersPage = ({data}) => {
    return (
        <Layout pageTitle="THETA X Getting Started Apps">
        <p>Getting started quickly with the RICOH THETA API</p>
        <ul>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2> {node.frontmatter.title}</h2>
                        <p>Created: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>



                ))
            }
        </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
            allMdx( sort: {order: DESC, fields: frontmatter___date}){

            
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                body
            }
        }
    }
    
  `
  
  export default ThetaXStartersPage
