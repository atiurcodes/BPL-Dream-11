import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType"
import PlayersCard from "./PlayersCard";

export interface AvailablePlayerProps {
    players: PlayerType[];
    dollar: number,
    setDollar: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function AvailablePlayer({ players, dollar, setDollar, selectedPlayers, setSelectedPlayers }: AvailablePlayerProps) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
            {
                players.map(player => <PlayersCard key={player.id} player={player} dollar={dollar} setDollar={setDollar}
                    selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />)
            }
        </section>
    )
}