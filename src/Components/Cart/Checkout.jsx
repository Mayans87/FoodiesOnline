import { useFormik } from "formik";
import classes from "./Checkout.module.css";
import { formSchema } from "./formSchema";

const Checkout = (props) => {
  const { values, handleSubmit, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      postal: "",
      street: "",
      city: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch(
        "https://http-project-655d6-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      console.log(values);
    },
  });
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={values.street}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.street && <p style={{color:'red'}}>{errors.street}</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          name="postal"
          value={values.postal}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.postal && <p style={{color:'red'}}>{errors.postal}</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={values.city}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.city && <p style={{color:'red'}}>{errors.city}</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
