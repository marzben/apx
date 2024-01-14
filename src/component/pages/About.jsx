import React from "react";

function About() {
  return (
    <main className="mainSectionAbout">
      <section className="mainRates">
        <div className="sousRates">
          <div className="mainDivCol">
            <h5>Who We Are</h5>
            <div className="divCol-1">
              <p>WE TRADE CRYPTO</p>
              <img
                src="https://apexnetwork.co/images/coins-bg-background.webp"
                alt="para"
              />
            </div>
            <div className="divCol-2">
              <p>CURRENCY</p>
              <img
                src="https://apexnetwork.co/images/giftcard-bg-background.webp"
                alt="currency"
              />
              <p>AND</p>
              <p>GIFT CARD EXCHANGES</p>
            </div>
            <div className="divCol-3">
              <p>
                Apex Network is a financial technology firm that provides a wide
                range of digital asset commerce, such as cryptocurrency and gift
                card exchanges, as well as other digital financial transactions.
              </p>
              <img
                src="https://apexnetwork.co/_nuxt/logo-white.2bd606f6.png"
                alt="apx"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mainRates-1">
        <div className="mainDivAbout">
          <div className="person">
            <img
              src="https://apexnetwork.co/_nuxt/ceo.ad8ed6f3.png"
              alt="person"
              className="person-img"
            />
          </div>
          <div className="sousRates-1">
            <h2>Our Story</h2>
            <p>
              We have spent the last years building a dream, not only ours but
              yours as well, a dream of streamlining cryptocurrency adoption and
              ownership in the simplest means for everyone and anyone. We have
              evolved over the years growing to a user community from thousands
              to tens of thousands and we know you should be a part of us.
            </p>
          </div>
        </div>
      </section>

      <section className="mainRates2">
        <div className="sousRates2">
          <h2>What we do (Value proposition/Mission)</h2>
          <p>
            Every day, we saddle ourselves with the responsibility of providing
            a swift and dependable cryptocurrency solution to you. When you
            think of how to get value for your digital currencies, we understand
            your needs and provide the best platform for your safe, reliable and
            secured digital currency transactions, exchanges and many more
          </p>
        </div>
        <div className="orangeRate2">
          <img
            src="https://apexnetwork.co/_nuxt/phone-btc.91abdcec.webp"
            alt="orange"
            className="logo-orangeRates"
          />
        </div>
      </section>
      <section>
        <div>
          <div>
            <img
              src="https://apexnetwork.co/_nuxt/reliability.ed74964b.png"
              alt="cell"
            />
          </div>
          <div>
            <h4>Reliability</h4>
            <p>
              We understand the importance of providing solutions that you can
              count on.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>Our Values</h4>
            <p>
              Our team is IGNITED, with us you see a fine blend of innovation,
              ingenuity and hard work, because we want to provide you with
              efficient and dependable solutions. Our culture of Transparency,
              credibility and reliability heralds our business success.
            </p>
          </div>
          <div>
            <div>
              <img
                src="https://apexnetwork.co/_nuxt/our-values.5632f999.png"
                alt="manager"
              />
            </div>
            <div>
              <div>
                <h5>Transparency</h5>
                <p>
                  We value your trust, which is why we strive to keep you
                  informed at every step of the way.
                </p>
              </div>
              <div>
                <h5>Credibility</h5>
                <p>
                  We take pride in our track record of delivering exceptional
                  results and earning the trust of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
