const multer = require('multer');
const path = require('path');

module.exports = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname))
    },
    
  })
  fileFilter: (req, file, cb) => {
        const extensions = ['.jpg', '.jpeg', '.png'];
        const ok = extensions.includes(path.extname(file.originalname));

        if(!ok){
            req.files = [...req.files, file];
        }

        cb(null, ok);
    }