import Cookies from 'js-cookie'
export const local = {
  set(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val))
  },
  get(key: string) {
    const json: any = window.localStorage.getItem(key)
    return JSON.parse(json)
  },
  remove(key: string) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  },
}
export const setSession = (val: string) => {
  Cookies.set('session_id', val)
}
