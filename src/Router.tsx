import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home/Home";
import Characters from "./pages/Characters/Characters";
import PlayerBasicInfo from "./pages/Home/Home/PlayBasicInfo/PlayerBasicInfo";
import MostCyAll from "./pages/Home/Home/MostCypher/MostCyAll";
import MostCyRating from "./pages/Home/Home/MostCypher/MostCyRating";
import MostCyNomal from "./pages/Home/Home/MostCypher/MostCyNomal";
import PlayersComparison from "./pages/Home/Players/PlayersComparison/PlayersComparison";
import Matches from "./pages/Home/Players/Matchs/Matches";
import CharacterInfo from "./pages/Characters/CharacterInfo/CharacterInfo";
import Players from "./pages/Home/Players/Players";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Board from "./pages/Board/Board";
import BoardDetail from "./pages/Board/Component/BoardDetail";
import BoardModify from "./pages/Board/Component/BoardModify.";
import BoardList from "./pages/Board/Component/BoardList";
import BoardWrite from "./pages/Board/Component/BoardComment/BoardWrite";

//배포된 환경에 문제가 없도록 로컬 환경에서만 설정
const isLocalhost = window.location.hostname === "localhost";
//isLocalhost가 true일 때 카페24배포 도메인으로 연결 - 추후 수정할 것
const basename = isLocalhost ? "/cyphers-supporter-clone" : "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "join",
          element: <Join />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "",
          element: <Home />,
          children: [
            {
              path: ":nickname",
              element: <PlayerBasicInfo />,
              children: [
                {
                  path: "mostcyall",
                  element: <MostCyAll />,
                },
                {
                  path: "mostcyrating",
                  element: <MostCyRating />,
                },
                {
                  path: "mostcynomal",
                  element: <MostCyNomal />,
                },
              ],
            },
          ],
        },
        {
          path: "players",
          element: <Players />,
          children: [
            {
              path: "playersinfo",
              element: <PlayersComparison />,
            },
          ],
        },
        {
          path: "matches/:matchId",
          element: <Matches />,
        },
        {
          path: "characters",
          element: <Characters />,
          children: [
            {
              path: ":characterName",
              element: <CharacterInfo />,
            },
          ],
        },
        {
          path: "board",
          element: <Board />,
          children: [
            {
              path: "",
              element: <BoardList />,
            },
            {
              path: "read/:boardId",
              element: <BoardDetail />,
            },
            {
              path: "write",
              element: <BoardWrite />,
            },
            {
              path: "modify/:boardId",
              element: <BoardModify />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename,
  }
);
