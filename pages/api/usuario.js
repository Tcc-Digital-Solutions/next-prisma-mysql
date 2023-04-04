import { prisma } from '../../prisma/prisma'

export default async function handle(req, res) {
    const create = await prisma.login.create({
        data:{
            user: 'Usuario01',
            password: '1234',
        }
    })
    res.json(create)
}