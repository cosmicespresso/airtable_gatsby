## Airtable - Gatsby boilerplate


### Install 
`yarn install` to install and `yarn develop` to run locally. Once you do that, you can use `http://localhost:8000/___graphql` to access the GraphQL IDE and run queries against the data pulled from the Airtable. 

It uses `gatsby-source-airtable` to work with the Airtable API [link](https://github.com/jbolda/gatsby-source-airtable).

### Airtable
This is how the Airtable used above looks like: <img src="screenshot.png">

### How to edit
The code for the landing page is in `src/inde.js`.

The code for the project page is in `src/templates/project.js`. 

Avoid editing `gatsby-node.js` and `gatsby-config.js` - they are the files that connect Airtable to Gatsby and operate the GraphQL queries.

### Styles
`styles/layout.css` contains the default Gatsby "reset" styles, and is overridden (if desirable) by `styles/addedStyles.css`, if necessary. <a href="https://www.gatsbyjs.org/docs/styling/">Here</a> is what Gatsby official docs say about styling.

This is a barebones boilerplate and can be developed in any way, but if you want to keep some consistency with the existing code, here is an example of an inline styled `<div></div>` element.
```
<div 
  key={index}
  style={{
    backgroundImage: 'url(' + image.url + ')',
    backgroundSize: '100%',
    backgroundPosition: 'top',
    width:'30vw', 
    height:'50vh', 
    margin: '2vh 0'
    }}>
</div>
```