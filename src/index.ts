import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         title: "this is title",
    //         content: "this is content",
    //         authorName: 'samim hossain sujon',
            
    //     }
    // })

    const getAlldb = await prisma.post.findMany()
    console.log(getAlldb)
};
main();
