import React, { createContext, useContext, useState, useEffect } from 'react';
import gameData from './datos.json';

interface Game {
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
}

interface GameContextType {
  games: Game[];
  favorites: string[];
  toggleFavorite: (gameId: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [games] = useState<Game[]>(gameData);
  const [favorites, setFavorites] = useState<string[]>(() => {
    // Inicializar desde localStorage si existe
    const savedFavorites = localStorage.getItem('nbaFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Guardar en localStorage cuando cambien los favoritos
  useEffect(() => {
    localStorage.setItem('nbaFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (gameId: string) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  return (
    <GameContext.Provider value={{ games, favorites, toggleFavorite }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
}; 