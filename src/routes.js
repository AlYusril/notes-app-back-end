const{addNoteHandler, editNoteByIdHandler} = require('./handler');
const routes =[
    {
        method: 'POST',
        path:'/notes',
        handler: addNoteHandler,
        options: {
            cors : {
                origin:["*"],
            },
        },
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler:  editNoteByIdHandler,
    },
];
module.exports = routes;