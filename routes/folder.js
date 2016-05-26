var express = require('express')
	router = express.Router()
	multer = require('multer');
	storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, '/folders')
		},
		filename: function (req, file, cb) {
			cb(null, file.originalname)
		}
	})
	upload = multer({ storage: storage })

	router.get('/', function (req, res) {
		res.send('Folder page')
	})

	router.post('/:folder', upload.array('files', 9), function (req, res) {
		res.write('Files uploaded:')
		for(file in req.files){
			res.write(file)
		}
		res.end()
	})

module.exports = router
