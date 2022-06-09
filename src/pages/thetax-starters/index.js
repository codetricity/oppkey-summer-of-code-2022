import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'

const ThetaXStartersPage = ({data}) => {
    return (
        <Layout pageTitle="THETA X Getting Started Apps">
        <p>Getting started quickly with the RICOH THETA API</p>
        <ul>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2> 
                            <Link to={`/thetax-starters/${node.slug}`}>
                            {node.frontmatter.title}
                            </Link>
                            </h2>
                            

                        <p>Created: {node.frontmatter.date}</p>
       
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
                slug
            }
        }
    }
    
  `
  
  export default ThetaXStartersPage
