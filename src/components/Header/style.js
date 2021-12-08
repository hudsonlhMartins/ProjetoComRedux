import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 10px 10px;

    img{
        max-width: 110px;
        max-height: 110px;
    }
`;

export const LINK = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;

    div{
        text-align: right;
        margin-right: 10px;

        strong{
            display:  block;
            font-size: 1rem;
        }
        span{
            color: #ddd;
            font-size: 0.8rem;
        }
    }
`;