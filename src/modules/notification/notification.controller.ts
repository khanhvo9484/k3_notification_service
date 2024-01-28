import { Body, Controller, Post, Req, Get, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('broadcast-notification')
  async broadcastNotification(
    @Body() body: { userList: { userId: string }[]; notification: any },
  ) {
    const result = await this.notificationService.broadcastNotification(
      body.userList,
      body.notification,
    );
    return result;
  }
}
