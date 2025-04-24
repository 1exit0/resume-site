'use client';
import { useState } from 'react';

const PigGame: React.FC = () => {
  // Game states
  const [scores, setScores] = useState<[number, number]>([0, 0]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [activePlayer, setActivePlayer] = useState<0 | 1>(0);
  const [playing, setPlaying] = useState<boolean>(true);
  const [diceNumber, setDiceNumber] = useState<number | null>(null);

  // Function to switch player
  const switchPlayer = (): void => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  // Function to roll dice
  const rollDice = (): void => {
    if (playing) {
      // Generate random dice roll
      const dice: number = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(dice);

      // Check for roll 1: if true, switch to next player
      if (dice !== 1) {
        // Add dice to current score
        setCurrentScore((prevScore) => prevScore + dice);
      } else {
        // Switch to next player
        switchPlayer();
      }
    }
  };

  // Function to hold score
  const holdScore = (): void => {
    if (playing) {
      // Add current score to active player's score
      setScores((prevScores) => {
        const newScores: [number, number] = [...prevScores] as [number, number];
        newScores[activePlayer] += currentScore;
        return newScores;
      });

      // Check if player won the game
      if (scores[activePlayer] + currentScore >= 100) {
        // Finish the game
        setPlaying(false);
      } else {
        // Switch to the next player
        switchPlayer();
      }
    }
  };

  // Function to start a new game
  const newGame = (): void => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDiceNumber(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 p-4">
      <main className="relative bg-opacity-35 backdrop-blur-lg flex flex-col md:flex-row w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
        {/* Player 1 Panel */}
        <section
          className={`w-full md:w-1/2 p-8 flex flex-col items-center justify-center transition-all duration-500 ${
            activePlayer === 0 && playing ? 'bg-yellow-400' : 'bg-gray-800'
          } rounded-lg`}
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            {!playing && scores[0] >= 100 ? 'برنده!' : 'بازیکن 1'}
          </h2>
          <p className="text-6xl text-red-500 font-semibold mb-8">{scores[0]}</p>

          <div className="bg-red-500 text-white p-4 rounded-lg w-full max-w-xs">
            <p className="text-center text-lg uppercase mb-2">امتیاز فعلی</p>
            <p className="text-center text-4xl">{activePlayer === 0 ? currentScore : 0}</p>
          </div>
        </section>

        {/* Player 2 Panel */}
        <section
          className={`w-full md:w-1/2 p-8 flex flex-col items-center justify-center transition-all duration-500 ${
            activePlayer === 1 && playing ? 'bg-yellow-400' : 'bg-gray-800'
          } rounded-lg`}
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            {!playing && scores[1] >= 100 ? 'برنده!' : 'بازیکن 2'}
          </h2>
          <p className="text-6xl text-red-500 font-semibold mb-8">{scores[1]}</p>

          <div className="bg-red-500 text-white p-4 rounded-lg w-full max-w-xs">
            <p className="text-center text-lg uppercase mb-2">امتیاز فعلی</p>
            <p className="text-center text-4xl">{activePlayer === 1 ? currentScore : 0}</p>
          </div>
        </section>

        {/* Game Controls */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-8">
          {/* New Game Button */}
          <button
            className="bg-white text-black py-3 px-6 rounded-full font-semibold mb-4 hover:bg-gray-200 transition-colors"
            onClick={newGame}
          >
            🔄 بازی جدید
          </button>

          {/* Dice Image */}
          {diceNumber && (
            <div className="my-4">
              <img
                src={`/pig-game/dice-${diceNumber}.png`}
                alt={`تاس ${diceNumber}`}
                className="h-24 w-24"
              />
            </div>
          )}

          {/* Game Controls */}
          <div className="flex flex-col gap-4 mt-4">
            <button
              className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              onClick={rollDice}
              disabled={!playing}
            >
              🎲 پرتاب تاس
            </button>

            <button
              className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              onClick={holdScore}
              disabled={!playing}
            >
              📥 نگه داشتن امتیاز
            </button>
          </div>
        </div>
      </main>

      {/* Game Rules */}
      <div
        className="mt-8 bg-white p-6 rounded-lg max-w-4xl text-right"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold mb-4">قوانین بازی</h2>
        <ul className="list-disc pr-5 space-y-2">
          <li>این بازی دارای 2 بازیکن است که به نوبت بازی می‌کنند</li>
          <li>
            در هر نوبت، یک بازیکن می‌تواند تاس را به هر تعداد دلخواه بریزد. هر
            نتیجه به امتیاز فعلی آنها اضافه می‌شود
          </li>
          <li>
            اما اگر بازیکن عدد 1 را بریزد، تمام امتیاز فعلی خود را از دست
            می‌دهد. بعد از آن، نوبت بازیکن بعدی است
          </li>
          <li>
            بازیکن می‌تواند امتیاز خود را 'نگه دارد'، به این معنی که امتیاز فعلی
            آنها به امتیاز کلی آنها اضافه می‌شود. بعد از آن، نوبت بازیکن بعدی
            است
          </li>
          <li>اولین بازیکنی که به 100 امتیاز کلی برسد، برنده بازی است</li>
        </ul>
      </div>
    </div>
  );
};

export default PigGame;