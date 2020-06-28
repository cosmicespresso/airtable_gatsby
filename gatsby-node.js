const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(
      'src/templates/project.js'
    );
    resolve(
      graphql(
        `
          {
            allAirtable {
              edges {
                node {
              		recordId
                  data {
                  	slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.error) {
          reject(result.error);
        }
        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: `${edge.node.data.slug}`,
            component: path.resolve(`./src/templates/project.js`),
            context: {
              recordId: edge.node.recordId
            }
          });
        });
      })
    );
  });
};