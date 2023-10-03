import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    checkUser(query: any): Promise<boolean>;
    getAllUser(): Promise<any>;
}
