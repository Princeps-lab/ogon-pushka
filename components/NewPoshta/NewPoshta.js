import React, { useState, useEffect } from "react";

import style from './newPoshta.module.css';

const getCities = async () => {
  const response = await fetch("/api/cities");
  return await response.json();
};

const getWarehouses = async (city) => {
  if (!city)
    throw "Нужно передать название города (на русском или украинском) или Ref";

  const response = await fetch(
    `/api/warehouses?city=${city}`
  );
  return await response.json();
};

const Search = ({items, placeholder, id, name, change, setCity}) => {

  const [ value, setValue ] = useState('');
  const [ arr, setArr ]     = useState(items);
  const [ show, setShow ]   = useState(false);
 
  useEffect(() => {
    if ( value.length === 0) {
      return setArr(items);
    }
    const newArr = items.filter((item) => item.DescriptionRu.indexOf(value) > -1);
    setArr(newArr);
  }, [value]);
  return (
    <div>
      <input
        autoComplete="off" 
        placeholder={placeholder}
        id={id}
        name={name}
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
        onFocus={() => {
          setShow(true);
          setCity()
        }}
        />

        {
          show && arr.length > 2 ? 
          <div className={style.select}>
            {arr.map(item => <div
                key={item.CityID}
                onClick={() => {
                setValue(item.DescriptionRu);
                change(item.DescriptionRu);
                setShow(false);
              }}>{item.DescriptionRu}</div>)}
          </div> : null
        }
    </div>
  )
};

const SearchWr = ({items, placeholder, id, name, change}) => {

  const [ value, setValue ] = useState('');
  const [ arr, setArr ]     = useState(items);
  const [ show, setShow ]   = useState(true);
  useEffect(() => {
    if ( value.length === 0) {
      return setArr(items);
    }
    const newArr = items.filter((item) => item.DescriptionRu.indexOf(value) > -1);
    setArr(newArr);
  }, [value]);

  return (
    <div>
      <input
        autoComplete="off" 
        placeholder={placeholder}
        id={id}
        name={name}
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
        onFocus={() => setShow(true)}
        />

        {
          show ? 
          <div className={style.select}>
            {arr.map(item => <div
              key={item.SiteKey}
              onClick={() => {
              setValue(item.DescriptionRu);
              change(item.DescriptionRu);
              setShow(false);
              }}>{item.DescriptionRu}</div>)}
          </div> : null
        }
    </div>
  )
};

export default function NewPoshta({changeDeliveryUserCity,changeDeliveryUserWarehouse}) {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [warehouse, setWarehouse] = useState(null);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getCities().then(({ data }) => {
      setCities(data);
    });
  }, []);

  useEffect(() => {
    changeDeliveryUserCity(city);
  }, [city]);

  useEffect(() => {
    changeDeliveryUserWarehouse(warehouse);
  }, [warehouse]);

  useEffect(() => {
    if (city) {
      getWarehouses(city).then(({ data }) => {
        setWarehouses(data);
      });
    } else {
      setWarehouses([]);
    }
  }, [city]);

  const changeCity = (city) => {
    setCity(city);
  };
  const changeWarehouse = (warehouse) => setWarehouse(warehouse);
  return (
    <div>
      <Search setCity={() => setWarehouses([])} placeholder='Оберіть місто' items={cities} name="city" id="city" change={changeCity} />
      {
        warehouses.length ? <SearchWr  items={warehouses} placeholder='Выберите отделение' name="warehouses" id="warehouses" change={changeWarehouse}  /> : null
      }
    </div>
  );
}
