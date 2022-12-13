let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'My first name is Roman', likesCount: 12 },
            { id: 2, message: 'My last name is Volkov', likesCount: 2 },
            { id: 3, message: 'I am work in MMZ', likesCount: 123 },
            { id: 4, message: 'My cat Zahar is so fun', likesCount: 334 },
        ],
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Roman' },
            { id: 2, name: 'Dimych' },
            { id: 3, name: 'Maria' },
            { id: 4, name: 'Jhon' },
            { id: 5, name: 'Petrucho' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'What is your firs name?' },
            { id: 4, message: 'Hello World!' },
            { id: 5, message: 'How about a date on Sunday?' },
        ]
    }
};

export default state;