const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/save-user', (req, res) => {
    const { login, password } = req.body;
    let users = [];
    let path = 'data/users.json';

    fs.readFile(path, 'utf8', (err, data) => {
        if(err)
        {
            console.error('Erro ao ler: ', err)
            return;
        }

        try {
            let jsonData = JSON.parse(data)
            
            if(Array.isArray(jsonData.users))
            {
                users = jsonData.users;
            } else if (jsonData.user)
            {
                users.push(jsonData.user)
            }
            
            users.push({ login, password })
            fs.writeFile(path, JSON.stringify({ users: users }, null, 4), (err) => {
                if(err)
                {
                    return res.status(500).json({ message: 'Erro', erro: err })
                } else {
                    return res.status(201).json({ message: 'Usuário inserido com sucesso!'})
                }
            })
            
        } catch (error) {
            console.error('Erro', error)
        }
    })
})

app.listen(3000, () => {
    console.log(`Rodando em http://localhost:${port}`)
})