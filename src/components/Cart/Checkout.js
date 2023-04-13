import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  // const [details, setDetails] = useState({
  //   name: "",
  //   street: "",
  //   postal: "",
  //   city: "",
  // });

  // const detailsChangeHandler = (event) => {
  //   setDetails((prev) => {
  //     return {
  //       ...prev,
  //       [event.target.id]: event.target.value,
  //     };
  //   });
  // };

  const confirmHandler = (event) => {
    event.preventDefault();

    // const enteredName = details.name;
    // const enteredStreet = details.street;
    // const enteredPostalCode = details.postal;
    // const enteredCity = details.city;

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    console.log({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={nameControlClasses}
      >
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          // value={details.name}
          // onChange={detailsChangeHandler}
        />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={streetControlClasses}
      >
        <label htmlFor="street">Street</label>
        <input
          ref={streetInputRef}
          type="text"
          id="street"
          // value={details.street}
          // onChange={detailsChangeHandler}
        />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={postalCodeControlClasses}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          ref={postalCodeInputRef}
          type="text"
          id="postal"
          // value={details.postalCode}
          // onChange={detailsChangeHandler}
        />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div
        className={cityControlClasses}
      >
        <label htmlFor="city">City</label>
        <input
          ref={cityInputRef}
          type="text"
          id="city"
          // value={details.city}
          // onChange={detailsChangeHandler}
        />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
