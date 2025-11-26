import { GameQuery } from "@/App";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FetchResponse } from "@/services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/platforms/lists/parents')

export interface Game {
  id: React.Key;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>

  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games, gameQuery'],
    queryFn: () =>
      apiClient.getAll({

        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
  })


export default useGames;
