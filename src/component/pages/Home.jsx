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
    <main className="mainMain">
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
        <div className="mainParent">
          <div className="getStarted">
            <div>
              <h1>Get started in Minutes</h1>
              <p>
                The most trustworthy cryptocurrency exchange platform available.
              </p>
            </div>
            <div className="listItem">
              <div className="sousItem">
                <ul>
                  <li class="flex gap-4 items-center font-semibold">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                        fill="#FEE2C0"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9458 8.62169L11.5925 16.6834L9.3758 14.315C8.96747 13.93 8.3258 13.9067 7.85913 14.2334C7.40413 14.5717 7.2758 15.1667 7.5558 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                        fill="#FB8E0B"
                      ></path>
                    </svg>{" "}
                    Swift Transactions
                  </li>
                  <li class="flex gap-4 items-center font-semibold">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                        fill="#FEE2C0"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9458 8.62169L11.5925 16.6834L9.3758 14.315C8.96747 13.93 8.3258 13.9067 7.85913 14.2334C7.40413 14.5717 7.2758 15.1667 7.5558 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                        fill="#FB8E0B"
                      ></path>
                    </svg>{" "}
                    Secured &amp; Safe Payments
                  </li>
                  <li class="flex gap-4 items-center font-semibold">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                        fill="#FEE2C0"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9458 8.62169L11.5925 16.6834L9.3758 14.315C8.96747 13.93 8.3258 13.9067 7.85913 14.2334C7.40413 14.5717 7.2758 15.1667 7.5558 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                        fill="#FB8E0B"
                      ></path>
                    </svg>{" "}
                    Instant Withdrawal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="div-parent">
            <img
              src="https://apexnetwork.co/_nuxt/main.634782cc.webp"
              className="phone-image"
              alt="phone"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
