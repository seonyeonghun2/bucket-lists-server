const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

// in-memory : 메모리(=휘발성)에 저장할 버킷리스트 목록
let idx = 3;
let buckets=[
  {
    id: 1,
    text: "에펠탑에서 사진찍기"
  },
  {
    id: 2,
    text: "설악산 단풍구경하기"
  },
]; //배열(값을 여러개 저장)

app.use(cors()); // CORS 처리 패키지
app.use(express.json()); // JSON parsing
app.use(express.urlencoded({extended: false}));

app.get('/all', (req, res) => { // 버킷리스트를 수신
  res.json(buckets);
})
app.post('/', (req, res) => { // 버킷리스트 항목을 송신
    console.log('전송받은 데이터 : ', req.body.text); // console.log() : 출력하는 명령, req.body : 폼을통해서 보내온 데이터
    // buckets.push({
    //   id: idx++,
    //   text: req.body.text
    // });
    res.json(buckets);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})