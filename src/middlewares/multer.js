const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join('public/images/users'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' + file.originalname);
  }
})

module.exports = multer({ 
    storage,

    fileFilter: (req, file, cb) => {
		
      const aceptedExtensions = ['.jpg', '.jpeg', '.png'];
      const extension = path.extname(file.originalname)


      if(!aceptedExtensions.includes(extension)){
          req.file = file;
      }
      cb(null, aceptedExtensions.includes(extension));
    }

})