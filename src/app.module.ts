import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from '@my-socket-io/gateway.module';
import { PrismaModule } from '@my-prisma/prisma.module';
import { NotificationModule } from './modules/notification/notification.module';
import { CommentModule } from 'modules/comment/comment.module';

@Module({
  imports: [GatewayModule, PrismaModule, NotificationModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
