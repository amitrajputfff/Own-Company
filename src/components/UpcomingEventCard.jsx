const UpcomingEventCard = ({ label, event, price, image, date }) => {
  return (
    <div className='group bg-black max-w-full sm:max-w-[270px] hover:bg-mygreen  hover:cursor-pointer transition-all duration-100 px-4 sm:px-6 py-5 gap-4 rounded-[30px] flex flex-col justify-center items-center'>
      <div className='bg-white w-full h-auto sm:h-[250px] rounded-[24px] flex flex-col items-center justify-between gap-2 pb-3'>
        <img
          src={image}
          alt='card'
          className='w-full h-auto sm:h-[240px] object-cover rounded-t-[24px]'
        />
        <p className='text-black  text-xs font-sf-pro font-semibold text-center mt-1'>{date}</p>
      </div>

      <div className='flex flex-col gap-1 justify-start items-start w-full'>
        <h1 className='text-white group-hover:text-black text-sm sm:text-md font-sf-pro font-semibold break-words'>{label}</h1>
        <div className='flex gap-1 items-start w-full justify-between'>
          <p className='text-white text-xs group-hover:text-slate-500 font-sf-pro font-semibold opacity-75'>{event}</p>
          <p className='text-white text-xs group-hover:text-slate-500  font-sf-pro font-semibold opacity-75'>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventCard;
