import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="mainMain">
      <section className="mainService">
        <div className="sousService">
          <h2>Buy, Sell & Swap Cryptocurrency</h2>
          <p>
            Trust our secure platform for a seamless experience. Buy
            cryptocurrency with ease from our user-friendly platform and enjoy
            super fast transaction with competitive rates
          </p>
          <p>
            Sell your crypto coins at a valued rate to get your fiat account
            credited straight away. Say no to pending or failed transactions.
          </p>
          <p>
            Swap between crypto coins without necessarily having to make use of
            Fiat. It’s easy, fast and seamless. It’s just
            Crypto-to-Crypto/Coin-to-Coin transaction.
          </p>
          <button type="button" className="btn">
            <Link to="">Start Trading Now</Link>
          </button>
        </div>
        <div className="orange">
          <img
            src="https://apexnetwork.co/images/services/crypto.webp"
            alt="orange"
            className="logo-orange"
          />
        </div>
      </section>
      <section className="mainService1">
        <div className="orange1">
          <img
            src="https://apexnetwork.co/images/services/gift-card.webp"
            alt="orange"
            className="logo-orange"
          />
        </div>
        <div className="sousService1">
          <h2>Buy and Sell Gift Cards at the Best Rates</h2>
          <p>
            Exchanging your gift cards for cryptocurrency/fiat is easier than
            what you think. It only takes a few clicks to do this while you get
            credited in a minute.
          </p>
          <p>
            Here to buy your favourite gift cards? get it done in simple steps
            and get your cards in your inbox.
          </p>
          <button type="button" className="btn1">
            <Link to="">Transact Now</Link>
          </button>
        </div>
      </section>

      <section className="mainService2">
        <div className="sousService2">
          <h2>Pay Bills with Ease</h2>
          <p>
            Say hello to a hassle-free experience as you effortlessly pay your
            bills with just a few clicks. Sort your cable bills, airtime and
            data subscription with cryptocurrencies or fiat.
          </p>

          <button type="button" className="btn2">
            <Link to="">Pay Bills</Link>
          </button>
        </div>
        <div className="orange2">
          <img
            src="https://apexnetwork.co/images/services/payments.webp"
            alt="orange"
            className="logo-orange"
          />
        </div>
      </section>
    </main>
  );
}

export default Services;
