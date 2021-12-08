import {Container, Footer} from './styles'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import {removeReserve, updateAmount} from '../../store/modules/reservas/actions'
import {useSelector, useDispatch} from 'react-redux'

function Reservas() {
  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch()

  const handleRemove = (id) =>{
    dispatch(removeReserve(id))
  }


  const handleDrecrement = (item) =>{
    dispatch(updateAmount(item.id, item.amount-1))
  }

  const handleIncrement = (item) =>{
    dispatch(updateAmount(item.id, item.amount+1))
  }



    return (
      <Container >
          <h1>Vc solicitou 1 reserva</h1>

          {reserves.map(item =>(
            <div key={item.id}>
              <img src={item.image} />
              <strong>{item.title}</strong>

              <div className='div_buttons' >
                <button type='button' onClick={()=>handleDrecrement(item)}>
                  <MdRemoveCircle size={25} color='121212' />
                </button>

                <input type='text' readOnly value={item.amount}/>

                <button type='button' onClick={()=>handleIncrement(item)}>
                  <MdAddCircle size={25} color='121212' />
                </button>

              </div>

              <button type='button' onClick={()=>  handleRemove(item.id)}>

                <MdDelete color='#191919' size={20}/>
              </button>
          </div>
          ))}

          

        <Footer>
          <button type='button'>Solicitar reservas</button>
        </Footer>

      </Container>
    );
  }
  
  export default Reservas
;
  