import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";

export interface SelectedPlayersCardProps {
    dollar: number,
    setDollar: Dispatch<SetStateAction<number>>;
    sPlayer: PlayerType;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function SelectedPlayersCard({ dollar, setDollar, sPlayer, selectedPlayers, setSelectedPlayers }: SelectedPlayersCardProps) {
    const removePlayers = (player: PlayerType) => {
        const remainingPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.id !== player.id);
        setSelectedPlayers(remainingPlayer);
        const newDollar = dollar + (player.price - (player.price * 20) / 100);
        setDollar(newDollar);
        toast.info(`${player.playername} has been removed. 20% of the purchase price was charged as a release fee.`);
    }
    return (
        <div key={sPlayer.id} className="flex justify-between items-center border border-gray-200 rounded-2xl px-4 py-2">
            <div className="flex items-center gap-10">
                <img src={sPlayer.playerimage} alt={sPlayer.playername} className="h-15 w-15 rounded-sm" />
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold">{sPlayer.playername}</h2>
                    <div className="flex items-center gap-2">
                        <p className="text-xl">{sPlayer.playertype}</p>
                        <small>{sPlayer.economy}</small>
                    </div>
                </div>
            </div>
            <span onClick={() => removePlayers(sPlayer)}>
                <TbTrash size={25} className="text-red-500 cursor-pointer" />
            </span>
        </div>
    )
}