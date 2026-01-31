'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

export function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [highScore, setHighScore] = useState(0);

  const directionRef = useRef(direction);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
    );
    return newFood;
  }, [snake]);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setGameOver(false);
    setScore(0);
    setIsPaused(true);
  }, []);

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const currentDirection = directionRef.current;

      let newHead: Position;
      switch (currentDirection) {
        case 'UP':
          newHead = { x: head.x, y: head.y - 1 };
          break;
        case 'DOWN':
          newHead = { x: head.x, y: head.y + 1 };
          break;
        case 'LEFT':
          newHead = { x: head.x - 1, y: head.y };
          break;
        case 'RIGHT':
          newHead = { x: head.x + 1, y: head.y };
          break;
      }

      // Check wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        setHighScore((prev) => Math.max(prev, score));
        return prevSnake;
      }

      // Check self collision
      if (
        prevSnake.some(
          (segment) => segment.x === newHead.x && segment.y === newHead.y
        )
      ) {
        setGameOver(true);
        setHighScore((prev) => Math.max(prev, score));
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [gameOver, isPaused, food, score, generateFood]);

  // Game loop
  useEffect(() => {
    if (!isPaused && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED);
    }
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPaused, gameOver, moveSnake]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) {
        if (e.key === 'Enter' || e.key === ' ') {
          resetGame();
        }
        return;
      }

      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
        return;
      }

      const currentDir = directionRef.current;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (currentDir !== 'DOWN') {
            setDirection('UP');
            directionRef.current = 'UP';
          }
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (currentDir !== 'UP') {
            setDirection('DOWN');
            directionRef.current = 'DOWN';
          }
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (currentDir !== 'RIGHT') {
            setDirection('LEFT');
            directionRef.current = 'LEFT';
          }
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (currentDir !== 'LEFT') {
            setDirection('RIGHT');
            directionRef.current = 'RIGHT';
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, resetGame]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="text-lg font-semibold text-gray-200">
          Score: <span className="text-vercel-cyan">{score}</span>
        </div>
        <div className="text-lg font-semibold text-gray-200">
          High Score: <span className="text-vercel-pink">{highScore}</span>
        </div>
      </div>

      <div
        className="relative border-2 border-gray-600 bg-gray-900 rounded-lg overflow-hidden"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className={`absolute rounded-sm ${
              index === 0 ? 'bg-vercel-cyan' : 'bg-green-500'
            }`}
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute bg-vercel-pink rounded-full"
          style={{
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
            <div className="text-2xl font-bold text-vercel-pink mb-2">
              Game Over!
            </div>
            <div className="text-gray-300 mb-4">Final Score: {score}</div>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-vercel-cyan text-black font-semibold rounded-lg hover:bg-vercel-cyan/80 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Pause/Start Overlay */}
        {isPaused && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
            <div className="text-xl font-bold text-white mb-4">
              {score === 0 ? 'Press Space to Start' : 'Paused'}
            </div>
            <button
              onClick={() => setIsPaused(false)}
              className="px-4 py-2 bg-vercel-cyan text-black font-semibold rounded-lg hover:bg-vercel-cyan/80 transition-colors"
            >
              {score === 0 ? 'Start Game' : 'Resume'}
            </button>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-400 text-center">
        <p className="mb-1">
          Use <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Arrow Keys</kbd> or{' '}
          <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">WASD</kbd> to move
        </p>
        <p>
          Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Space</kbd> to
          pause/resume
        </p>
      </div>

      {/* Mobile Controls */}
      <div className="lg:hidden flex flex-col items-center gap-2 mt-4">
        <button
          onClick={() => {
            if (directionRef.current !== 'DOWN') {
              setDirection('UP');
              directionRef.current = 'UP';
            }
          }}
          className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-600 active:bg-gray-500"
        >
          ▲
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (directionRef.current !== 'RIGHT') {
                setDirection('LEFT');
                directionRef.current = 'LEFT';
              }
            }}
            className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-600 active:bg-gray-500"
          >
            ◀
          </button>
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="w-14 h-14 bg-vercel-cyan/20 rounded-lg flex items-center justify-center text-lg font-bold hover:bg-vercel-cyan/30 active:bg-vercel-cyan/40"
          >
            {isPaused ? '▶' : '⏸'}
          </button>
          <button
            onClick={() => {
              if (directionRef.current !== 'LEFT') {
                setDirection('RIGHT');
                directionRef.current = 'RIGHT';
              }
            }}
            className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-600 active:bg-gray-500"
          >
            ▶
          </button>
        </div>
        <button
          onClick={() => {
            if (directionRef.current !== 'UP') {
              setDirection('DOWN');
              directionRef.current = 'DOWN';
            }
          }}
          className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-600 active:bg-gray-500"
        >
          ▼
        </button>
      </div>
    </div>
  );
}
