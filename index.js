const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key');

//어플리케이션 x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended:true}));

//어플리케이션 json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))




app.get('/',(req,res) => res.send('Hello World!!!~~')) //글 입력 부분

app.post('/register',(req,res) => {
  //회원가입할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)

  user.save((err,useInfo) => {
    if(err) return res.json({ success:false,err})
    return res.status(200).json({
      success:true
    })
  })
})


app.listen(port,()=>console.log(`Example app listening on port ${port}!`))


