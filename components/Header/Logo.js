import Image from "next/image";

const Logo = ({width = '20'}) => {
  return (
    <div>
      <Image width={width} height={120} src="/images/logo.svg" alt="logo"/>
    </div>
  );
};
export default Logo;
