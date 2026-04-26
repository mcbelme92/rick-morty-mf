import Card from "@/components/UI/card/Card";

const CharacterCard = ({ character, navigate }) => {
  const { id, name, image, status, species, gender, description } = character;

  const statusStyles = {
    Alive: "bg-green-100 text-green-700",
    Dead: "bg-red-100 text-red-700",
    unknown: "bg-gray-200 text-gray-700",
    Unknown: "bg-gray-200 text-gray-700",
  };

  return (
    <Card
      image={image}
      title={name}
      subtitle={`${species} • ${gender}`}
      description={description}
    >
      <span
        className={`
          px-2 py-1 rounded-full text-xs font-semibold w-fit
          ${statusStyles[status] || statusStyles.Unknown}
        `}
      >
        {status}
      </span>

      <button
        onClick={() => navigate(`/character/${id}`)}
        className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
      >
        View Detail
      </button>
    </Card>
  );
};

export default CharacterCard;
