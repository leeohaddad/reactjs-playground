import { useState } from 'react';
import React from 'react';

const PlayersList = ({playersList, onDelete}) => {

    return (
        <div>
            {playersList.map((player) => (
                <ul>
                    <li key={player.id}>
                        {player.name} from {player.team}
                        <span onClick={() => onDelete(player.id)}>Delete</span>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default PlayersList;