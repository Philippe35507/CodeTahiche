import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
     return (
     <Layout>
            <Head title="Contact" />
            <p>Need a developer?   <Link to="/contact">Contact me!</Link></p>
     </Layout>
    ) 
}

export default ContactPage

/*
<p>Contact page</p>
          
<p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">My tweeter here</a></p>
            
 */