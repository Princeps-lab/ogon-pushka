import Image from "next/image";

const Logo = ({width = '20', height = "120"}) => {
  return (
    <div>
      <Image width={width} height={height} src="/images/logo.svg" alt="logo"/>
    </div>
  );
};
export default Logo;
