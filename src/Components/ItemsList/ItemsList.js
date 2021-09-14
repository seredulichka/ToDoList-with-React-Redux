import Item from "../Item/Item";
import s from './ItemList.module.css';
import { NavLink } from 'react-router-dom';

export const ItemsList = (props) => {


    const elements = props.state.deals.map((item) => {
        return (
            <li key = {item.id} className='list-group-item'>
                <Item dispatch = {props.dispatch} 
                      label = {item.label}
                      important = {item.important}
                      done = {item.done}
                      id = {item.id}/>
            </li>
        )
    
    })

    return (
        <ul className={s.container}>
            <div className={s.label}>
                This is your all to do list:
            </div>
            <NavLink className={s.link} to="/">
                Back to header
            </NavLink>
            {elements}
        </ul>
    )
   
}
