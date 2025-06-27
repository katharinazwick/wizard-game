import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { PlayerService } from "./player.service";

@Controller("users")
export class PlayerController {
    constructor(private readonly userService: PlayerService) {}

    @Post()
    createUser(@Body("name") name: string) {
        return this.userService.createUser(name);
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this.userService.getUserById(id);
    }
}