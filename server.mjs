import express from 'express'
import path from 'path'
const app = express()
const port =process.env.PORT || 5001

app.get('/weather', (req, res) => {
    console.log(`${req.ip} is asking for weather`)
  // res.send('here is some water for you')
  res.send({
    city:"karachi",
   temp:26,
   feels_like:23,
    humidity:72,
    mac_temp_c:31,
    min_temp_c:19,
    visibility:3200,
    wind:30,
    pressure:20,
  })
})

const __dirname = path.resolve();

console.log("_dirname:",__dirname)

console.log("_dirname:",path.join(__dirname,"webindex.html"))
app.use('/',express.static(path.join(__dirname,"index.html")));
app.use('/',express.static(path.join(__dirname,"web")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})