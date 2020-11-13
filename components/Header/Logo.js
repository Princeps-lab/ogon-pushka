import Image from 'next/image'

const Logo = ({width = '20px'}) => {
  return (
    <div>
      <Image width={width} height="auto" src="/images/logo.svg" alt="logo"/>
    </div>
  );
};
export default Logo;
