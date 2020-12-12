import style from './ButtonForm.module.css';

const ButtonForm = ({text}) => {
  return (
    <div className={style.btn}>
      <button disabled={text === 'Заказ подтвержден' ? true : false} type="submit">{text}</button>
    </div>
  );
};

export default ButtonForm;