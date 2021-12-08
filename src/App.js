import Rotas from "./rotas";
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import {GlobalStyle} from './Styles/global'
import {Provider} from 'react-redux'
import store from "./store";

function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle/>
          <Header/>
          <Rotas/>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
