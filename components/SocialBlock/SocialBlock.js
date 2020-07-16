
import style from './SocialBlock.module.css';

const SocialItem = ({url, title}) => {
  return (
    <div style={{"background" : `url(${url}) no-repeat center / cover` }}>
      {title}
    </div>
  )
};

const SocialBlock = () => {

  return (
    <div className={style.social}>
      <SocialItem url="/images/item1.jpg" title="FACEBOOK" />
      <SocialItem url="/images/item2.jpg" title="INSTAGRAM" />
      <SocialItem url="/images/item3.jpg" title="TIK TOK" />
    </div>
  )
};

export default SocialBlock;