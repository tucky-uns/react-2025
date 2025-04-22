import React from 'react';
import { useGameContext } from './GameContext';
import GameCard from './GameCard';
import styles from './GameCatalog.module.css';

const GameCatalog: React.FC = () => {
  const { games } = useGameContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NBA Playoffs 2025</h1>
      <div className={styles.gamesGrid}>
        {games.map((game) => (
          <GameCard 
            key={`${game.fecha}-${game.equipos.visitante}-${game.equipos.local}`} 
            game={game}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCatalog; 