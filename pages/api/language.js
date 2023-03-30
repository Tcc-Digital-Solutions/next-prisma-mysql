import { prisma } from '../../prisma/prisma'
export default async function handle(req, res) {
    if (req.method === 'GET'){
        const allLanguages = await prisma.languages.findMany()
        res.json(allLanguages)
    }
    else if(req.method == 'POST'){
        const newLanguage = req.body.newLanguage
        console.log(newLanguage)
        const create = await prisma.languages.create({
            data:{
                language: newLanguage
            }
        })
        res.json(create)
    }
    else if(req.method == 'PUT'){
        const id = req.body.id
        const newLanguage = req.body.newLanguage
        const update= await prisma.languages.update({
            where: {idLanguages: parseInt(id)},
            data:{
                language: newLanguage
            }
        })
        res.json(update)
    }
    else if(req.method == 'DELETE'){
        
    }
}