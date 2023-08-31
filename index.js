const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

// acessar as informações do corpo da requisição
app.use(express.urlencoded({
    extended: true
}))

// transforma as informações em objetos do JS
app.use(express.json())

// utilizar arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})


app.get('/login', (req, res) => {
    res.sendFile(`${caminho}/login.html`)
})


app.post('/login/ok', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    if (username === 'user' && password === 'pass') {
        res.sendFile(`${caminho}/login-ok.html`)
    } else {
        res.sendFile(`${caminho}/login-ok-1.html`)
    }

    console.log(`
    Usuário: ${username}
    Senha: ${password}
    `)

});

app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.sendFile(`${caminho}/user.html`);
});


app.listen(5000)