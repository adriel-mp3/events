export const ButtonMenu = ({ onClick, isMenuOpen }) => {

  return (
    <button className={`grid lg:hidden w-[22px] h-[21px] gap-1 z-20`} onClick={onClick}>
      <div className={`block h-[3px] w-full bg-yellow duration-300 rounded ${isMenuOpen ? 'transform translate-y-1 -rotate-45' : ''}`}></div>
      <div className={`block h-[3px] w-full bg-yellow duration-300 rounded ${isMenuOpen ? 'opacity-0' : ''}`}></div>
      <div className={`block h-[3px] w-full bg-yellow duration-300 rounded ${isMenuOpen ? 'transform -translate-y-3 rotate-45' : ''}`}></div>
    </button >
  );
};
