import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(ConfigService)
    private readonly config: ConfigService,
  ) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.config.get<string>('SQL_HOST'),
      port: this.config.get<number>('SQL_PORT'),
      database: this.config.get<string>('SQL_DATABASE'),
      username: this.config.get<string>('SQL_USER'),
      password: this.config.get<string>('SQL_PASSWORD'),
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'simple-console',
      autoLoadEntities: true,
      synchronize: true,
      migrationsRun: true,
    };
  }
}