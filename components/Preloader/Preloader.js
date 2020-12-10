import style from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <div>
        <svg viewBox="0 0 33 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.765685 58.548L8.30382 62.9053V41.4025L19.8742 31.0139V26.0037L0.765685 8.66812V19.1653L11.4961 28.5094L0.765685 37.8529V58.548ZM9.0695 64.2316L0 58.9893V37.5045L10.3305 28.5094L0 19.5136V6.94008L20.6399 25.6643V31.3551L9.0695 41.7443V64.2316Z" fill="#2B2B2A"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M28.5618 33.4934V31.1844V25.8336V23.7284V21.9506L3.11607 -6.10352e-05L0.382507 2.45289V7.80369L8.61977 15.2765L8.68693 15.4629L20.2567 25.9595V31.1844H20.2573L13.0256 37.678L8.68693 41.7439V63.5686L16.9901 58.7694V45.1556L28.5618 35.0788V33.4934Z" fill="#2B2B2A"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24.6696 50.4927V60.5857V71.9121L32.9734 64.6816V54.9393V43.2622L24.6696 50.4927Z" fill="#2B2B2A"/>
        </svg>
      </div>
    </div>
  )
};

export default Preloader;