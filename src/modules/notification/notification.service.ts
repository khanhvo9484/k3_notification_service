import { MyGatewayService } from '@my-socket-io/gateway';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { NotificationRepository } from './notification.repository';
import { DatabaseExecutionException } from '@common/exceptions';

@Injectable()
export class NotificationService {
  constructor(
    private notificationRepository: NotificationRepository,

    @Inject(forwardRef(() => MyGatewayService))
    private myGatewayService: MyGatewayService,
  ) {}

  async setIsRead(params: { userId: string }) {
    try {
      const result = await this.notificationRepository.updateNotification({
        where: {
          userId: params.userId,
        },
        data: {
          isRead: true,
        },
      });
      return result;
    } catch (error) {
      throw new DatabaseExecutionException(error.message);
    }
  }

  async broadcastNotification(
    userList: { userId: string }[],
    notification: any,
  ) {
    this.myGatewayService.broadcastNotification(userList, notification);
  }
}
