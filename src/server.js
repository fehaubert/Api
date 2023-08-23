//importar o pacote express
const express = require('express');

//instanciar o express na variável app
const app = express();

//definir a porta do servidor
const PORT = 3004

app.get('/api/teste', (request, response) => {
    response.send('Faz o L');
})

//testar o servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));