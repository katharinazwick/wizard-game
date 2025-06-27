import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

export interface Player {
    id: string;
    name: string;
}

@Injectable()
export class PlayerService {
    private players: Player[] = [];

    createUser(name: string): Player {
        const newPlayer: Player = { id: uuidv4(), name };
        this.players.push(newPlayer);
        return newPlayer;
    }

    getUsers(): Player[] {
        return this.players;
    }

    //dint use it?
    getUserById(id: string): Player | { message: string } {
        const user = this.players.find((user) => user.id === id);
        return user || { message: "Player nicht gefunden" };
    }
}