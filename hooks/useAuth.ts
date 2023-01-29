import Router from "next/router"

const login = (token: string, user: any) => {
  localStorage.setItem("token", token)
  localStorage.setItem("user", JSON.stringify(user))
}

const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  Router.push("/")
}

const getUser = () => {
  try {
    const value = window.localStorage.getItem("user")
    if (value) {
      return JSON.parse(value)
    } else {
      null
    }
  } catch (err) {
    return null
  }
}

const getToken = () => {
  try {
    return window.localStorage.getItem("token")
  } catch (err) {
    return null
  }
}

export const useAuth = {
  login,
  logout,
  getUser,
  getToken,
}
