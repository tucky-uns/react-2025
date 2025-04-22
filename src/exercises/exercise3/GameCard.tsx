import React from 'react';
import { useGameContext } from './GameContext';
import styles from './GameCard.module.css';

interface GameCardProps {
  game: {
    fecha: string;
    equipos: {
      visitante: string;
      local: string;
    };
    puntuacion: {
      visitante: number;
      local: number;
    };
    etapa: string;
    imagen: string;
    video_resumen: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { favorites, toggleFavorite } = useGameContext();
  const gameId = `${game.fecha}-${game.equipos.visitante}-${game.equipos.local}`;
  const isFavorite = favorites.includes(gameId);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={game.imagen} alt={`${game.equipos.local} logo`} className={styles.logo} />
        </div>
        <button 
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
          onClick={() => toggleFavorite(gameId)}
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      
      <div className={styles.content}>
        <h3>{game.etapa}</h3>
        <p className={styles.date}>{game.fecha}</p>
        
        <div className={styles.teams}>
          <div className={styles.team}>
            <span className={styles.teamName}>{game.equipos.visitante}</span>
            <span className={styles.score}>{game.puntuacion.visitante}</span>
          </div>
          <div className={styles.team}>
            <span className={styles.teamName}>{game.equipos.local}</span>
            <span className={styles.score}>{game.puntuacion.local}</span>
          </div>
        </div>
        
        <a 
          href={game.video_resumen} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.videoButton}
        >
          Ver Resumen
        </a>
      </div>
    </div>
  );
};

export default GameCard; 