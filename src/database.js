const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bunsho-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));