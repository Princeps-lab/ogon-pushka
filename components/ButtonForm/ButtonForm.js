import style from './ButtonForm.module.css';

const ButtonForm = () => {
  return (
    <div className={style.btn}>
      <button type="submit">Подтвердить заказ</button>
    </div>
  );
};

export default ButtonForm;