import React, {useContext} from 'react';
import style from './WindowForm.module.css';
import { ProductsContext } from '../../context/context.js';

const WindowForm = ({children}) => {
  const store = useContext(ProductsContext);
  return (
    <>
      { store.showForm ?
        <div className={style.window}>
          <div className={style.content}>
            {children}
          </div>
        </div> : null
      }
    </>
  )
};

export default WindowForm;