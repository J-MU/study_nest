import {  TypeOrmModuleOptions  } from '@nestjs/typeorm';

export const typeORMConfig : TypeOrmModuleOptions={
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'vcxz4941@',
    database:'board-app',
    entities:[__dirname+'../**/*.entity.{ts,js}'],
    synchronize:true
}