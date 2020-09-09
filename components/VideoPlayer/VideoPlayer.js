import ReactPlayer from 'react-player'

import style from './VideoPlayer.module.css';

const VideoPlayer = () => {
  return (
    <div className={style.palyerConteiner}>
      <ReactPlayer 
        width='100%'
        height='100%'
        className={style.player}
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  )
};

export default VideoPlayer;