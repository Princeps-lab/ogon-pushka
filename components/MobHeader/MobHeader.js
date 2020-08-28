import style from './mobHeader.module.css';

const MobHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.burger}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z" fill="black"/>
        </svg>
      </div>

      <div className={style.heart}>
        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.9131 0.495075C14.702 0.168228 15.5474 0 16.4013 0C17.2551 0 18.1006 0.168229 18.8894 0.495075C19.6781 0.821861 20.3947 1.30081 20.9982 1.90455C21.602 2.5081 22.0813 3.22501 22.408 4.01368C22.7349 4.80249 22.9031 5.64797 22.9031 6.50183C22.9031 7.35568 22.7349 8.20116 22.408 8.98997C22.0812 9.77872 21.6022 10.4953 20.9984 11.0989C20.9983 11.099 20.9985 11.0989 20.9984 11.0989L12.1584 19.9389C11.7679 20.3295 11.1347 20.3295 10.7442 19.9389L1.90418 11.0989C0.684956 9.8797 0 8.22607 0 6.50183C0 4.77758 0.684956 3.12395 1.90418 1.90472C3.12341 0.68549 4.77704 0.000534773 6.50129 0.000534773C8.22554 0.000534773 9.87917 0.68549 11.0984 1.90472L11.4513 2.25761L11.804 1.90488C11.8041 1.90483 11.804 1.90494 11.804 1.90488C12.4076 1.30106 13.1244 0.821892 13.9131 0.495075ZM16.4013 2C15.8102 2 15.2248 2.11647 14.6787 2.34274C14.1326 2.56902 13.6365 2.90068 13.2186 3.31877L12.1584 4.37893C11.7679 4.76946 11.1347 4.76946 10.7442 4.37893L9.68418 3.31893C8.84003 2.47478 7.69511 2.00053 6.50129 2.00053C5.30747 2.00053 4.16255 2.47478 3.3184 3.31893C2.47424 4.16309 2 5.30801 2 6.50183C2 7.69564 2.47424 8.84056 3.3184 9.68472L11.4513 17.8176L19.5842 9.68472C20.0023 9.26683 20.3341 8.77049 20.5604 8.22439C20.7866 7.67828 20.9031 7.09295 20.9031 6.50183C20.9031 5.9107 20.7866 5.32537 20.5604 4.77926C20.3341 4.23316 20.0024 3.73699 19.5843 3.3191C19.1665 2.90101 18.67 2.56902 18.1239 2.34274C17.5778 2.11647 16.9924 2 16.4013 2Z" fill="black"/>
        </svg>

      </div>
    </div>
  )
};

export default MobHeader;