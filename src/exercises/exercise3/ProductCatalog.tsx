import { GameProvider } from './GameContext';
import GameCatalog from './GameCatalog';

export const ProductCatalog = () => {

  return (
    <GameProvider>
      <GameCatalog />
    </GameProvider>
  )
} 