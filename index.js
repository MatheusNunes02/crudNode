const express = require('express');
const server = express();
const geeks = [];

server.use(express.json());

server.get('/geeks',(req,res)=>{
    return res.json(geeks)
})

server.get('/geeks/:index', (req, res) => {
    return res.json(req.user);
})

server.post('/geeks', (req, res) =>{
    const { name } = req.body;
    geeks.push(name);

    return res.json(geeks);
})

server.put('/geeks/:index', (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    const { name } = req.body;
    
    geeks[index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
    
    return res.json(geeks);
}); // retorna novamente os geeks atualizados após o update



server.delete('/geeks/:index', (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    
    geeks.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
    
    return res.send();
}); // retorna os dados após exclusão



server.listen(3000);