import { useState, useEffect } from 'react';
import { Pad, Middle } from '../../components';
import './Simon.scss';
import { POSSIBLE_COLORS, getRandomColor, sleep, didUserClickOnCorrectColor } from '../../services/logic.service';

function Simon() {
  const [currentSimonOrder, setCurrentSimonOrder] = useState([]);
  const [currentUserOrder, setCurrentUserOrder] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(null); // user or simon
  const [currentColorClickedBySimon, setCurrentColorClickedBySimon] = useState(null);

  useEffect(() => {
    if (currentTurn === 'simon') {
      setCurrentSimonOrder([...currentSimonOrder, getRandomColor()]);
    }
  }, [currentTurn]);

  useEffect(() => {
    if (!currentSimonOrder.length) {
      return;
    }
    // show simon simulation
    const showSimonSimulation = async () => {
      for (let i = 0; i < currentSimonOrder.length; i++) {
        await sleep(700);
        setCurrentColorClickedBySimon(currentSimonOrder[i]);
        await sleep(400);
        setCurrentColorClickedBySimon(null);
      }
      // move to user turn
      setCurrentTurn('user');
    };
    showSimonSimulation();
  }, [currentSimonOrder]);

  useEffect(() => {
    if (!currentUserOrder.length) {
      return;
    }
    const userClickedOnCorrectColor = didUserClickOnCorrectColor(currentSimonOrder, currentUserOrder);
    if (!userClickedOnCorrectColor) {
      console.log('failed');
      return reset();
    }
    if (currentSimonOrder.length === currentUserOrder.length) { // user answered all correct
      setCurrentUserOrder([]);
      setCurrentTurn('simon');
    }
  }, [currentUserOrder]);

  const startGame = () => {
    console.log('start game');
    setCurrentTurn('simon');
  }

  const reset = () => {
    setCurrentSimonOrder([]);
    setCurrentUserOrder([]);
    setCurrentTurn(null);
    setCurrentColorClickedBySimon(null);
  }

  const userClickedPad = (color) => {
    setCurrentUserOrder([...currentUserOrder, color]);
  }

  return (
    <div className="simon">
      {POSSIBLE_COLORS.map(color => {
        return (
          <Pad
            key={color}
            color={color}
            currentTurn={currentTurn}
            currentColorClickedBySimon={currentColorClickedBySimon}
            userClickedPad={userClickedPad}
          />
        )
      })}
      <Middle
        level={currentSimonOrder.length}
        currentTurn={currentTurn}
        startGame={startGame}
      />
    </div>
  );
}

export default Simon;
