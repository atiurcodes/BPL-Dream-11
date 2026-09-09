export interface PlayerType {
    id: number;
    playername: string;
    playerimage: string;
    origin: string;
    playertype: string;
    bowlingstyle: string;
    battingstyle: string;
    price: number;

    // Batting Statistics
    matches: number;
    runs: number;
    fifties: number;
    hundreds: number;
    average: number;

    // Bowling Statistics
    overs: number;
    wickets: number;
    economy: number;
}