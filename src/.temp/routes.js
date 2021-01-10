const c1 = () => import(/* webpackChunkName: "page--src-templates-projects-vue" */ "D:\\代码\\lagou-education\\practice\\13-gridsome-demo\\src\\templates\\Projects.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-journal-vue" */ "D:\\代码\\lagou-education\\practice\\13-gridsome-demo\\src\\templates\\Journal.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-journal-vue" */ "D:\\代码\\lagou-education\\practice\\13-gridsome-demo\\src\\pages\\Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\代码\\lagou-education\\practice\\13-gridsome-demo\\src\\pages\\Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\代码\\lagou-education\\practice\\13-gridsome-demo\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\代码\\lagou-education\\practice\\13-gridsome-demo\\src\\pages\\Index.vue")

export default [
  {
    path: "/projects/:id/",
    component: c1
  },
  {
    path: "/journal/:id/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
