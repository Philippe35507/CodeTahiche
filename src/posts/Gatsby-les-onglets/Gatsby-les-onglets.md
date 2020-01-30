---
title: "Gatsby: configuration des onglets de navigation"
date: "29/01/2020"
---
<br></br>

Bien configurer les onglets permet d'améliorer considérablement votre référencement.

Marche à suivre:


Installer deux plugins gatsby.

Configurer le fichier gatsby-config.sys.

Création du composant head.js.

Importer votre composant dans chacune des pages de votre projet.

Ajouter l'élément Head.

<br></br>

1 Installer deux plugins gatsby:
<br></br>
<br></br>
 Il faut installer le plugin gatsby-react-helmet ainsi que le plugin react-helmet par la commande suivante:
<br></br>
 
![npm i gatsby-react-helmet react-helmet](npm-i-helmet.png)


<br></br>

2 Configurer le fichier gatsby-config.sys:
<br></br>
<br></br>
Ajouter la ligne "gatsby-plugin-react-helmet" en haut de votre liste de plugins (sans oublier la virgule à la fin de la ligne!). 
<br></br>

![maj-gatsbyconfig-plugin-helmet](maj-gatsbyconfig-plugin-helmet.png)


<br></br>
<br></br>
3 Création du composant head.js:
<br></br>

![component-head](component-head.png)

<br></br>
<br></br>

4 Importer votre composant dans chacune des pages de votre projet:

<br></br>

import:

![import-head](import-head.png)



<br></br>
<br></br>
5 Ajouter l'élément <Head /> pour chaque page et pour votre template le cas échéant:
<br></br>


Pour les pages: ajouter l'élément <Head title=" <nom de votre page /> juste en desous de l'élément <Layout>
<br></br>

![head-title](head-title.png)



Pour les templates: toujours sous l'élément <Layout>, ajouter <Head title={props.data.markdownRemark.frontmatter.title} />
De cette façon, l'onglet de chaque post ouvert par l'utilisateur affichera automatiquement le titre du post en question.

