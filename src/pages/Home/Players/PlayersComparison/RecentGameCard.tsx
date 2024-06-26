import { Link } from "react-router-dom";
import { PlayerInfo } from "../../../../api";
import AvatarImg from "../../../../components/AvatarImg";
import { cls, winningRate } from "../../../../libs/utils";
import PositionImg from "../../../../components/PositionImg";
import Loading from "../../../../components/Loading";

interface RecentGameCardProps {
  playerAllMatchLoading: boolean;
  playerMatchData: PlayerInfo;
}

function RecentGameCard({
  playerAllMatchLoading,
  playerMatchData,
}: RecentGameCardProps) {
  return (
    <section className="space-y-1">
      <div className="py-4 text-xl font-semibold">최근 5게임</div>
      {playerAllMatchLoading ? (
        <Loading />
      ) : (
        <>
          {playerMatchData?.matches?.rows?.slice(0, 6).map((match) => (
            <Link
              to={`/matches/${match?.matchId}`}
              className={cls(
                "flex items-center justify-start space-x-3 w-full",
                match?.playInfo?.result === "win" ? "bg-blue-200" : "bg-red-200"
              )}
            >
              <AvatarImg id={match?.playInfo?.characterId} />
              <PositionImg positionName={match?.position?.name} />
              <span>({match?.playInfo?.result === "win" ? "승" : "패"})</span>
              <figcaption className="flex flex-col text-sm text-slate-600">
                <span>
                  {match?.playInfo?.killCount}킬 {match?.playInfo?.deathCount}
                  데스 {match?.playInfo?.assistCount}어시
                </span>
                <span>
                  KDA:{" "}
                  {winningRate(
                    match?.playInfo?.killCount,
                    match?.playInfo?.deathCount,
                    match?.playInfo?.assistCount
                  )}
                  점
                </span>
              </figcaption>
            </Link>
          ))}
        </>
      )}
    </section>
  );
}

export default RecentGameCard;
