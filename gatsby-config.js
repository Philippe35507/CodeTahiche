module.exports = {

    siteMetadata: {
        title: "CODE TAHICHE",
        author: "Powered by Gatsby, © 2020"
    },

    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`
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
        {
            resolve: "gatsby-plugin-use-dark-mode",
            options: {
               classNameDark: "dark-mode",
               classNameLight: "light-mode",
               storageKey: "darkMode",
               minify: true,
            },
          }
        
    ]
}