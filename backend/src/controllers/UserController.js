const User = require('../models/User')

module.exports = {
    async register(req, res) {
        const { email, password, photo, name } = req.body

        try {

            const user = await User.findOne({email})

            if (user) return res.status(400).json({ warning: 'Email já cadastrado, tente novamente!' })

            await User.create({
                email,
                password,
                name,
                photo
            })

            return res.status(201).json({ success: 'Usuário registrado com sucesso!' })

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: 'Não foi possível concluir o registro, tente novamente!' })
        }

    }
}