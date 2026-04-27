import StatusBadge from "@/app/components/ui/StatusBadge";

const CharacterInfoCard = ({ character, episodeCount }) => {
  const { name, image, status, species } = character || {};

  return (
    <aside
      className="
      w-full
      lg:w-[320px]
      shrink-0
      bg-white
      rounded-2xl
      shadow
      p-6
    "
    >
      <h1 className="text-3xl font-bold mb-5">{name}</h1>

      <img
        src={image}
        alt={`${name} portrait`}
        className="
          w-64 h-64
          object-cover
          rounded-2xl
          shadow-lg
          mb-6
        "
      />

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Status:</span>

          <StatusBadge status={status} />
        </div>

        <p>
          <strong>Species:</strong> {species}
        </p>

        <p>
          <strong>Episodes:</strong> {episodeCount}
        </p>
      </div>
    </aside>
  );
};

export default CharacterInfoCard;
