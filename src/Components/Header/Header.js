import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <div className={s.headerText}>
            <div>
                Hello! It's my to do list
            </div>
            <div>
                Tap here and you'll see all deals
            </div>
            <NavLink to="/items">
                See all items
            </NavLink>
        </div>
    )
}