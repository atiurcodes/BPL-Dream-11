import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType"
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";

export interface SelectedPlayersProps {
    dollar: number,
    setDollar: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function SelectedPlayers({ dollar, setDollar, selectedPlayers, setSelectedPlayers }: SelectedPlayersProps) {
    const removePlayers = (player: PlayerType) => {
        const remainingPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.id !== player.id);
        setSelectedPlayers(remainingPlayer);
        const newDollar = dollar + (player.price - (player.price * 20) / 100);
        setDollar(newDollar);
        toast.info(`${player.playername} has been removed. 20% of the purchase price was charged as a release fee.`);
    }
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
                selectedPlayers.map((player) => {
                    return (
                        <div key={player.id} className="flex justify-between items-center border border-gray-200 rounded-2xl px-4 py-2">
                            <div className="flex items-center gap-10">
                                <img src={player.playerimage} alt={player.playername} className="h-15 w-15 rounded-sm" />
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold">{player.playername}</h2>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl">{player.playertype}</p>
                                        <small>{player.economy}</small>
                                    </div>
                                </div>
                            </div>
                            <span onClick={() => removePlayers(player)}>
                                <TbTrash size={25} className="text-red-500 cursor-pointer" />
                            </span>
                        </div>
                    )
                })
            }
        </section>
    )
}