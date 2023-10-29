import React, { useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "./Inicio.css";

export default function Inicio() {
  useEffect(() => {
    const player = new Plyr("#player", {
      controls: [],
    });

    const youtubePlayer = new window.YT.Player("youtube-player", {
      videoId: "sNJZq4GbNfY",
      playerVars: {
        controls: 0, // Desabilitar controles do YouTube
        modestbranding: 1, // Modo de exibição modesto
        rel: 0, // Desativar vídeos relacionados
        showinfo: 0, // Ocultar informações do vídeo
        autoplay: 1, // Reproduzir automaticamente
        loop: 1, // Repetir em loop
        mute: 1, // Sem áudio
      },
      events: {
        onReady: (event) => {
          player.source = {
            type: "video",
            sources: [
              {
                src: event.target.getVideoUrl(),
                provider: "youtube",
              },
            ],
          };
        },
      },
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="video-container">
      <div id="player" className="video-player"></div>
      <div id="youtube-player" className="video-player"></div>
    </div>
  );
}
