export default [
  {
    path: '/',
    children: [
      // Core
      { path: 'home', component: () => import('../views/Home.vue') },

      // Tools
      { path: 'arcpurchase', component: () => import('../views/Home.vue') },
      { path: 'randjp50', component: () => import('../views/Home.vue') },
      { path: 'wordcount', component: () => import('../views/Home.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]