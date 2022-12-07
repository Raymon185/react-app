import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Roman' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Maria' },
        { id: 4, name: 'Jhon' },
        { id: 5, name: 'Petrucho' },
    ];

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'What is your firs name?' },
        { id: 4, message: 'Hello World!' },
        { id: 5, message: 'How about a date on Sunday?' },
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
export default Dialogs;