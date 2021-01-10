// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

const axios  = require("axios")

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const journal = addCollection('Journal')
    const project = addCollection('Project')

    // 文章列表
    const journalData = await axios.get('http://api.laihui.art/gridsome/journal/index.json')
    for (const item of journalData.data) {
      journal.addNode({
        id: item.id,
        title: item.title,
        author: item.author,
        date: item.date,
        desc: item.desc,
        content: item.content
      })
    }

    // project列表
    const projectData = await axios.get('http://api.laihui.art/gridsome/projects/index.json')
    for (const item of projectData.data) {
      project.addNode({
        title: item.title,
        date: item.date,
        image: item.image,
        categories: item.categories,
        project_fg_color: item.project_fg_color,
        content: item.content
      })
    }

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
