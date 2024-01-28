import { Global, Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { NotificationRepository } from "./notification.repository";
import { NotificationController } from "./notification.controller";

@Global()
@Module({
  imports: [],
  providers: [NotificationService, NotificationRepository],
  controllers: [NotificationController],
  exports: [NotificationService, NotificationRepository],
})
export class NotificationModule {}
