import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('/all')
  async getAllUser() {
    console.log('get all user called');
    return await this.userService.findAllUsers();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }

  @Post('/sendFriendRequest/:sender/:recived')
  async addFriendRequest(
    @Param('sender') sender: string,
    @Param('recived') recived: string,
  ) {
    const senderId = parseInt(sender);
    const recivedId = parseInt(recived);
    console.log(`sender=${senderId}, recived=${recivedId}`);
    return await this.userService.sendFriendRequist(senderId, recivedId);
  }

  @Get('/getFriendRequest/:sender')
  async getRequistFriends(@Param('sender') sender: string) {
    const senderId = parseInt(sender);
    return await this.userService.getFriendsRequist(senderId);
  }
}
