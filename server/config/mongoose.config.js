const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/piratesdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection with database"))
    .catch(err => console.log("Something went wrong while connecting to the database", err));