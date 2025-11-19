import { useEffect, useState } from "react";
import { useMovies } from "../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../cases/movies/components/movie-genres";

export function Highlight() {
  const { selectedMovie } = useMovies();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(!selectedMovie);
  }, [selectedMovie]);

  if (!selectedMovie) return null;
  
  return (
    isLoading ? (
      <div className="fles justify-center items-center">
        <p className="text-2xl text-center text-white">Carregando...</p>
      </div>
    ) : (
    <section
      className="relative flex bg-cover"
      style={{
        backgroundImage: `url(${selectedMovie.highlight})`,
        backgroundPosition: "left calc((50vw - 170px) - 340px) top",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17, 17, 17, 1) calc((50vw - 70px) - 340px), rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0.7) 100%)",
        }}
      ></div>

      <div className="mx-auto max-w-6xl flex gap-8 py-8 z-20">
        <img
          className="rounded-lg"
          src={selectedMovie.image}
          alt="Imagem do Filme"
        />

        <div className="flex flex-col">
          <h2 className="text-[2.5rem] font-normal">
            {selectedMovie.title}
          </h2>

      <MovieGenres movie={selectedMovie}>
          <span className="pl-4 text-gray-300">
            {selectedMovie.duration.replace(':', 'h ') + 'm'}
           </span>
      </MovieGenres>

          <div className="flex flex-col gap-2">
            <h4 className="font-normal pt-12 pb-2 text-2xl">Sinopse</h4>
            <p className="text-[#a0a0a0] text-sm">
              {selectedMovie.sinopse}
            </p>
          </div>

          <div className="flex gap-4 my-6">
            <button
              className="
                bg-[#e50914] text-white
                border-none py-3 px-6 rounded
                font-bold transition-colors
                cursor-pointer
                hover:bg-[#b8070f]
              "
            >
              Assistir
            </button>
            <button
              className="
                bg-white/20 text-white
                border border-white/30
                py-3 px-6 rounded
                transition-colors
                hover:bg-white/30
              "
            >
              Detalhes
            </button>
            <button
              className="
                bg-white/20 text-white
                border border-white/30
                py-3 px-6 rounded
                transition-colors
                hover:bg-white/30
              "
            >
              + Adicionar à Lista
            </button>
          </div>
        </div>
      </div>
    </section>
    )
  );
}