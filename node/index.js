const express = require('express')
const app = express()
const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));

const PORT = parseInt(process.env.watch) || 8080;

app.get('/datos', (req, res) => {
    console.log(`Port: ${PORT} FECHA Y HORA: ${new Date()}`);
    res.send(`Servidor express <span style="color:red">(Ngnex)</span> en PORT ${PORT} --> <b>PID: ${process.pid}</b> -Fecha ${new Date().toLocaleDateString()}`)
})

app.listen(PORT, () => {
    console.log(`Server is Listening on port ${PORT} - piPID WORKER ${process.pid}`)
})