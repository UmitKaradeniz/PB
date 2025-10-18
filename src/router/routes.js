
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Todo.vue') },
      { path: '/sepetim', component: () => import('src/pages/Help.vue') },
      { path: '/Login', component: () => import('src/pages/Login.vue') },
      { path: '/Filtre', component: () => import('src/pages/Filtre.vue') },
      { path: '/Urunler', component: () => import('src/pages/Urunler.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
