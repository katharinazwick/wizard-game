import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Body,
} from "@nestjs/common";
import {State, StateService } from "./state.service";
import {StateDto} from "./state.dto";

@Controller('game')
export class StateController {
    constructor(private readonly gameDataService: StateService) {}

    // @ts-ignore
    @Post()
    createEntry(@Body() body: StateDto): State {
        const { playerId, forecast, reached } = body;
        return this.gameDataService.createEntry(playerId, forecast, reached);
    }

    @Get(':playerId')
    getEntriesByPlayer(@Param('playerId') playerId: string): State[] {
        return this.gameDataService.getEntriesByPlayer(playerId);
    }

    @Delete()
    deleteAllEntries(): { success: boolean; message: string } {
        this.gameDataService.deleteAllEntries();
        return { success: true, message: 'All entries deleted successfully.' };
    }
}
