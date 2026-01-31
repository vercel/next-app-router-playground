import { SnakeGame } from '#/ui/SnakeGame';

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">Snake Game</h1>
      <p className="text-gray-400">
        A classic snake game built with React and TypeScript. Navigate the snake
        to eat food and grow longer, but don&apos;t hit the walls or yourself!
      </p>
      <SnakeGame />
    </div>
  );
}
