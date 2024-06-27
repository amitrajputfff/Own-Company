const PlaylistCard = ({ label, subtitle, image }) => {
    return (
      <div
        className="px-12 pb-4  w-full min-h-[250px] rounded-[8px] flex hover:shadow-xl hover:cursor-pointer  items-end"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-transparent flex flex-col items-start jsut p-4">
          <h2 className="text-white text-2xl font-bold">{label}</h2>
          <p className="text-white text-lg">{subtitle}</p>
        </div>
      </div>
    );
  };
  
export default PlaylistCard