import s from './Input.module.css';
const ADD_DEAL = 'ADD-DEAL',
      UPDATE_NEW_DEAL_TEXT = 'UPDATE-NEW-DEAL-TEXT';


const addDealActionCreator = () => ({type: ADD_DEAL})
  
const updateNewDealTextActionCreator = (text) => ({type: UPDATE_NEW_DEAL_TEXT, newText: text})

export const Input = (props) => {
    let addDeal = () => {
        props.dispatch(addDealActionCreator());
        props.dispatch(updateNewDealTextActionCreator(''));
    }
    
    let onDealChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewDealTextActionCreator(text));
    }
    return(
        <div className={s.container}>
            <div className={s.input}>
                <input placeholder = "Write new task here" value = {props.newMessageText} onChange={onDealChange}/>
                {/* <textarea value = {props.newMessageText} onChange={onDealChange}>
                </textarea> */}
            </div>
           
            <button onClick={addDeal} className={s.button}>
                Add
            </button>
        </div>
    )
}