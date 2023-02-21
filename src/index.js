const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
var methodOverride = require('method-override')
const db = require('./config/db');
const router = require('./routes');


// Connect to DB
db.connect();

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// MidleWare để xử lý dữ liệu từ form submit lên
app.use(express.urlencoded())

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Khi sử dụng thư viện js để submit
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\view'))

// Routes init
router(app)

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})