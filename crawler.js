const request = require('request')
const fs = require('fs')

const rarity = ['M', 'R', 'U', 'C']

const catTable = {
    'xln': 5366
}

request('http://sales.starcitygames.com/category.php?cat=5366&rarity=M', (err, res) => {
    
    if (err) throw err

    fs.writeFile('./data/xln/M1.html', res.body, (err) => {
        if (err) throw err

    })
    
})

