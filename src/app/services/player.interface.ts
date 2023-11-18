import { Coordinates } from "../models/interfaces/coordinates.interface";

export interface Player {
    mark: boolean;
    receive(): Promise<Coordinates>
}