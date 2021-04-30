const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '/tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/reserve.html')));

app.get('/api/tables', (req, res) => res.json(reservation));
app.get('/api/waitlist', (req, res) => res.json(waitList));


const reservation = [
    {
        customerID: "123",
        customerName: "kemal",
        customerEmail: "kemal@asd",
        phoneNumber: "6132321213"
    }
]

const waitList = [
    {
        customerID: "2223",
        customerName: "tatyana",
        customerEmail: "kasdasdsasdl@asd",
        phoneNumber: "613232231123211231231321213"
    }
]



app.post('/api/tables', (req, res) => {
    const newReservation = req.body;

    if (reservation.length >= 5) {
        app.post('/api/waitlist', (req, res) => {
            console.log(newReservation);
          
            waitList.push(newReservation);
            res.json(newReservation);
        });
    } else {
        console.log(newReservation);
      
        reservation.push(newReservation);
        res.json(newReservation);
    }
});





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));