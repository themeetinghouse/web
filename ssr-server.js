const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const fs = require('fs');

readJson = (path, cb) => {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err)
      cb(err)
    else
      cb(null, JSON.parse(data))
  })
}
siteCheck = (req, res) => {
  readJson("./urls.json",(err, urls)=>{
    if (urls.sites.includes(req.params.field1)){
      req.url = "/site?site="+req.params.field1;
      return handle(req, res)
    }
    else if (urls.blogs.includes(req.params.field1)){
      req.url = "/blog?blog="+req.params.field1;
      return handle(req, res)
    }
    else if (urls.videos.includes(req.params.field1)){
      req.url = "/video?video="+req.params.field1;
      return handle(req, res)
    }
    else if (urls.regions.includes(req.params.field1)){
      req.url = "/region?region="+req.params.field1;
      return handle(req, res)
    }
    else 
      return handle(req, res)
    
  }
  )
}

app.prepare()
.then(() => {
  const server = express()
  
    server.get('/:field1', siteCheck)
      
    server.get('*', (req, res) => {
      return handle(req, res)
    })
      
    server.listen(8081, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:8081')
    })
  })

.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})