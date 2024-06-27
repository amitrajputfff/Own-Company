const PlaylistCard = ({ title, author, image, category }) => {
    return (
      <div className=' max-w-full flex-shrink py-5 gap-4 rounded-[30px]  flex flex-col justify-start items-start'>
      <img
          src={image}
          alt='card'
          className='w-auto h-auto  hover:shadow-lg hover:cursor-pointer sm:h-[200px] object-cover rounded-[8px]'
        />
        
        <div className='flex flex-col gap-1 justify-start items-start w-full'>
        <h1 className='text-black text-sm sm:text-md font-sf-pro font-semibold break-words'>{title}</h1>
        </div>
        <div className='flex gap-4  w-full justify-start items-center'>
          <p className='text-black text-xs font-sf-pro font-semibold uppercase opacity-75'>{author}</p>
          <img src="src/assets/Ellipse 1.svg" alt="category"/>
          <p className='text-black text-xs font-sf-pro font-semibold uppercase opacity-75'>{category}</p>
        </div>

      </div>

    );
  };
  
export default PlaylistCard