import { PrismaClient } from '@prisma/client';
import { PRISMA_DATABASE_URL } from '$env/static/private';

// V Prisma 7 se Accelerate URL předává takto:
const prisma = global.prisma || new PrismaClient({
    accelerateUrl: PRISMA_DATABASE_URL
});

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}

export default prisma;