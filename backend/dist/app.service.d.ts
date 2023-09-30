import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    creatUser(user: any): Promise<void>;
    getAllUser(): Promise<{
        id: number;
        email: string;
        name: string;
    }[]>;
}
