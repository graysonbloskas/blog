const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

global.__basedir = __dirname;

const app = express();
const PORT = process.env.PORT || 3001;

const sesh = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
      }),  

}

app.use(session(sesh));

const handlebars = exphbs.create (
    {
        helpers, 
        partialsDir: path.join(__dirname, "views/partials")
    }
);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ forse: false })
.then(() => {
    app.listen(PORT, () => 
    console.log('Now Listening'));
});