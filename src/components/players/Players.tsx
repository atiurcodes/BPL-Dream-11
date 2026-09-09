import { use, useState, type Dispatch, type SetStateAction } from "react"
import type { PlayerType } from "../../PlayerType"
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
    fetchPlayer: Promise<PlayerType[]>;
    dollar: number,
    setDollar: Dispatch<SetStateAction<number>>;
}

export default function Players({ fetchPlayer, dollar, setDollar }: PlayersProps) {
    const players = use(fetchPlayer);
    const [buttonType, setButtonType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);
    const handleButtonType = (type: 'available' | 'selected'): void => {
        setButtonType(type);
    }
    return (
        <section className="container mx-auto">
            <div className="flex justify-between items-center py-10">
                <h2 className="text-2xl font-bold">{buttonType === 'available' ? 'Available Players' : `Selected Players(${selectedPlayers.length})`}</h2>
                <div>
                    <button className={`btn rounded-r-none font-semibold ${buttonType === 'available' ? 'btn-success' : ''}`}
                        onClick={() => handleButtonType('available')}>Available</button>
                    <button className={`btn rounded-l-none font-semibold ${buttonType === 'selected' ? 'btn-success' : ''}`}
                        onClick={() => handleButtonType('selected')}>{`Selected (${selectedPlayers.length})`}</button>
                </div>
            </div>
            {
                buttonType === 'available' ? <AvailablePlayers players={players} dollar={dollar} setDollar={setDollar}
                    selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} /> :
                    <SelectedPlayers dollar={dollar} setDollar={setDollar}
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
            }
        </section >
    )
}