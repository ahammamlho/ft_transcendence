import { Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  // @UseGuards(JwtGuard)
  @Get('/all')
  async getAllUser() {
    console.log('get all user called');
    return await this.userService.findAllUsers();
  }

  // @UseGuards(JwtGuard)
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
    console.log(senderId, recivedId);
    return await this.userService.sendFriendRequist(senderId, recivedId);
  }

  @Delete('/removeFriendRequest/:sender/:recived')
  async removeFriendRequest(
    @Param('sender') sender: string,
    @Param('recived') recived: string,
  ) {
    const senderId = parseInt(sender);
    const recivedId = parseInt(recived);
    return await this.userService.removeFriendRequist(senderId, recivedId);
  }

  @Post('/accepteFriendRequest/:sender/:recived')
  async accepteFriendRequest(
    @Param('sender') sender: string,
    @Param('recived') recived: string,
  ) {
    const senderId = parseInt(sender);
    const recivedId = parseInt(recived);
    await this.userService.removeFriendRequist(recivedId, senderId);
    return await this.userService.accepteFriendRequest(senderId, recivedId);
  }

  @Delete('/deleteFriend/:sender/:recived')
  async deleteFriend(
    @Param('sender') sender: string,
    @Param('recived') recived: string,
  ) {
    const senderId = parseInt(sender);
    const recivedId = parseInt(recived);
    return await this.userService.deleteFriend(senderId, recivedId);
  }

  @Get('/getSendFriendRequest/:sender')
  async getSendRequistFriends(@Param('sender') sender: string) {
    const senderId = parseInt(sender);
    return await this.userService.getSendRequistFriends(senderId);
  }

  @Get('/getRecivedRequistFriends/:sender')
  async getRecivedRequistFriends(@Param('sender') sender: string) {
    const senderId = parseInt(sender);
    return await this.userService.getRecivedRequistFriends(senderId);
  }

  @Get('/getFriends/:sender')
  async getFriends(@Param('sender') sender: string) {
    const senderId = parseInt(sender);
    return await this.userService.getFriends(senderId);
  }
} 
