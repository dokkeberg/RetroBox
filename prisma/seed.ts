import { CardType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'christopher.dokkeberg@boitano.no'},
        update: {},
        create: {
            firstname: 'Christopher',
            lastname: 'Dokkeberg',
            email: 'christopher.dokkeberg@boitano.no',
            team: {
                create: {
                    id: 1,
                    name: 'Team Feature'
                }
            },
        },
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'janerik.ekroll@cgm.com'},
        update: {},
        create: {
            firstname: 'Jan Erik',
            lastname: 'Ekroll',
            email: 'janerik.ekroll@cgm.com',
            teamId: 1
        },
    });

    const session1 = await prisma.session.upsert({
        where: { id: 1},
        update: {},
        create: {
            id: 1,
            teamId: 1,
            cards: {
                create: [
                    {
                        text: 'good sprint',
                        type: CardType.GREEN,
                        userId: 1
                    },
                    {
                        text: 'sprint was bad',
                        type: CardType.RED,
                        userId: 2
                    }
                ]
            }
        }
    })

    console.log({user, user2, session1});
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })