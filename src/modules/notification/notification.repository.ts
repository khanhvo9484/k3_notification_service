import { Injectable, Inject } from '@nestjs/common'
import { PrismaService } from '@my-prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class NotificationRepository {
	constructor(private prismaService: PrismaService) {}

	async updateNotification(params: {
		where: Prisma.NotificationWhereInput
		data: Prisma.NotificationUpdateInput
	}) {
		const { where, data } = params
		const result = await this.prismaService.notification.updateMany({
			where,
			data
		})
		return result
	}
}
