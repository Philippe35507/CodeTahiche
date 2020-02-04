

module.exports = {

    siteMetadata: {
        title: "CODE TAHICHE",
        author: "Powered by Gatsby, © 2020"
    },

    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",

        {
            resolve: 'gatsby-plugin-mdx',
            options:{
              extensions:[`.mdx`, `.md`]
            }
        },

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`
            }
        },

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/posts/`
            }
        },

        "gatsby-plugin-sharp",

        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [

                    "gatsby-remark-relative-images",

                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        
        
    ]
}