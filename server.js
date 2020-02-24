const express = require('express');
const app = express();
const port = 3000;

const skillsRouter = require('./routes/skills');
const indexRouter = require('./routes/index');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

app.listen(port, function() {
    console.log(`express is listening on port ${port}`);
})

module.exports = app;