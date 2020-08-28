const path = require(`path`);
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query MyQuery {
      allDatoCmsArticle {
        nodes {
          id
          title
        }
      }
    }
  `);

  // Create blog post pages.
  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slug = slugify(post.title, { lower: true });
    console.log(slug, post.id);

    createPage({
      // Path for this page — required
      path: `articles/${slug}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};
