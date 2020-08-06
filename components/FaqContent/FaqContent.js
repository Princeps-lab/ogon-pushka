import style from './fagContent.module.css';

const BlockInfo = ({title}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>We craft digital, graphic and 3 dimensional thinking, to create category leading brand experiences that have meaning and relevance.</p>
    </div>
  )
};

const FaqContent = () => {
  return (
    <div className={style.faq}>
       <h2>Частые вопросы</h2> 
       
      <div className={style.section}>
        <h3>Оплата</h3>
        <div className={style.blocks}>
          <BlockInfo title={'Как COVID-19 влияет на мои онлайн-заказы и покупки в магазине?'} />
          <BlockInfo title={'Где находится мой заказ?'} />
          <BlockInfo title={'Как я могу осуществить обмен или возврат товара, приобретенного на веб-сайте?'} />
          <BlockInfo title={'Могу ли я отменить или изменить свой заказ?'} />
        </div>
      </div>

      <div className={style.section}>
        <h3>Доставка</h3>
        <div className={style.blocks}>
          <BlockInfo title={'У меня есть промокод или код на скидку. Как я могу использовать его при онлайн-покупке?'} />
          <BlockInfo title={'Какие виды доставки вы предлагаете?'} />
          <BlockInfo title={'Как я могу оплатить свои покупки?'} />
          <BlockInfo title={'Как я могу сохранить понравившуюся модель?рта'} />
        </div>
      </div>

    </div>
  );
};

export default FaqContent;