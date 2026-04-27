import { Card, EpisodeItem } from "@/app/components/ui";

const EpisodesList = ({ episodes = [] }) => {
  return (
    <Card
      className="
        flex-1
        min-w-0
        h-[72vh]
        flex
        flex-col
        overflow-hidden
      "
    >
      <div className="border-b p-6 shrink-0">
        <h2 className="text-2xl font-bold">Episodes ({episodes.length})</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <ul className="grid md:grid-cols-2 gap-4">
          {episodes.map((episode) => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default EpisodesList;
