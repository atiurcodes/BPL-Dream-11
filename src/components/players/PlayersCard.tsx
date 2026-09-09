import { FaUser } from "react-icons/fa";
import type { PlayerType } from "../../PlayerType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export interface PlayersCardProps {
    player: PlayerType;
    dollar: number,
    setDollar: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function PlayersCard({ player, dollar, setDollar, selectedPlayers, setSelectedPlayers }: PlayersCardProps) {
    const handleSelectPlayers = (player: PlayerType) => {
        if (dollar < player.price) {
            return toast.error(`Not enough balance to select ${player.playername}.`);

        }
        if (selectedPlayers.length === 6) {
            return toast.error("You can select a maximum of 6 players.");
        }
        const newSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newSelectedPlayers);
        const newDollar = dollar - player.price;
        setDollar(newDollar);
        toast.success(`${player.playername} has been added to your squad!`);
    }
    const isSelected = selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id);
    return (
        <section className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Player Image */}
            <figure className="relative overflow-hidden bg-base-200">
                <img
                    src={player.playerimage}
                    alt={player.playername}
                    className="h-70 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type */}
                <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-content shadow">
                        {player.playertype}
                    </span>
                </div>
            </figure>

            {/* Card Body */}
            <div className="card-body gap-4 p-5">

                {/* Player Name */}
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <FaUser />
                    </div>

                    <h2 className="card-title text-lg font-bold">
                        {player.playername}
                    </h2>
                </div>

                {/* Origin */}
                <p className="text-sm text-base-content/60">
                    📍 {player.origin}
                </p>

                <div className="divider my-0"></div>

                {/* Player Statistics */}
                <div>
                    <h3 className="mb-2 text-sm font-semibold">
                        Player Statistics
                    </h3>

                    <div className="overflow-hidden rounded-xl border border-base-300">

                        {/* Row 1 */}
                        <div className="grid grid-cols-2">

                            {/* Matches */}
                            <div className="flex items-center justify-between border-b border-r border-base-300 px-3 py-2">
                                <span className="text-sm text-base-content/60">
                                    Matches
                                </span>

                                <span className="text-sm font-bold">
                                    {player.matches}
                                </span>
                            </div>

                            {/* Runs */}
                            <div className="flex items-center justify-between border-b border-base-300 px-3 py-2">
                                <span className="text-sm text-base-content/60">
                                    Runs
                                </span>

                                <span className="text-sm font-bold">
                                    {player.runs}
                                </span>
                            </div>

                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-2">

                            {/* Average */}
                            <div className="flex items-center justify-between border-b border-r border-base-300 px-3 py-2">
                                <span className="text-sm text-base-content/60">
                                    Average
                                </span>

                                <span className="text-sm font-bold">
                                    {player.average}
                                </span>
                            </div>

                            {/* Fifties */}
                            <div className="flex items-center justify-between border-b border-base-300 px-3 py-2">
                                <span className="text-sm text-base-content/60">
                                    50s
                                </span>

                                <span className="text-sm font-bold">
                                    {player.fifties}
                                </span>
                            </div>

                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-2">

                            {/* Hundreds */}
                            <div className="flex items-center justify-between border-r border-base-300 px-3 py-2">
                                <span className="text-sm text-base-content/60">
                                    100s
                                </span>

                                <span className="text-sm font-bold">
                                    {player.hundreds}
                                </span>
                            </div>

                            {/* Wickets */}
                            <div className="flex items-center justify-between px-3 py-2">
                                <span className="text-sm text-base-content/60">
                                    Wickets
                                </span>

                                <span className="text-sm font-bold">
                                    {player.wickets}
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Batting & Bowling Style */}
                <div className="grid grid-cols-2 gap-3">

                    {/* Batting Style */}
                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/50">
                            Batting Style
                        </p>

                        <h3 className="mt-1 text-sm font-semibold">
                            {player.battingstyle}
                        </h3>
                    </div>

                    {/* Bowling Style */}
                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/50">
                            Bowling Style
                        </p>

                        <h3 className="mt-1 text-sm font-semibold">
                            {player.bowlingstyle}
                        </h3>
                    </div>

                </div>

                {/* Bowling Stats */}
                <div className="grid grid-cols-2 gap-3">

                    {/* Overs */}
                    <div className="flex items-center justify-between rounded-xl bg-base-200 px-3 py-2">
                        <span className="text-sm text-base-content/60">
                            Overs
                        </span>

                        <span className="text-sm font-bold">
                            {player.overs}
                        </span>
                    </div>

                    {/* Economy */}
                    <div className="flex items-center justify-between rounded-xl bg-base-200 px-3 py-2">
                        <span className="text-sm text-base-content/60">
                            Economy
                        </span>

                        <span className="text-sm font-bold">
                            {player.economy}
                        </span>
                    </div>

                </div>

                {/* Price + Button */}
                <div className="mt-1 flex items-center justify-between gap-3">

                    {/* Price */}
                    <div>
                        <p className="text-xs text-base-content/50">
                            Player Price
                        </p>

                        <p className="text-lg font-bold text-primary">
                            ${player.price}
                        </p>
                    </div>

                    {/* Choose Button */}
                    <button className="btn btn-primary rounded-xl px-5 shadow-sm transition-all hover:scale-105"
                        disabled={isSelected}
                        onClick={() => handleSelectPlayers(player)}>
                        {isSelected ? 'Selected' : 'Choose player'}
                    </button>

                </div>

            </div>
        </section>
    );
}