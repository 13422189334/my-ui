import Button from './index.vue'
import  type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

export default withInstall(Button)
