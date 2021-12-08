import { useEffect, useState } from 'react';
import api from '../../services/api'
import { Container, List } from './styles';
import {MdFlightTakeoff} from 'react-icons/md'
import {addReserve} from '../../store/modules/reservas/actions'
import {useDispatch} from 'react-redux'

function Home() {
  const dispatch = useDispatch()
  const [trips, setTrips] = useState([])

  useEffect(()=>{

    async function loadApi(){

      const res = await api.get('trips')

      console.log(res)
      setTrips(res.data)

    }
    loadApi()

  },[])


  const handleAdd = (item)=>{
    dispatch(addReserve(item))
  }



    return (
      <Container>

          <List>
            {trips.map(item =>{

              return <li key={item.id}>
                <img src={item.image} alt={item.title}/>
                <strong>{item.title}</strong>
                <span> Status: {item.status ? 'disponivel' : 'ocultpado'}</span>

                <button type='button' onClick={()=> handleAdd(item)}>
                  <div>{<MdFlightTakeoff color='#fff' size={16} />}</div>
                  <span>Solicitar Reservar</span>
                </button>
              </li>

            })}
          </List>
      </Container>
    );
  }
  
  export default Home;
  