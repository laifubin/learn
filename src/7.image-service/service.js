const express = require('express')
const multer = require('multer')
// 设置运行跨域
const cors = require('cors')

const app = express()
app.use(cors())

const fileObj = {}
// 暴露静态资源
app.use('/', express.static('public'))
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) { // 文件存储的地方
      cb(null, file.mimetype.startsWith('image') ? './public/images' : './public/files')
    },
    filename: function (req, file, cb) { // 新的文件名
      // file.originalname上传文件的原始文件名
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')// 中文乱码处理
      const fileName = (new Date().getTime()) + '-' + file.originalname
      fileObj[file.originalname] = (file.mimetype.startsWith('image') ? 'images/' : 'files/') + fileName
      cb(null, fileName)
    }
  })
})

// 单个文件上传
// upload.single()中的名字要与前端formdata的字段名一致！ formdata.append('img',imgfile);
app.post('/upload/single', upload.single('file'), (req, res) => {
  const originalName = req.file.originalname
  const name = fileObj[originalName]
  delete fileObj[originalName]
  res.json({
    code: '1',
    type: 'single',
    originalName,
    url: `http://localhost:6767/${name}`
  })
})

const server = app.listen(6767, function () {
  // const host = server.address().address
  const port = server.address().port

  console.log(`Example app listening at http://localhost:${port}`)
})
