import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFavorites } from "../store/slices/favorites.slice";

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <div>
      <h1>Favorite</h1>

      <ul>
        {favorites.map((favorite) => (
          <li onClick={() => navigate(`/news/${favorite.news.id}`)}>
            {favorite.news.headline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;