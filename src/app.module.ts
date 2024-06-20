import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModel } from './students/infrastucture/models';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('POSTGRES_HOST'),
          port: parseInt(configService.get('POSTGRES_PORT')),
          username: configService.get('POSTGRES_USERNAME'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DATABASE'),
          entities: [StudentModel],
          synchronize: true,
          logging: false,
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
