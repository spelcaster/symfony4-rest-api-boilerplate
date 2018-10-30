import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'

import routes from './routes'

export default function setupRouter() {
  const routeSettings = {
    defaultRoute: 'login'
  }

  const router = createRouter(routes, routeSettings)
  router.usePlugin(browserPlugin({
    useHash: true
  }))

  return router
}
