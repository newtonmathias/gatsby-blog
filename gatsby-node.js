const { slugify } = require('./src/utility/utilityFunction')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = post.resolve('.src/templates/single-post')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                  node{
                    id
                    frontmatter{
                      author
                    }
                    fields{
                      slug
                    }
                  }
                }
              }
    }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: singlePostTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}