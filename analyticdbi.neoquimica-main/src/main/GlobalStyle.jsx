import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --color-sidebar: #002675;
        --color-sidebar-hover: #07548C;
        --color-background: #f8f8f8;
        --color-background-card: #ffffff;
        --color-background-title-bar: #f8f8f8;
        --color-background-footer: #f8f8f8;
        --color-background-input: #f3f5fe;
        --color-font: #230b59;
        --color-icons: #7deffd;
        --color-white: #FFFFFF;
        --color-grey: #d3cede;
        --color-blue: #002675;
        --color-green: #82C20A;
        --color-orange: #C28700;
        --color-red: #F55859;
        --color-yellow: #f4d464;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
		padding: 0;
        background-color: var(--color-background);
        color: var(--color-font);
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`
export default GlobalStyle