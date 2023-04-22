const app = require('./app.js');
const { conn } = require('./DB_connection.js');
const Port = 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
app.listen(Port, () => {
        console.log(`listening at ${Port}`); // eslint-disable-line no-console
    });
})
.catch(err => console.log(err)); // eslint-disable-line no-console






