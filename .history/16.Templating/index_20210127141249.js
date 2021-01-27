const express = require('express');
const app = express()

app.set('view-engine','ejs')

app.get('/' () => {
    console.log('Here is your Request :)')
})

app.listen(3000,() => {
    console.log('Hey Listening on the Port 3000 :)')
})

