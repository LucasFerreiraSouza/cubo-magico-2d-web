import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download } from "lucide-react";
import "./App.css"; // importa o CSS brabo

export default function App() {
  const apkUrl =
    "https://raw.githubusercontent.com/LucasFerreiraSouza/projetos/main/cuboMagico2D.apk";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad/i.test(navigator.userAgent));
  }, []);

  return (
    <div className="container">
      <div className="particles" />

      <h1>🐢 Baixe o Cubo Mágico 2D</h1>

      <p>
         Instale o jogo Android desenvolvido por <strong>Lucas Ferreira</strong>.
      </p>

      <div className="explanation">
        <p>
            Aplicativo Android interativo desenvolvido em Java com o Android Studio, simulando um cubo mágico em duas dimensões. Combina lógica algorítmica, cores dinâmicas e animações suaves para criar uma experiência visual fluida e envolvente. Um projeto que une design minimalista e interatividade, explorando o raciocínio espacial de forma criativa.  
        </p>

        <a
          href="https://www.linkedin.com/posts/lucas-ferreira-de-souza-758195215_java-activity-7157781844376141825-gRwD"
          target="_blank"
          rel="noopener noreferrer"
        >
          📖 Ver explicação completa no LinkedIn
        </a>
      </div>

      <a href={apkUrl} download className="download-btn">
        <Download size={20} />
        Baixar APK
      </a>

      {!isMobile && (
        <div className="qr-container">
          <p>Escaneie o QR Code no seu celular:</p>
          <QRCodeCanvas value={apkUrl} size={150} />
        </div>
      )}

      <footer>© {new Date().getFullYear()} Lucas Ferreira</footer>
    </div>
  );
}
