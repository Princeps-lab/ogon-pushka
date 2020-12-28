import apiProducts from '../../api/apiProducts';
import style from './AboutContent.module.css';
import VideoPlayer from '../VideoPlayer';
import { useEffect, useState } from 'react';

const api = new apiProducts();

const AboutContent = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    api.getAbout().then(text => {setContent(text.content)});
  }, []);

  function createMarkup(str) {
    return {__html: str};
  }

  return (
    <div className={style.about}>
      <h2>О нас</h2>
      <div className={style.description} dangerouslySetInnerHTML={createMarkup(content)}></div>
      <VideoPlayer/>
    </div>
  )
};

export default AboutContent;