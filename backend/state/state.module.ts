import { Module } from "@nestjs/common";
import {StateController} from "./state.controller";
import {StateService} from "./state.service";
import {PlayerService} from "../player/player.service"

@Module({
    imports: [],
    controllers: [StateController],
    providers: [StateService, PlayerService],
})
export class StateModule {}