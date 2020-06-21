import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Components/header/Header";
import Details from "./Pages/Details";
import Order from "./Pages/Order";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import AdminPage from "./Pages/Admin";
import Home from "./Pages/Home";
import Social from "./Components/social/index";
import Login from "./Pages/Login";
import Footer from "./Components/footer/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="content-wrap">
          <Header users={this.props.users}/>
          <Switch>
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/order" component={Order} />
            <Route path="/details/:details_id" component={Details} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
            <Redirect to="/catalog" />
          </Switch>
          <Social/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  users: state.users.users,
  };
};

export default connect(mapStateToProps)(App);
