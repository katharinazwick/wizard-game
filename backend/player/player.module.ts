import { Module } from "@nestjs/common";
import {PlayerService} from "./player.service";
import { PlayerController} from "./playerController";

@Module({
    imports: [],
    controllers: [PlayerController],
    providers: [PlayerService],
})
export class PlayerModule {}