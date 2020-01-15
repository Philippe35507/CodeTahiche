import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const IndexPage = () => {
    return (
        <div>
            <Layout>
            <h1>Bonjour</h1>
            <h2>I am Philippe</h2>
            <p>Need a developer?<Link to="/contact">Contact me!</Link></p>
            </Layout>
         </div>
    )
}

export default IndexPage