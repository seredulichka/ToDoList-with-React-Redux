import { Header } from "./Components/Header/Header";
import { Input } from "./Components/Input/Input";
import { ItemsList } from "./Components/ItemsList/ItemsList";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" render ={ ()=> <Header/> } />
      <Route path="/items" render ={ ()=> <ItemsList state={props.state.deals} dispatch={props.dispatch} newMessageText={props.state.deals.newMessageText}/> } />
      <Route path="/items" render ={ ()=> <Input state={props.state.deals} dispatch={props.dispatch} newMessageText={props.state.deals.newMessageText}/> } />
    </BrowserRouter>
    
  );
}

export default App;
