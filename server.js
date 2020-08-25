const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend','static')))

app.get('/*', (req,res)=>{

    res.sendFile(path.resolve(__dirname,'frontend','index.html'));
});

let port = process.env.PORT || 5060;
app.listen(port, 
    () => {
        console.log(`Blast off on PORT # ${port}!  🚀🚀🚀`)
    });