import { useFormik } from 'formik';
import WindowForm from '../WindowForm/WindowForm';
import style from './BuyForm.module.css';

const BuyForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <WindowForm>
      <div className={style.form}>
        <div className={style.close}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.49863 5.25252L12.5565 0.402389C13.1171 -0.13413 14.0221 -0.13413 14.5806 0.402389C15.139 0.938908 15.139 1.80592 14.5806 2.34244L9.20198 7.49971L14.5812 12.6576C15.1396 13.1941 15.1396 14.0611 14.5812 14.5976C14.0228 15.1341 13.1177 15.1341 12.5593 14.5976L7.50138 9.74748L2.44345 14.5976C1.88289 15.1341 0.977855 15.1341 0.41943 14.5976C-0.138995 14.0611 -0.138995 13.1941 0.41943 12.6576L5.79802 7.50029L0.418819 2.34244C-0.139606 1.80592 -0.139606 0.938908 0.418819 0.402389C0.977244 -0.13413 1.88228 -0.13413 2.4407 0.402389L7.49863 5.25252Z" fill="#141414"/>
          </svg>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </WindowForm>
  );
};

export default BuyForm;