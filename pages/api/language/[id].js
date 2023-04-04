import { prisma } from '../../../prisma/prisma'

export default async function handler(req, res){
    const { id } = req.query
    const detalhe = await prisma.languages.findUnique({
        where: { idLanguages: parseInt(id)}
    })
    res.json(detalhe)
}