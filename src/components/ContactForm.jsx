import React from "react";
import styles from "./ContactForm.module.css";
import ContactButtton from "./ContactButtton";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <ContactButtton
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={24} />}
          />
          <ContactButtton text="VIA CALL" icon={<FaPhoneAlt fontSize={24} />} />
        </div>
        <ContactButtton
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={24} />}
        />

        <form>
          <div className={styles.form_ctr}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_ctr}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_ctr}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows='8'/>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <ContactButtton text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
