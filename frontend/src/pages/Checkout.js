import React from "react";
import { AppContext } from "../AppContext";
import { FormFieldHook } from "../components/form/FormField";
import OnHold from "../components/OnHold";
import "./Checkout.css";
// import { withFieldValidation } from "../components/form/FieldValidation";

// const ValidatedField = withFieldValidation(FormFieldUsingHooks);

export default class Checkout extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = { validationErrors: [], orderPlaced: false };
  }

  handlePlaceOrder() {
    this.context
      .handlePlaceOrder()
      .then(() => {
        this.setState({ validationErrors: [], orderPlaced: true });
      })
      .catch((validationErrors) => {
        this.setState({ validationErrors, orderPlaced: false });
      });
  }

  render() {
    const { booking, item, handleUpdate, clearOrderItem } = this.context;
    const { validationErrors, orderPlaced } = this.state;
    const inputFields = [
      { label: "Name", name: "name" },
      { label: "Email Address", name: "email_address" },
      { label: "Street Address", name: "street_address" },
      { label: "City", name: "city" },
    ];
    if (orderPlaced) {
      return (
        <section className="Checkout">
          <header className="Checkout-header">
            <h2>Checkout</h2>
            <h3>Thanks for buying an excursion with Explore California!</h3>
          </header>
        </section>
      );
    }
    const errors = [];
    inputFields.forEach((field) => {
      const error = validationErrors[field.name];
      if (error) {
        errors.push(
          <li className="error" key={field.name}>
            {field.label}: {error}
          </li>
        );
      }
    });
    const formFields = inputFields.map((fieldProps) => {
      return (
        <FormFieldHook
          key={fieldProps.name}
          value={booking[fieldProps.name]}
          onUpdate={handleUpdate}
          {...fieldProps}
        />
      );
    });
    let displayItem;
    if (item) {
      displayItem = (
        <div>
          {item.name} - ${item.price} starts on {item.start} for{" "}
          {item.tour_length} days.&nbsp;
          <button
            className="Checkout-package-remove"
            onClick={() => clearOrderItem(item.id)}
          >
            Remove
          </button>
        </div>
      );
    }
    return (
      <section className="Checkout">
        <header className="Checkout-header">
          <h2>Checkout</h2>
        </header>
        <section className="Checkout-summary">
          {item && <OnHold duration={59} />}
          {displayItem}
        </section>
        <section className="Checkout-form">
          <form>
            <ul>{errors}</ul>
            {formFields}
          </form>
        </section>
        <section className="Checkout-actions">
          <div className="Checkout-actions__next">
            <button
              onClick={this.handlePlaceOrder.bind(this)}
              disabled={item === null}
            >
              Place order
            </button>
          </div>
        </section>
      </section>
    );
  }
}
