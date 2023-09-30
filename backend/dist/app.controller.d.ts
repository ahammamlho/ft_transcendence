import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(body: any): Promise<void>;
    getAllUser(): Promise<{
        id: number;
        email: string;
        name: string;
    }[]>;
    creatPost(): void;
    getAllPost(): void;
}
