var express = require('express')
	app = express()

app.set('view engine', 'ejs')
app.set('port', (process.env.PORT || 8080))

app.use('static/', express.static(__dirname + '/public/'))

app.get('/', function (req, res) {
	res.send('NODE JS')
})

app.listen(app.get('port'), function () {
	console.log('Server listening at port', app.get('port'))
})
