const Button = ({ label, backgroundColor, textColor, iconUrl }) => {
  return (
    <button
      style={{ 
        backgroundColor: backgroundColor ? backgroundColor : 'black',
        color: textColor ? textColor : 'white'
      }}
      className="flex items-center px-6 py-3 text-sm rounded-full font-sf-pro uppercase font-semibold w-fit gap-2 hover:shadow-lg transition-all duration-100"
    >
      
      {label}
      {iconUrl && <img src={iconUrl} alt="" className="w-4 h-4 mr-2" />}
    </button>
  );
};

export default Button;
