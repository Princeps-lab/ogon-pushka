import React, {useContext, useState} from 'react';
import {ProductsContext} from '../../context/context.js';
import { useFormik } from 'formik';
import ButtonForm from '../ButtonForm';
import style from './FormContent.module.css';
import MaskedInput from "react-text-mask";
import NewPoshta from '../NewPoshta';
import Liqpay from '../Liqpay';

import apiOrder from '../../api/apiOrder';
const api = new apiOrder();

const Select = ({items, changeItem}) => {

  const [ select, setSelect] = useState(items[0]);
  const [ show, setShow ] = useState(false);

  return (
    <div className={style.select}
      onMouseLeave={() => setShow(false)}>
      <div onClick={() => setShow(!show)} className={style.selecTtitle}>
        <span>{select.name}</span>
        <div>
          <svg width="12" height="6" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.81475 0.1875C6.55375 -0.0625 6.13075 -0.0625 5.86875 0.1875L3.50475 2.4475L1.14075 0.1875C0.87975 -0.0625 0.45675 -0.0625 0.19575 0.1875C-0.06525 0.4375 -0.06525 0.8415 0.19575 1.0915L3.03275 3.8035C3.29375 4.0515 3.71675 4.0515 3.97775 3.8035L6.81475 1.0915C7.07575 0.8415 7.07575 0.4375 6.81475 0.1875Z" fill="#999"/>
          </svg>
        </div>
      </div>
      {
        show ?
        <div className={style.list}>
          {
            items.map(item => {
              return <div onClick={() => {
                setShow(false);
                setSelect(item);
                changeItem(item);
              }} key={item.id}>{item.name}</div>
            })
          }
        </div> : null
      }
    </div>
  )
};

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

const FormContent = () => {
  const deliverys = [
    {name : "Новая Почта", id: 0},
    {name : "Укр Почта", id: 1}
  ];

  const buyes = [
    {
      name: "Liqpay",
      id: 0
    },
    {
      name: "Наложенный платеж",
      id: 1
    },
  ]

  const store = useContext(ProductsContext);
  const [ city, setCity ]           = useState('');
  const [ warehouse, setWarehouse ] = useState('');
  const [ buyed, setBuyed ] = useState(false);
  const [ orderId, setOrderId ] = useState(null);
  const [ delivery, setDelivery ] = useState(deliverys[0]);
  const [ methodBuy, setMethodBuy ] = useState(buyes[0]);
  const [ status, setStatus ] = useState('Подтвердить заказ');
  const changeDelivery = (item) => setDelivery(item);
  const changeBuy = (item) => setMethodBuy(item);
  const changeDeliveryUserCity = (city) => setCity(city);
  const changeDeliveryUserWarehouse = (warehouse) => setWarehouse(warehouse);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: '',
      delivery: {
        city,
        warehouse
      },
    },
    "validateOnChange": false,
    "validateOnBlur": true,
    validate,
    onSubmit: values => {
      const {firstName,lastName,email,phone,comment} = values;
      const data = {
        user_firstname: firstName,
        user_lastname: lastName,
        user_email: email,
        user_phone: phone,
        user_comment: comment,
        products: store.products,
        delivery_city: city,
        delivery_warehouse: warehouse,
        payment_type: methodBuy.name,
        total: String(store.sum)
      }
      api.sendBuy(data).then(request => {
        setOrderId(request.id)
        setStatus('Заказ подтвержден');
        setBuyed(true);
      });
    }
  });

  return (
    <div className={style.form}>
      <h2>Оформление заказа</h2>
      <h3>Информация о получателе:</h3>
      <form onSubmit={formik.handleSubmit}>
        <input
          autoComplete="off"
          placeholder="Имя"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div className={style.errors}>{formik.errors.firstName}</div> : null}
        <input
          autoComplete="off"
          placeholder="Фамилия"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div className={style.errors}>{formik.errors.lastName}</div> : null}
        <input
          autoComplete="off"
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
          <input disabled value="+38" autoComplete="off" />
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

        <h3>Доставка:</h3>

        <Select items={deliverys} changeItem={changeDelivery} />

        {delivery.id === 0 ? <NewPoshta
          changeDeliveryUserCity={changeDeliveryUserCity}
          changeDeliveryUserWarehouse={changeDeliveryUserWarehouse}
         /> : null}
        
        <h3>Оплата:</h3>

        <Select items={buyes} changeItem={changeBuy} />

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
          <ButtonForm text={status} />
        </div>
      </form>
      {buyed && orderId ? <Liqpay orderId={orderId} amount={String(store.sum)} /> : null}
    </div>
  );
};

export default FormContent;