import {useEffect, useState} from 'react';

import style from './fagContent.module.css';
import apiProducts from '../../helpers/apiProducts';

const api = new apiProducts();

const BlockInfo = ({title, description}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
};

const FaqContent = () => {

  const [ faqs, setFaqs ] = useState([]);

  useEffect(() => {
    api.getFaqs().then(faqs => setFaqs(faqs.faqs));
  }, []);

  return (
    <div className={style.faq}>
       <h2>Частые вопросы</h2> 
        {
          faqs.map( item => {
            return (
              <div key={item.id} className={style.section}>
                <h3>{item.title}</h3>
                <div className={style.blocks}>
                  {
                    item.list.map( post => <BlockInfo key={post.id} title={post.title} description={post.description} /> )
                  }
                </div>
              </div>
            )
          })
        }
    </div>
  );
};

export default FaqContent;