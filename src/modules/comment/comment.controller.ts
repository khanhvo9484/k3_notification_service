import { Body, Controller, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post('broadcast-comment')
  async broadcastComment(@Body() body: { postId: string; data: any }) {
    const result = await this.commentService.broadcastComment(body);
    return result;
  }
}
