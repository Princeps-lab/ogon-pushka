import React, {useContext, useState, useEffect} from 'react';
import {ProductsContext} from '../../context/context.js';
import { useFormik } from 'formik';
import ButtonForm from '../ButtonForm';
import style from '../FormContent/FormContent.module.css';
import MaskedInput from "react-text-mask";
import { useRouter } from 'next/router'

import apiOrder from '../../api/apiOrder';
const api = new apiOrder();

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Это обязательное поле.';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Должно быть не более 15 символов';
  }

  const num = values.phone.replace(/[^0-9]/g, '');
  const arr = num.split('');

  if (!values.phone) {
    errors.phone = 'Это обязательное поле.';
  } else if (arr.length != 10) {
    errors.phone = 'Проверьте формат номера мобильного телефона';
  }

  return errors;
};

const phoneNumberMask = [
  "(",
  /[0-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const Succes = ({text}) => {
  const classes = text === "Заказ подтвержден" ? style.succesActive : style.succes;
  return (
    <div className={classes}>
      {text}
    </div>
  )
};

const FastBuy = () => {
  const router = useRouter();
  const store = useContext(ProductsContext);
  const [ status, setStatus ] = useState('Подтвердить заказ');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      phone: '',
    },
    "validateOnChange": false,
    validate,
    
    onSubmit: values => {
      const {firstName,phone,} = values;
      const data = {
        user_firstname: firstName,
        user_phone: phone,
        products: store.products
      }
      api.sendFastBuy(data).then(data => {
        setStatus("Заказ подтвержден")
      });
    },
  });


  useEffect(() => {
    if (status === "Заказ подтвержден") {
      const timer = setTimeout(() => {
        setStatus('Подтвердить заказ');
        router.push('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className={style.form}>
      <Succes  text={status} />
      <h2>Оформление заказа</h2>
      <h3>Информация о получателе:</h3>
      <form onSubmit={formik.handleSubmit}>
        <input
          placeholder="Имя"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div className={style.errors}>{formik.errors.firstName}</div> : null}

        <h3>Телефон:</h3>
        <div className={style.phone}>
          <input disabled value="+38" />
          <MaskedInput
            mask={phoneNumberMask}
            id="phone"
            name="phone"
            type="phone"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          
        </div>
        {formik.errors.phone ? <div className={style.errors}>{formik.errors.phone}</div> : null}

        <div className={style.sum}>
          <div>К оплате</div>
          <div>{store.sum} грн</div>
        </div>

        <div className={style.btn}>
          <ButtonForm text={status} />
        </div>
      </form>
    </div>
  );
};

export default FastBuy;