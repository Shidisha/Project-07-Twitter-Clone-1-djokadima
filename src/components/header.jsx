import imgTop from '../icones/Timeline-Prop.png';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <h1 className='page-title'><a href="#">Home</a></h1>
        <button className="top-tweet"><img src={imgTop} alt='icone top tweet'/></button>
      </header>
    </div>
  );
}

export default Header