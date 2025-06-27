import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

export interface State {
    id: string;
    playerId: string;
    forecast: number;
    reached: number;
}


@Injectable()
export class StateService {
    private data: State[] = [];

    createEntry(playerId: string, forecast: number, reached: number): State {
        const newEntry: State = {
            id: uuid(),
            playerId,
            forecast,
            reached,
        };
        this.data.push(newEntry);
        return newEntry;
    }

    getEntriesByPlayer(playerId: string): State[] {
        return this.data.filter(entry => entry.playerId === playerId);
    }

    deleteAllEntries(): void {
        this.data = [];
    }
}