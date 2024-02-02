import React, { useState } from "react";

const Rates = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [numberOfCards, setNumberOfCards] = useState(1);
  const [rate, setRate] = useState(0.0);

  const [totalPayout, setTotalPayout] = useState(0);
  const calculateTotalPayout = () => {
    return (amount * numberOfCards * rate).toFixed(2);
  };

  return (
    <main className="RateMainSection">
      <section className="mainSectionRates">
        <div class="mx-auto py-14 max-w-2xl text-center">
          <h2 class="text-2xl md:text-4xl font-bold leading-7 text-header">
            What's the Buzz in the Market?
          </h2>
        </div>
        <div className="w-custom-width h-custom-height bg-sky-50 divide-slate-200 rounded-lg">
          <div className="flex justify-between py-8 px-6 bg-orange-200 mb-5">
            <div class="text-lg font-semibold">Gift Card Calculator</div>
            <div
              role="tablist"
              aria-orientation="horizontal"
              class="flex gap-3 rounded-xl p-1"
            >
              <button
                class="capitalize text-primary-1 underline"
                id="headlessui-tabs-tab-25"
                role="tab"
                aria-selected="true"
                tabindex="0"
                type="button"
                aria-controls="headlessui-tabs-panel-27"
              >
                Sell
              </button>
              <button
                class="capitalize text-content-3 hover:bg-white/[0.12] hover:text-primary"
                id="headlessui-tabs-tab-26"
                role="tab"
                aria-selected="false"
                tabindex="-1"
                type="button"
                aria-controls="headlessui-tabs-panel-36"
              >
                Buy
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-evenly ">
              <div>
                <label
                  for="countries_disabled"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gift Card
                </label>
                <select
                  disabled
                  id="countries_disabled"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-select-width h-select-height p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <label
                  for="countries_disabled"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Currency
                </label>
                <select
                  disabled
                  id="countries_disabled"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-select-width h-select-height p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center flex-col content-center m-8">
              <label
                for="countries_disabled"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card Type
              </label>
              <select
                disabled
                id="countries_disabled"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-select-width-1 h-select-height p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Type</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="block space-y-4 md:flex md:items-center md:gap-4 m-5">
            <div className="border border-neutral-4 p-4 space-y-3 rounded-2xl">
              <label
                class="text-sm font-semibold block text-header"
                for="amount"
              >
                Enter Amount
              </label>
              <div className="flex items-center gap-2">
                <span class="px-3 py-2 font-medium rounded-lg text-content-3 bg-gray-3">
                  USD
                </span>
                <div className="flex-1">
                  <input
                    value="0"
                    class="text-2xl border-none rounded-md w-full text-header font-semibold"
                    inputmode="numeric"
                    name="amount"
                    type="tel"
                  />
                </div>
              </div>
            </div>
            <div className="md:mx-auto inline-block max-w-md">
              <p class="block text-sm mb-2 lg:mb-3 font-medium text-header">
                No of cards?
              </p>
              <div className="flex flex-none relative border border-gray-300 dark:border-dark focus-within:outline-none focus-within:ring-primary-1 focus-within:border-primary-2 transition duration-150 ease-in-out rounded-xl shadow-sm overflow-hidden">
                <button class="px-4 border-r dark:border-dark dark:text-dark-white">
                  {" "}
                  -{" "}
                </button>
                <div class="p-4 px-6 dark:text-dark-white">1</div>
                <button class="px-4 border-l dark:border-dark dark:text-dark-white">
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-gray-3 grid gap-2 rounded-lg p-3">
              <div class="flex justify-between items-center">
                <p class="text-xs text-content-3 font-light">Rate</p>
                <p class="text-sm font-bold">₦0.00/USD</p>
              </div>
              <div class="flex justify-between items-center">
                <p class="text-xs text-content-3 font-light">Total Payout</p>
                <p class="text-xl font-semibold text-primary-1">₦0.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rates;
