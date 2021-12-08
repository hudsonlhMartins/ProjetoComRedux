import styled from "styled-components";

export const Container = styled.div`
    h1{
        color: #fff;
    }

    div{
        padding: 20px;
        margin-top: 10px;
        background: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            height: 100px;
        }

        button{
            border: 0;
            background: #fff;
        }
        &.div_buttons{
            input{
                width: 35px;
                text-align: center;
                outline: none;
                border-radius: 0.25rem;
                border: 1px solid #222;
                padding: 2px;
            }
        }
    }

`;

export const Footer = styled.footer`

    button{
        border: 0;
        display: flex;
        padding: 10px;
        text-transform: uppercase;
        border-radius: 4px;
        margin-top: 20px;
        font-weight: bold;
    }

`;