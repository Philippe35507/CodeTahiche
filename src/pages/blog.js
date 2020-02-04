import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss" 
import Head from "../components/head"

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title 
                            date
                        }
                        fields {
                            slug
                        }                
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h4 className={blogStyles.titrePost}>{edge.node.frontmatter.title}</h4>
                                <p className={blogStyles.datePost}>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                  })}
            </ol>
        </Layout>
    )
}

export default BlogPage

/*
import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Layout } from "../components/Layout"

export default ({data}) => {
  
  return (
    <>
        <Layout>
            {data.allMdx.nodes.map(({excerpt, frontmatter}) =>
                <>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </>
            )}
      </Layout>
    </>
  )
}


export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date
        }
      }
    }
  }
`
*/
