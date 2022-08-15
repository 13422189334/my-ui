import {App, Plugin} from "vue";

export const testFun = (a: number, b: number) => {
  return a + b;
};


type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}
