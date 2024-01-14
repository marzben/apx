import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".mainSection");
      const header = document.querySelector(".mainHeader");
      if (section && header) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 0) {
          header.dispatchEvent(new CustomEvent("scrollToTop"));
        } else {
          header.dispatchEvent(new CustomEvent("scrollToTransparent"));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="divCol-1">
            <h1>
              Trade Crypto in <span>another</span>
              <span>Dimension</span>
            </h1>
            <p>
              Simplify your Crypto journey: Buy, sell and swap cryptocurrencies
              with more possibilities
            </p>
            <div className="iconSection">
              <h5>Supports 30+</h5>
              <ul className="icon">
                <li>
                  <img
                    src="https://apexnetwork.co/images/crypto_logo/BTC.png"
                    alt="btc"
                  />
                </li>
                <li>
                  <img
                    src="https://apexnetwork.co/images/crypto_logo/USDT.png"
                    alt="usdt"
                  />
                </li>
                <li>
                  <img
                    src="https://apexnetwork.co/images/crypto_logo/ETH.png"
                    alt="usd"
                  />
                </li>
                <li>
                  <img
                    src="https://apexnetwork.co/images/crypto_logo/USD.png"
                    alt="usd"
                  />
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="divCol-2">
            <img
              src="https://apexnetwork.co/images/hero_section/main.webp"
              alt="app"
              className="phone-img"
            />
          </div>
        </div>
      </section>
      <section className="sectionOther">
        <div className="textStyle">
          <h3>We have more Solutions for you</h3>
          <p>
            We understand that your financial needs go beyond buying and selling
            crypto. Explore more possibilities here. Exchange your gift cards,
            pay utility bill, and swift airtime recharge.
          </p>
        </div>
        <div className="div-container">
          <div className="tradeDiv">
            <h2>Trade Cryptocurrency</h2>
            <p className="para">
              We offer wide a variety of cryptocurrencies to choose from. Buy,
              Sell, & Swap with ease.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="sousCard">
            <div className="card1">
              <h1>Exchange Gift Cards</h1>
              <p className="card-para">
                Buy & Sell all forms of gift cards on the go and get your wallet
                funded in no time!
              </p>
            </div>
            <div className="card2">
              <h1>Pay Utility Bills</h1>
              <p className="card-para">
                With just a few clicks, pay your cable bills, airtime and data
                subscription, all with cryptocurrencies or local currency/fiat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionOther2">
        <h1>Get started in Minutes</h1>

        <div className="div-parent">
          <p>
            The most trustworthy cryptocurrency exchange platform available.
          </p>
          <div>
            <div></div>
          </div>
          <div>
            <img
              src="https://apexnetwork.co/_nuxt/main.634782cc.webp"
              className="phone-image"
              alt="phone"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
