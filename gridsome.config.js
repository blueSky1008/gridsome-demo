// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'blueSky',
  plugins: [],
  templates: {
    Journal: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue'
      }
    ],
    Project: [
      {
        path: '/projects/:id',
        component: './src/templates/Projects.vue'
      }
    ]
  }
}
