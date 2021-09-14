import React from 'react';
import './Item.css';

const DELETE_DEAL = 'DELETE-DEAL',
      IMPORTANT_DEAL = 'IMPORTANT-DEAL',
      DONE_DEAL = 'DONE-DEAL';

const delereDealActionCreator = (label) => ({type: DELETE_DEAL, label: label})
const importantDealActionCreator = (label) => ({type: IMPORTANT_DEAL, label: label})
const doneDealActionCreator = (label) => ({type: DONE_DEAL, label: label})

const Item = (props) => {
    let {dispatch, label, important, done, id} = props;
    let onImportant = () => {
        dispatch(importantDealActionCreator(label));
    }

    let onDone = () => {
        dispatch(doneDealActionCreator(label));
    }

    let deleteDeal = () => {
        dispatch(delereDealActionCreator(label));
    }

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
        classNames += ' important';
    }
    if (done) {
        classNames += ' done';
    }    

    return(
        <div className={classNames}>
            <span className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-done" onClick={onDone}>
                    {/* <input className="checkbox" type="checkbox"/> */}
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn-star btn-sm" onClick={onImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" onClick={deleteDeal} className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default Item;