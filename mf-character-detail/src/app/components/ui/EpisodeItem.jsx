const EpisodeItem = ({ episode: { name, episode } }) => {
  return (
    <li className="border rounded-xl p-4">
      <p className="font-semibold">{episode}</p>

      <p className="text-gray-600">{name}</p>
    </li>
  );
};

export default EpisodeItem;
