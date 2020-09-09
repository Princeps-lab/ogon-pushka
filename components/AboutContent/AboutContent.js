
import style from './AboutContent.module.css';
import VideoPlayer from '../VideoPlayer';

const AboutContent = () => {
  return (
    <div className={style.about}>
      <h2>О нас</h2>
      <VideoPlayer/>
    </div>
  )
};

export default AboutContent;