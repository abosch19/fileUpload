var express = require('express')
	app = express()
	folder_route = require('./routes/folder')
	home_route = require('./routes/home.js')

app.set('port', (process.env.PORT || 8080))

// views is directory for all template files
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public')) //Static files

//Routes
app.use('/folder', folder_route)
app.use('/', home_route)
app.use('*', function (req, res) {
	res.redirect('/')
})

app.listen(app.get('port'), function () {
	console.log('Server listening at port', app.get('port'))
})
