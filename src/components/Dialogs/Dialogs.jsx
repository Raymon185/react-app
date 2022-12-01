import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Roman</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Dimych</div>
                <div className={s.dialog}>Jhon</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your first name</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};
export default Dialogs;