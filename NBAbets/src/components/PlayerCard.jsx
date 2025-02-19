

function PlayerCard() {
    return (
        <div className="player-card">
            <div className="player-header">
                <h1>Lebrun</h1>
                <div className="player-photo"></div>
                <div className="player-name"></div>
                <div className="team-logo"></div>
            </div>
            <div className="player-stats">
                <div className="points"></div>
                <div className="rebounds"></div>
                <div className="assists"></div>
                <div className="steals"></div>
                <div className="blocks"></div>
            </div>
        </div>
    );
};

export default PlayerCard;
