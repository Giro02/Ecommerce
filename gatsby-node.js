const path = require('path');
const categories = require('./src/JSONs/categories.json');


exports.createPages = async ({actions}) => {
    const {createPage } = actions;

    categories.forEach(item => {
        createPage({
            path: `categorias/${item.slug}`,
            component: path.resolve("./src/components/Templates/categoryTemplate.tsx"),
            context: {
                category: item.category
            }
        })
    })
}