import { loadingFadeOut } from 'virtual:app-loading'

import { createRouter, createWebHashHistory } from 'vue-router'
import setupGuards from './guards'
// 路由相关数据
import { constantRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  // NOTE 文件路径 生成路由
  // routes: useSettingsStore(pinia).settings.app.routeBaseOn === 'filesystem' ? constantRoutesByFilesystem : constantRoutes,
  routes: constantRoutes,
})

setupGuards(router)

router.isReady().then(() => {
  loadingFadeOut()
})

export default router
