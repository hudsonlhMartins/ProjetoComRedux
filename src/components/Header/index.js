import { Link } from "react-router-dom";
import LogoImg from '../../assets/logo.svg'
import { Container, LINK } from "./style";
import {useSelector} from 'react-redux'

export default function Header (){

    const reserveSize = useSelector(state => state.reserve.length)

    return(
        <Container>
            
            <LINK to='/' >
                <img src={LogoImg} alt='logo Imagem' />
            </LINK>

            <LINK to='/reservas'>
                <div>
                    <strong>Minhas Reservas</strong>
                    <span>{reserveSize} Reservas</span>
                </div>
            </LINK>

        </Container>
    )
}