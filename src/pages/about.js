import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <p>About page</p>
            <p><Link to="/contact">See my contact page</Link></p>
        </Layout>
    )
}

export default AboutPage