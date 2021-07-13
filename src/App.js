import React from "react";
import "./App.css";
import Banner from "./compo/Banner";
import Facility from "./compo/Facility";
import Header from "./compo/Header";
import "animate.css/animate.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./compo/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <div className="app">
            <Header />
            <Banner
              title="Welcome to Prime Video"
              description="Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals"
              button="Login to join Prime"
              url="img/banner-1.jpg"
            />
            <Banner
              title="Great Entertainment"
              description="With your Prime membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more."
              button="Get Started"
              url="img/banner-2.jpg"
              right={true}
            />
            <Banner
              title="One membership, many benefits "
              description="Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more. "
              button="Get Started"
              url="img/banner-3.jpg"
            />
            <Banner
              title="Even better with Fire TV Stick "
              description="The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds. "
              button="Get Started"
              url="img/banner-4.jpg"
              right={true}
            />
            <Facility />
            <Banner
              title="Family Friendly "
              description="With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem. "
              button="Get Started"
              url="img/banner-5.jpg"
            />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
