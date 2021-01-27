const express = require('express');
const app = express()

app.listen(3000,() => {
    console.log('Hey Listening on the Port 3000 :)')
})

app.get('/' () => {
    console.log('Here is your Request :)')
})