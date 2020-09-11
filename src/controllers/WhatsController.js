const axios = require('axios')
const LogWhats = require('../models/LogWhats')

module.exports = {
    async sendWhats(req, res) {

        try {

            const response = await axios({
                url: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
                method: 'POST',
                data: req.body,
                headers: {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "WtTNQoIVM8WhTsrmodT63It0J7pnwvl-0ywR"
                }
            })

            console.log(response.data)
            await LogWhats.create({
                Objeto: response.data
            })
            return res.status(201).json({ success: 'Mensagem enviada com sucesso!' })

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: 'Mensagem não foi enviada!' })
        }
    }
}


