const Logo = ({width = '20px'}) => {
  return (
    <div style={{"width" : width}}>
      <img src="/images/logo.svg" alt="logo"></img>
    </div>
  );
};
export default Logo;
