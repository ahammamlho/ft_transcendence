import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    checkUser(query: any): Promise<boolean>;
    getAllUser(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        avatar: string;
        status: import(".prisma/client").$Enums.Status;
        lastSee: Date;
    }[]>;
}
