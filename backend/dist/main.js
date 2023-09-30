"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const publicPath = (0, path_1.join)(__dirname, '../static');
    app.useStaticAssets(publicPath);
    app.enableCors();
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map