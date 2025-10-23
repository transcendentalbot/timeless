import logoBlack from '../assets/images/tb-logo-black.png';
import logoWhite from '../assets/images/tb-logo-white.png';

const Logo = ({ variant = 'default', className = '' }) => {
  const logoSrc = variant === 'reverse' ? logoWhite : logoBlack;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Timeless Brookfields LLC"
        style={{
          height: '60px',
          width: 'auto'
        }}
      />
    </div>
  );
};

export default Logo;
