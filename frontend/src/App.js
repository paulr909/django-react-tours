import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { AppContext } from "./AppContext";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import List from "./pages/List";
import ServiceApi from "./services/ServiceApi";
import AppSidebar from "./AppSidebar";
import CartLink from "./components/CartLink";
import Help from "./pages/Help";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: [],
      booking: {
        name: "",
        email_address: "",
        street_address: "",
        city: "",
      },
      item: null,
      handleToggleWishList: this.handleToggleWishList.bind(this),
      handleUpdate: this.handleUpdate.bind(this),
      handleOrder: this.handleOrder.bind(this),
      handleClearOrder: this.handleClearOrder.bind(this),
      handlePlaceOrder: this.handlePlaceOrder.bind(this),
    };
    ServiceApi.retrieveWishList().then((data) => {
      this.setState({ wishList: data });
    });
  }

  handleToggleWishList(itemId) {
    let toggle;
    if (this.state.wishList.includes(itemId)) {
      toggle = ServiceApi.wishListDelete(itemId);
    } else {
      toggle = ServiceApi.wishListAdd(itemId);
    }
    toggle.then(() => {
      ServiceApi.retrieveWishList().then((data) => {
        this.setState({ wishList: data });
      });
    });
  }

  handleUpdate(field, value) {
    const { booking } = this.state;
    booking[field] = value;
    this.setState({ booking });
  }

  handleOrder(item) {
    return new Promise((resolve) => {
      ServiceApi.wishListCartStatus(item.id, true).then(() => {
        this.setState({ item });
        resolve(item);
      });
    });
  }

  handleClearOrder(itemId) {
    return new Promise((resolve) => {
      ServiceApi.wishListCartStatus(itemId, false).then(() => {
        this.setState({ item: null });
        resolve();
      });
    });
  }

  handlePlaceOrder() {
    const { booking, item } = this.state;
    const bookingData = { ...booking };
    bookingData.package = item.id;

    return new Promise((resolve, reject) => {
      ServiceApi.createBooking(bookingData)
        .then(() => {
          this.setState({ item: null });
          resolve();
        })
        .catch((validationErrors) => {
          reject(validationErrors);
        });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="App-nav">
            <div className="App-nav__main">
              <NavLink to="/">Explore our tours</NavLink>
              <NavLink to="/help">Help</NavLink>
              <CartLink booking={this.state.booking} />
            </div>
          </nav>
          <AppSidebar />
          <section className="App-content">
            <AppContext.Provider value={this.state}>
              <Route path="/" exact component={List} />
              <Route path="/details/:id" component={Details} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/help" component={Help} />
            </AppContext.Provider>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
