import {useEffect,useState} from 'react';
import Button from '../Button';
import style from "./extra.module.css";

import apiProduct from '../../api/apiProducts';

const api = new apiProduct();

const Top = ({title,description}) => {
  return (
    <div className={style.top}>
      <div className={style.topTitle}>{title}</div>
        <p>{description}</p>
      <Button text="Подробнее"/>
    </div>
  )
};

const ExtraItem = ({url}) => {
  return(
    <div style={{"background" : `url(${url}) center / cover`}} />
  )
};

const FullItem = ({url}) => <div style={{"background" : `url(${url}) center / cover`}} />;

const Extra = () => {

  const [ extra, setExtra ] = useState();

  useEffect(() => {
    api.getHome().then( home => {
      setExtra(home.extra);
    });
  }, []);

  return(
      extra ?
      <div className={style.extra}>
        <div className={style.left}>
          <Top description={extra.description} title={extra.title} />
          <div className={style.bottom}>
            <ExtraItem url={extra.images[0].formats.large.url}/>
            <ExtraItem url={extra.images[1].formats.large.url}/>
          </div>
        </div>
        <div  className={style.right}>
          <FullItem url={extra.featured_image.formats.large.url} />
        </div>
      </div> : null
  );
};

export default Extra;