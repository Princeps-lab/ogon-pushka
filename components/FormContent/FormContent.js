import React, {useContext} from 'react';
import {ProductsContext} from '../../context/context.js';
import { useFormik } from 'formik';
import ButtonForm from '../ButtonForm';
import style from './FormContent.module.css';
import MaskedInput from "react-text-mask";

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Это обязательное поле.';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Должно быть не более 15 символов';
  }

  if (!values.lastName) {
    errors.lastName = 'Это обязательное поле.';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Должно быть не более 20 символов';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.email.length !== 0) {
    errors.email = 'Введите правильный e-mail (например, imya@gmail.com)';
  }

  if (!values.phone) {
    errors.phone = 'Это обязательное поле.';
  } else if (values.phone.length != 14) {
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

const FormContent = () => {
  const store = useContext(ProductsContext);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: ''
    },
    "validateOnChange": false,
    "validateOnBlur": true,
    validate,
    
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={style.form}>
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
        <input
          placeholder="Фамилия"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div className={style.errors}>{formik.errors.lastName}</div> : null}
        <input
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div className={style.errors}>{formik.errors.email}</div> : null}


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
        
          <h3>Комментарий:</h3>
          <textarea
          id="comment"
          name="comment"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comment}
          />

        <div className={style.sum}>
          <div>К оплате</div>
          <div>{store.sum} грн</div>
        </div>

        <div className={style.btn}>
          <ButtonForm />
        </div>
      </form>
    </div>
  );
};

export default FormContent;