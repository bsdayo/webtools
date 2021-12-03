import toolsData from '../data/tools.json'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

for (let i = 0; i < toolsData.length; i++) {
  routes[0].children.push({
    path: toolsData[i].name,
    component: () => import(`pages/${toolsData[i].name}.vue`)
  })
}

export default routes
