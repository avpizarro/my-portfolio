import cl from 'classnames';
import kwesforms from 'kwesforms';
import { useEffect } from 'react';

import styles from './index.module.scss';

const Contact = () => {
  useEffect(() => kwesforms.init(), []);

  return (
    <>
      <form
        id="contact"
        className={'kwes-form'}
        action="https://kwesforms.com/api/foreign/forms/wdaT9viw8Zn3uML7gxC3"
      >
        <input type="hidden" name="_subject" value="Portfolio Contact" />
        <div className={styles.contact}>
          <div className={cl(styles.form, styles.div, styles.formName)}>
            <h3>Contact</h3>
          </div>
          <div className={cl(styles.form, styles.div)}>
            <input
              type="text"
              id="email"
              name="email"
              className={cl(styles.form__input)}
              style={{ border: '2px solid #000' }}
              autoComplete="off"
              placeholder=" "
              data-kw-rules="required|email"
            />
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
          </div>
          <div className={cl(styles.form, styles.div, styles.message)}>
            <textarea
              type="text"
              id="message"
              name="message"
              className={cl(styles.form__input)}
              style={{ border: '2px solid #000' }}
              autoComplete="off"
              placeholder=" "
              data-kw-rules="required|min:2"
            />
            <label htmlFor="message" className={styles.form__label}>
              Message
            </label>
          </div>
          <div className={cl(styles.form, styles.div, styles.buttonContainer)}>
            <button type="submit" className={styles.form__button}>
              SEND
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
