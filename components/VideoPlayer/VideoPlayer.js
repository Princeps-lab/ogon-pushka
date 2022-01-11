import {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';

import apiProduct from '../../helpers/apiProducts';
import style from './VideoPlayer.module.css';

const api = new apiProduct();

const VideoPlayer = () => {

  const [ extra, setExtra ] = useState();

  useEffect(() => {
    api.getHome().then( home => {
      setExtra(home.extra);
    });
  }, []);

  return (
    extra ?
    <div className={style.palyerConteiner}>
      <ReactPlayer 
        width='100%'
        height='100%'
        className={style.player}
        url={extra.video_url} />
    </div> : null
  )
};

export default VideoPlayer;