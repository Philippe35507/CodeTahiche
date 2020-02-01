import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
       <Head title="About" />
       <p>Need a developer?   <Link to="/contact">Contact me!</Link></p>
        </Layout>
    )
}

export default AboutPage

/*
<p>About page</p>
            <p><Link to="/contact">See my contact page</Link></p>
            */