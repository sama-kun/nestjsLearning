import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';



async function start(): Promise<void>{
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('SoloLearning NestJS')
        .setDescription('Learning in chanel UlbiTV https://www.youtube.com/watch?v=dDeWWQWMM-Y&t=1277s')
        .setVersion('1.0.0')
        .addTag('Samakun')
        .build();
    
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,document);
    await app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
}

start()