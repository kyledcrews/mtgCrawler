const fs = require('fs')
const Xray = require('x-ray')
const x = Xray()

fs.readFile('./data/xln/M1.html', (err, data) => {
    if(err) throw err

    x(data.toString(), 'style')(function(err, data){
        console.log(data)
    })
})