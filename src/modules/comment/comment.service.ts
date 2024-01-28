import { MyGatewayService } from '@my-socket-io/gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor(private myGatewayService: MyGatewayService) {}
  async broadcastComment(payload: { postId: string; data: any }) {
    const { postId, data } = payload;

    this.myGatewayService.broadcastInPost(postId, data);
    return true;
  }
}
