import './Middle.scss';

function Middle({ level, currentTurn, startGame }) {
  const actionText = currentTurn ? `${currentTurn} says` : '';
  const LevelText = level === 0 ? 'Start' : `Level ${level}`;
  const levelClassName = level === 0 ? 'middle-level clickable' : 'middle-level';
  const levelOnClick = level === 0 ? startGame : null;

  return (
    <div className="middle">
      <p className="middle-header">Simon</p>
      <p className="middle-action">{ actionText }</p>
      <p className={levelClassName} onClick={levelOnClick}>{ LevelText }</p>
    </div>
  );
}

export default Middle;
