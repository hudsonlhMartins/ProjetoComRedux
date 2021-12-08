import styled from "styled-components";

export const Container = styled.div`
    
`;

export const List = styled.ul`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

   

    li{
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 13px;

        img{
            max-width: 280px;
            max-height: 280px;
            border-radius: 4px;
        }

        strong{
            font-size:  1rem;
            line-height: 20px;
            color: #191919 ;
            margin-top: 10px;
         }

         button{
             margin-top: 10px;
             display: flex;
             align-items: center;
             justify-content: center;
             color: #fff;
             background: #191919;
             gap: 10px;
             border: 0;
             border-radius: 4px;
             padding: 5px 0;
         }


    }
`;