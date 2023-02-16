import style from './ButtonForm.module.css';

const ButtonForm = ({text}) => {
  return (
    <div className={style.btn}>
      <button disabled={text === 'Замовлення підтверджено' ? true : false} type="submit">{text}</button>
    </div>
  );
};

export default ButtonForm;