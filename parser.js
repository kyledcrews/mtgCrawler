const fs = require('fs')
const Xray = require('x-ray')
const x = Xray()
const Vision = require('@google-cloud/vision')

const vision = new Vision()

let mapping = {}


fs.readFile('./data/xln/M1.html', (err, data) => {
    if(err) throw err
    
    x(data.toString(), 'style')(function(err, data){
        var a = data.replace(/[\n\t\r]/g, '')
        console.log(data)
        console.log(a.split('.'))
        var b = a.split('.')
        var re = /(-)?\d+/g

        var url = 'http://sales.starcitygames.com/price_icons.' + b[4].slice(0, -3)

        // var request = {
        //     source: {
        //         filename: url
        //     }
        // }

        vision.textDetection(request)
        .then((results) => {
            const labels = results[0].fullTextAnnotation.text;
            console.log(labels)
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
        
        for(var i = 6; i < b.length; i++){
            // console.log(b[i], b[i].indexOf(' '))
            // console.log(b[i].substr(b[i].indexOf(' '), b[i].length).match(re))
        }
        
    })

    x(data.toString(), ['.deckdbbody_row .search_results_7'])(function(err, data){
        // console.log(data)
        var marker = [];
        for(var i in data){
            if(data[i] == 'NM/M') {
                // console.log(i)
                marker.push(i)
            }
        }
        fs.readFile('./data/xln/M1.html', (err, data) => {
            if(err) throw err

            x(data.toString(), ['.deckdbbody_row .search_results_9@html'])(function(err, data){
                
                for(var i in data){
                    if(marker.indexOf(i) != -1){
                        // console.log(data[i])
                        x(data[i], ['div@class'])(function(err, data){
                            // console.log(data)
                        })
                    }
                }    
            })
        })
        
        
    })
})