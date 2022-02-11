import cookie from 'js-cookie'

export const setCookie=(key,value,expiry=1) => {
    return cookie.set(key,value,{
        expires: expiry
    })
}

export const getCookie=(key) => {
    return cookie.get(key)
}

export const removeCookie=(key) => {
    return cookie.remove(key)
}

export const setLocalStorage=(key,value) => {
    return localStorage.setItem(key,JSON.stringify(value))
}

export const getLocalStorage=(key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const removeLocalStorage=(key) => {
    return localStorage.removeItem(key)
}

export const authenticate=(response,next= f => f) => {
    console.log('autheticate response middleware',response?.userDetails)
    setCookie('setUser',response?.token)
    setLocalStorage('user',response?.userDetails)
    next()
}

export const signOut=() => {
    removeCookie('setUser')
    removeLocalStorage('user')
}