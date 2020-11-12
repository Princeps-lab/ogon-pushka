import Image from 'next/image'

const Logo = ({width = '20px'}) => {
  return (
    <div style={{"width" : width}}>
      <Image src="/images/logo.svg" alt="logo"/>
    </div>
  );
};
export default Logo;
