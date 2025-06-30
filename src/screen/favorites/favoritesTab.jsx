import { useFavorites } from "../../contexts/FavoritesContext";

const FavoritesTab = () => {
  const { favorites } = useFavorites();

  // Group favorites by their panel
  const grouped = favorites.reduce((acc, item) => {
    if (!acc[item.panel]) {
      acc[item.panel] = [];
    }
    acc[item.panel].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">⭐ My Favorites</h2>

      {Object.keys(grouped).map((panel) => (
        <div key={panel} className="mb-6">
          <h3 className="text-md font-semibold mb-2">📂 {panel}</h3>
          <ul className="pl-4 list-disc text-gray-800">
            {grouped[panel].map((fav) => (
              <li key={fav.path}>
                <a href={fav.path} className="hover:underline text-blue-600">
                  {fav.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FavoritesTab;
