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

