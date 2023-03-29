import React, { useState, useEffect } from "react"

import { useAllAnime } from "../../api/anime/hooks"

const useAnimeScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [actualPage, setActualPage] = useState(1);
    const [animesData, setAnimesData] = useState()

    const mutator = useAllAnime();

    useEffect(() => {
        (async () => {
            setIsLoading(true)
          const response = await mutator.mutateAsync({  
            perPage,
            actualPage,
          });
          const { status, data } = response; 
          if(data) {
            setAnimesData(data)
          }
        })();
      }, [actualPage]);

    return {
        isLoading,
        perPage,
        actualPage,
        animesData,
    }
}

export default useAnimeScreen