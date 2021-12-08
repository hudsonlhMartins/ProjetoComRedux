import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #242424;
    }

    #root{
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button{
        cursor: pointer;
    }


`;