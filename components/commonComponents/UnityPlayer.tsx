"use client";

// UnityPlayer.tsx
import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import PageWrapper from "./PageWrapper";

const UnityPlayer: React.FC = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/build.loader.js",
    dataUrl: "Build/build.data",
    frameworkUrl: "Build/build.framework.js",
    codeUrl: "Build/build.wasm",
  });

  return (
    <PageWrapper overflowAuto>
      <div className="w-full flex flex-col items-center justify-center">
        <Unity
          unityProvider={unityProvider}
          style={{ height: "calc(100vh - 200px)", aspectRatio: "16/9" }}
        />
        <div className="w-full mt-2 text-center">
          <h1 className="text-2xl font-bold text-center">Participe!</h1>
          <p className="text-center">
            A ideia desse simulador é proporcionar uma área de treinamento para
            a comunidade! Sinta-se livre para testar e compartilhar com seus
            amigos! 🚀
          </p>
          <p>
            Entre no nosso{" "}
            <a className="text-blue-500" href="https://discord.gg/4QWrwNw3ry">
              Discord
            </a>{" "}
            para deixar alguma sugestão ou relatar algum bug! 🐞
          </p>
        </div>
        <div className="w-full mt-2 text-center">
          <h1 className="text-2xl font-bold text-center">Descrição</h1>
          <p className="text-center">
            Eu implementei esse simulador baseado em videos e lives que eu
            assisti. É possível que eu tenha cometido erros, então por favor, me
            avise se você encontrar algum! 🙏{" "}
            <a className="text-blue-500" href="https://discord.gg/4QWrwNw3ry">
              Discord
            </a>
          </p>
          <h2 className="text-xl font-bold mt-2">O que tem no simulador?</h2>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mt-2">1 - Primeira fase:</h3>
              <span className="text-gray-500">HP entre 100% e 75%</span>
              <ul className="list-none">
                <li>Meteoro no pé do Boss 9x9 - 3 segundos pra dar dano</li>
                <li className="text-red-500">Espera 1.5 segundos</li>
                <li>Linha horizontal - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 0.5 segundos</li>
                <li>Linha vertical - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 1 segundo</li>
                <li>Meteoro no pé do Boss 5x5 - 2 segundos pra dar dano</li>
                <li>Meteoro no pé do Boss 9x9 - 3 segundos pra dar dano</li>
                <li className="text-red-500">Espera 1 segundo</li>
                <li>
                  Mecânica do Relógio - rotaciona uma linha a cada 0.75 segundos
                  - 8 ângulos diferentes
                </li>
                <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md">
                  <p className="text-md mb-2">16 segundos para dar dano</p>
                  <ul className="list-none">
                    <li className="text-green-500">Cast de 1 segundo</li>
                    <li>
                      13 segundos sem mecânica - Pode dar dano (se não coincidir
                      com o relógio)
                    </li>
                    <li className="text-green-500">Cast de 2 segundo</li>
                  </ul>
                </div>
                <li>Meteoro no pé do Boss 5x5 - 2 segundos pra dar dano</li>
                <li className="text-blue-500">Recomeça a mecânica do início</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mt-2">2 - Segunda fase:</h3>
              <span className="text-gray-500">HP entre 75% e 50%</span>
              <ul className="list-none">
                <li className="text-red-500">
                  Espera 5 segundos antes de começar
                </li>
                <li>Meteoro no pé do Boss 9x9 - 3 segundos pra dar dano</li>
                <li className="text-red-500">Espera 1 segundo</li>
                <li>Cruz - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 0.5 segundos</li>
                <li>Xis - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 6.5 segundos</li>
                <li className="text-green-500">Hora de dar dano</li>
                <li>Meteoro no pé do Boss 5x5 - 2 segundos pra dar dano</li>
                <li>Meteoro no pé do Boss 9x9 - 3 segundos pra dar dano</li>
                <li className="text-red-500">Espera 1 segundo</li>
                <li>
                  Mecânica do Relógio - rotaciona uma linha a cada 0.75 segundos
                  - 8 ângulos diferentes
                </li>

                <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md">
                  <p className="text-md mb-2">20 segundos para dar dano</p>
                  <ul className="list-none">
                    <li className="text-green-500">Cast de 1 segundo</li>
                    <li>
                      18 segundos sem mecânica - Pode dar dano (se não coincidir
                      com o relógio)
                    </li>
                    <li className="text-green-500">Cast de 1 segundo</li>
                    <li className="text-orange-500">Espera de 1 segundo</li>
                  </ul>
                </div>
                <li>Meteoro no pé do Boss 5x5 - 1 segundo pra dar dano</li>
                <li className="text-blue-500">Recomeça a mecânica do início</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mt-2">3 - Terceira fase:</h3>
              <span className="text-gray-500">HP entre 50% e 25%</span>
              <ul className="list-none">
                <li className="text-red-500">
                  Espera 10 segundos antes de começar
                </li>
                <li>Meteoro no pé do Boss 9x9 - 3 segundos pra dar dano</li>
                <li className="text-red-500">Espera 0.3 segundos</li>
                <li>Xis - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 0.3 segundso</li>
                <li>Cruz - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 0.3 segundos</li>
                <li>
                  Mecânica do Relógio - rotaciona uma linha a cada 0.75 segundos
                  - 8 ângulos diferentes
                </li>
                <li className="text-red-500">Espera 0.5 segundos</li>
                <li>Xis - 2 segundos pra dar dano</li>
                <li className="text-red-500">Espera 0.3 segundos</li>
                <li>Cruz - 2 segundos pra dar dano</li>

                <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md">
                  <p className="text-md mb-2">20 segundos para dar dano</p>
                  <ul className="list-none">
                    <li className="text-green-500">Cast de 1 segundo</li>
                    <li className="text-green-500">Cast de 2 segundos</li>
                    <li>
                      16 segundos sem mecânica - Pode dar dano (se não coincidir
                      com o relógio)
                    </li>
                    <li className="text-green-500">Cast de 1 segundo</li>
                  </ul>
                </div>
                <li className="text-orange-500">Espera de 0.2 segundos</li>
                <li className="text-green-500">
                  Cast de 2 segundos enquanto tem meteoro
                </li>
                <li>Meteoro no pé do Boss 5x5 - 2 segundos pra dar dano</li>
                <li className="text-blue-500">Recomeça a mecânica do início</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mt-2">4 - Quarta fase:</h3>
              <p className="text-gray-500">HP entre 25% e 0%</p>
              <p className="text-gray-500">
                Obs: eu ainda estou entendendo a quarta fase, com certeza está
                errada.
              </p>
              <p className="text-yellow-500">
                Obs2: essa fase é diferente das outras, existem 2 mecânicas
                diferentes, que acontecem ao mesmo tempo.
              </p>
              <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md">
                <p className="text-md mb-2">Mecânica das bolinhas</p>
                <ul className="list-none">
                  <li className="text-red-500">
                    Não achei o tempo de espera pra começar
                  </li>
                  <li>Dispara 8 bolinhas</li>
                  <li className="text-red-500">Espera 2 segundos</li>
                  <li className="text-orange-500">
                    Repete 10 vezes - são 10 ondas de 8 bolinhas
                  </li>
                  <li className="text-green-500">
                    20 segundos sem mecânica - Pode dar dano (se não coincidir
                    com o relógio)
                  </li>
                  <li className="text-blue-500">
                    Recomeça a mecânica do início
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md mt-4">
                <p className="text-md mb-2">Mecânica do Relógio</p>
                <ul className="list-none">
                  <li className="text-red-500">
                    Não achei o tempo de espera pra começar - chutei 7 segundos
                  </li>
                  <li>
                    Mecânica do Relógio - rotaciona uma linha a cada 0.75
                    segundos - 8 ângulos diferentes
                  </li>
                  <li className="text-red-500">Espera 1 segundos</li>
                  <li>
                    Mecânica do Relógio - rotaciona uma linha a cada 0.75
                    segundos - 8 ângulos diferentes
                  </li>
                  <li className="text-red-500">Espera 1 segundos</li>
                  <li>
                    Mecânica do Relógio - rotaciona uma linha a cada 0.75
                    segundos - 8 ângulos diferentes
                  </li>
                  <li className="text-green-500">
                    25 segundos sem mecânica - Pode dar dano (se não coincidir
                    com as bolinhas)
                  </li>
                  <li className="text-blue-500">
                    Recomeça a mecânica do início
                  </li>
                </ul>
              </div>
              <p className="text-yellow-500 mt-4">
                Atenção: pelo o que eu entendi, as mecânicas acontecem ao mesmo,
                mas elas tem tempos diferentes. Ou seja, vale a pena esperar as
                duas mecânicas darem o tempo ao mesmo tempo, porque a janela de
                dano será maior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UnityPlayer;
