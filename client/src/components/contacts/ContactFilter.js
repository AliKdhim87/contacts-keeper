import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const contactcontext = useContext(ContactContext);

  const text = useRef("");
  const { clearFilter, filterContact, filtered } = contactcontext;
  const onChange = e => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};
export default ContactFilter;
