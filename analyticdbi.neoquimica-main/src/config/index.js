const {
    REACT_APP_SECRET,
    REACT_APP_URL_API,
    REACT_APP_CAPTCHA_KEY
} = process.env

const config = {
    envSecret: REACT_APP_SECRET,
    envApi: REACT_APP_URL_API,
    captchaKey: REACT_APP_CAPTCHA_KEY,
    tokenKey: "@admin-Analyticdbi-Token"
}

export default config