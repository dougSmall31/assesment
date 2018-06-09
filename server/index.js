const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

let animalArr = [
    {
      name: 'Armadillo',
      id: '1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nine-banded_Armadillo.jpg/1200px-Nine-banded_Armadillo.jpg'
    },
    {
      name: 'Tiger',
      id: '2',
      imageUrl: 'http://kids.sandiegozoo.org/sites/default/files/2017-06/animal-hero-tiger_0.jpg'
    }
  ]

  app.get('/api/animals', (req, res) => {
      res.send(animalArr)
      console.log('get request')   
  })

  app.post('/api/animals', (req, res) => {
      animalArr.push(req.body)
      res.send(animalArr)
      console.log(req.body)
  })

//   app.delete('/api/animals', (req, res) => {
//       animalArr.pop()
//       res.send(animalArr)
//   })

  app.listen(4000, () => {
      console.log('listening on port 4000')
  })