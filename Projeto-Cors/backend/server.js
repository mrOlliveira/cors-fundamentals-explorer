const express = require('express');
const cors = require('cors');
const servidor = express();
const PORTA = 8080;

servidor.use(cors());

servidor.get('/dados/info', (req, res) => {
    console.log(`[LOG] Requisição recebida na porta ${PORTA}`);
    
    res.json({
        status: "200 OK",
        conteudo: "Conexão autorizada! O sistema permitiu o acesso via CORS."
    });
});

servidor.listen(PORTA, () => {
    console.log(`>>> Servidor Ativo: http://localhost:${PORTA}`);
    console.log(`>>> Aguardando conexões...`);
});