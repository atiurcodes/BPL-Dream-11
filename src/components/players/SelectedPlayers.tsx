import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType"
import SelectedPlayersCard from "./SelectedPlayersCard";

export interface SelectedPlayersProps {
    dollar: number,
    setDollar: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function SelectedPlayers({ dollar, setDollar, selectedPlayers, setSelectedPlayers }: SelectedPlayersProps) {
    if (selectedPlayers.length === 0) {
        return (
            <div className="container mx-auto flex justify-center items-center text-red-500 font-semibold text-2xl">
                <h2>No player purchased yet.</h2>
            </div>
        )
    }
    return (
        <section className="grid grid-cols-1 gap-5 container mx-auto mb-10">
            {
                selectedPlayers.map(sPlayer => <SelectedPlayersCard key={sPlayer.id}
                    dollar={dollar} setDollar={setDollar} selectedPlayers={selectedPlayers} sPlayer={sPlayer} setSelectedPlayers={setSelectedPlayers} />)
            }
        </section>
    )
}