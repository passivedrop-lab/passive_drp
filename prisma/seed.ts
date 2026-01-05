import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { hash } from 'bcryptjs'
import "dotenv/config"

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    const password = await hash('admin123', 12)
    const user = await prisma.user.upsert({
        where: { email: 'admin@passivedrop.com' },
        update: {},
        create: {
            email: 'admin@passivedrop.com',
            passwordHash: password,
            role: 'ADMIN',
            referralCode: 'admin',
            balance: 0,
        },
    })
    // Seed Products
    const products = [
        { id: "offer-1", name: "Pack Digital Essentiel", price: 19.00, description: "Digital Download" },
        { id: "offer-2", name: "Audit Algorithmique IA", price: 39.00, description: "Service IA" },
        { id: "offer-3", name: "Cercle Restreint", price: 49.00, description: "Membership" },
    ]

    for (const p of products) {
        await prisma.product.upsert({
            where: { id: p.id },
            update: {},
            create: {
                id: p.id,
                name: p.name,
                price: p.price,
                description: p.description
            }
        })
    }

    console.log({ user })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
