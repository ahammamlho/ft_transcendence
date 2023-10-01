import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    checkIfUserExist(query: any): Promise<boolean>;
    getAllUsers(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        avatar: string;
        start: Date;
    }[]>;
}
