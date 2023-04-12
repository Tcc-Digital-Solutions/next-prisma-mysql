import { prisma } from '../prisma'

export default async function handle(req, res){
    if (req.method === 'GET'){
        const allProducts = await prisma.productsinfo.findMany()
        console.log(allProducts)
        res.json(allProducts)
    }
}