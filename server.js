const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));





// app.post('/api/characters', (req, res) => {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     const newCharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newCharacter);
  
//     characters.push(newCharacter);
//     res.json(newCharacter);
//   });



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));