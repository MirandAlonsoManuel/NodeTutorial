const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageControler] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
    
        store.add(fullMessage);
        resolve(fullMessage);
    })
    
}

function getMessages() {
    return new Promise((resolve, reset) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages,
};