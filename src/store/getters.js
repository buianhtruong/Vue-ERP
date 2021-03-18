
const getters = {

  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  printers: state => state.app.printers,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  Id: state => state.user.Id,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  phone: state => state.user.phone,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  defulate_redirect: state => state.permission.redirect,
  routes: state => state.permission.addRoutes,
  errorLogs: state => state.errorLog.logs,
  settings: state => state.settings,
  CompanyInfo: state => state.CompanyInfo.CompanyInfo,
  Oprations: state => state.CompanyInfo.Oprations,
  Devices: state => state.Devices.AllDevices,
  ZtkDoor: state => state.Devices.ZtkDoor,

}
export default getters
