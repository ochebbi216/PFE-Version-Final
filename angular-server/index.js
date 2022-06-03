
const express = require ("express");
const path = require ("path");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const passport = require ("passport");
const mongoose = require ("mongoose");
const config = require("./config/database");


mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', ()=>{
    console.log("connected to database ^_^ " );
});

mongoose.connection.on('error', (err)=>{
    console.log("Database not connected :'( " + err);
});

const app = express();

const user = require("./routes/user");
const admin = require("./routes/admin");
const capteur = require("./routes/capteur");
const actionneur = require("./routes/actionneur");
const passerelle = require("./routes/passerelle");
const reclamation = require("./routes/reclamation");


const port = config.PORT;
const api = config.API_URL
app.use(cors());
// app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

require("./config/passport")(passport);
app.use(`${api}/user`, user);
app.use(`${api}/admin`, admin);
app.use(`${api}/reclamation`, reclamation);
app.use(`${api}/capteur`, capteur);
app.use(`${api}/actionneur`, actionneur);
app.use(`${api}/passerelle`, passerelle);

// app.get("/", (req, res)=>{
//     res.send("Invalid endpoint!");
// });

app.listen(port, ()=>{
    console.log("The server started on port " + port);
});