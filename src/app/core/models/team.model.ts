import { Player } from './player.model';
export interface Team {
    id?: string;
    name?: string;
    country?: string;
    foundationDate?: Date;
    coachName?: string;
    logoImage?: string;
    players?: Player[];
}