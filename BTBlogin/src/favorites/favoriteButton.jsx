import React from "react";
import { useFavorites } from "./FavoritesContext";

export function FavoriteButton({ artist }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(artist);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(artist);
    } else {
      addFavorite(artist);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        fontSize: "24px",
        color: isFavorite ? "red" : "gray",
        cursor: "pointer",
        background: "none",
        border: "none",
      }}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      ❤️
    </button>
  );
}
