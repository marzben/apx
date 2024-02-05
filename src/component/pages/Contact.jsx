import React from "react";

function Contact() {
  return (
    <main>
      <section className="mainContact row-col gap-16 pt-[3.125rem] pb-[6rem]">
        <div className="row-col gap-5 m-20 p-8 justify-center ">
          <div className="row-col gap-3">
            <p className="font-semibold text-orange-500">Contact us</p>
            <p className="text-header text-base md:text-3xl font-bold ">
              We’d love to hear from you
            </p>
          </div>
          <p className="text-body text-xl font-normal">
            Our friendly team is always here to chat.
          </p>
        </div>
        <div className="contacts_information_container grid md:grid-cols-2 lg:grid-cols-3 container gap-[1.875rem] m-20 p-8">
          <div className="column_box rounded-2xl p-8 bg-gray-200 items-start w-full row-col gap-16">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="10" fill="#FB8E0B"></rect>
              <path
                opacity="0.4"
                d="M29.2676 20.5611L25.0022 23.9954C24.1949 24.6283 23.0634 24.6283 22.2562 23.9954L17.9541 20.5611"
                stroke="#F8F8FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.8879 15H28.3158C29.6752 15.0152 30.969 15.5899 31.896 16.5902C32.823 17.5905 33.3022 18.929 33.222 20.2941V26.822C33.3022 28.1871 32.823 29.5256 31.896 30.5259C30.969 31.5262 29.6752 32.1009 28.3158 32.1161H18.8879C15.968 32.1161 14 29.7407 14 26.822V20.2941C14 17.3754 15.968 15 18.8879 15Z"
                stroke="#F8F8FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div>
              <div className="desc row-col gap-2 mt-10">
                <div className="text-xl font-semibold text-header">
                  Chat to sales
                </div>
                <div className="sub_title text-base font-normal text-body">
                  Speak to our friendly team.
                </div>
              </div>
              <a
                href="mailto:sales@apexnetwork.co"
                className="contact_link block hover:underline mt-5 text-base font-bold"
              >
                sales@apexnetwork.co
              </a>
            </div>
          </div>
          <div className="column_box rounded-2xl p-6 bg-gray-200 items-start w-full row-col gap-16">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="10" fill="#FB8E0B"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.5714 31.0699C27.5152 34.1263 22.9898 34.7867 19.2864 33.074C18.7397 32.8539 18.2915 32.676 17.8654 32.676C16.6785 32.683 15.2012 33.8339 14.4334 33.067C13.6656 32.2991 14.8173 30.8206 14.8173 29.6266C14.8173 29.2004 14.6464 28.7602 14.4263 28.2124C12.7128 24.5096 13.3741 19.9827 16.4303 16.9272C20.3316 13.0244 26.67 13.0244 30.5714 16.9262C34.4797 20.835 34.4727 27.1681 30.5714 31.0699Z"
                stroke="#F8F8FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="0.4"
                d="M27.4393 24.413H27.4483"
                stroke="#F8F8FA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="0.4"
                d="M23.4306 24.413H23.4396"
                stroke="#F8F8FA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="0.4"
                d="M19.4213 24.413H19.4303"
                stroke="#F8F8FA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div>
              <div className="desc row-col gap-2 mt-10">
                <div className="text-xl font-semibold text-header">
                  Chat to support
                </div>
                <div className="sub_title text-base font-normal text-body">
                  We’re here to help.
                </div>
              </div>
              <a
                href="mailto:info@apexnetwork.co"
                className="contact_link block hover:underline mt-5 text-base font-bold"
              >
                info@apexnetwork.co
              </a>
            </div>
          </div>
          <div className="column_box rounded-2xl p-6 bg-gray-200 items-start w-full row-col gap-16">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="10" fill="#FB8E0B"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.0317 24.4724C27.0208 28.4604 27.9258 23.8467 30.4656 26.3848C32.9143 28.8328 34.3216 29.3232 31.2192 32.4247C30.8306 32.737 28.3616 36.4943 19.6846 27.8197C11.0065 19.144 14.7616 16.6724 15.074 16.2839C18.1839 13.1738 18.6659 14.5894 21.1145 17.0373C23.6544 19.5765 19.0427 20.4844 23.0317 24.4724Z"
                stroke="#F8F8FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="0.4"
                d="M25.853 18.043C27.624 18.387 29.008 19.772 29.353 21.543"
                stroke="#F8F8FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div>
              <div className="desc row-col gap-2 mt-10">
                <div className="text-xl font-semibold text-header">Call us</div>
                <div className="sub_title text-base font-normal text-body">
                  Mon-Fri from 8am to 5pm.
                </div>
              </div>
              <a
                href="tel:+234-706-2010-244"
                className="contact_link block hover:underline mt-5 text-base font-bold"
              >
                +234-706-2010-244
              </a>
            </div>
          </div>
        </div>
        <section
          data-v-0d027898=""
          className="contact_us_form_section_container"
        >
          <div
            data-v-0d027898=""
            className="container_fluid grid grid-cols-2 m-20 p-8  "
          >
            <div
              data-v-0d027898=""
              className="form_container max-w-xl mx-auto w-full"
            >
              <div data-v-0d027898="" className="form_heading">
                <p
                  data-v-0d027898=""
                  className="text-3xl font-heading text-header font-bold"
                >
                  Message us
                </p>
                <p data-v-0d027898="" className="sub_title">
                  Our friendly team would love to hear from you.
                </p>
              </div>
              <div data-v-0d027898="" className="overflow-hidden">
                <div data-v-0d027898="" className="relative">
                  <div data-v-0d027898="" className="mt-12">
                    <form data-v-0d027898="">
                      <div data-v-0d027898="">
                        <label
                          data-v-0d027898=""
                          for="first-name"
                          className="label"
                        >
                          First name
                        </label>
                        <div data-v-0d027898="" className="mt-1.5">
                          <input
                            data-v-0d027898=""
                            type="text"
                            name="first-name"
                            required=""
                            placeholder="First Name"
                            id="first-name"
                            autocomplete="given-name"
                            className="input rounded-lg"
                          />
                        </div>
                      </div>
                      <div data-v-0d027898="" className="mt-5">
                        <label
                          data-v-0d027898=""
                          for="last-name"
                          className="label"
                        >
                          Last name
                        </label>
                        <div data-v-0d027898="" className="mt-1.5">
                          <input
                            data-v-0d027898=""
                            type="text"
                            required=""
                            name="last-name"
                            placeholder="Last Name"
                            id="last-name"
                            autocomplete="family-name"
                            className="input rounded-lg"
                          />
                        </div>
                      </div>
                      <div data-v-0d027898="" className="sm:col-span-2 mt-5">
                        <label data-v-0d027898="" for="email" className="label">
                          Email
                        </label>
                        <div data-v-0d027898="" className="mt-1.5">
                          <input
                            data-v-0d027898=""
                            id="email"
                            required=""
                            name="email"
                            placeholder="Email"
                            type="email"
                            autocomplete="email"
                            className="input rounded-lg w-full"
                          />
                        </div>
                      </div>
                      <div data-v-0d027898="" className="sm:col-span-2 mt-5">
                        <label
                          data-v-0d027898=""
                          for="phone-number"
                          className="label"
                        >
                          Phone Number
                        </label>
                        <div
                          data-v-0d027898=""
                          className="mt-1.5 relative rounded-md shadow-sm "
                        >
                          <div
                            data-v-0d027898=""
                            className="absolute inset-y-0 left-[1px] flex items-center "
                          >
                            <label
                              data-v-0d027898=""
                              for="country"
                              className="sr-only"
                            >
                              Country
                            </label>
                            <select
                              data-v-0d027898=""
                              id="country"
                              name="country"
                              className="h-full py-0 pl-4 pr-8 text-gray-1 rounded-md"
                            >
                              <option data-v-0d027898="">NG</option>
                              <option data-v-0d027898="">CA</option>
                              <option data-v-0d027898="">EU</option>
                            </select>
                          </div>
                          <input
                            data-v-0d027898=""
                            type="text"
                            inputmode="numeric"
                            required=""
                            name="phone-number"
                            id="phone-number"
                            autocomplete="tel"
                            className="input pl py-3 px-4 block w-full pl-20 rounded-lg"
                            placeholder="+234 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div data-v-0d027898="" className="sm:col-span-2 mt-5">
                        <label
                          data-v-0d027898=""
                          for="message"
                          className="label"
                        >
                          Message
                        </label>
                        <div data-v-0d027898="" className="mt-1.5">
                          <textarea
                            data-v-0d027898=""
                            id="message"
                            name="message"
                            rows="4"
                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-1 focus:border-primary-1 border border-neutral-3 rounded-md"
                          ></textarea>
                        </div>
                      </div>
                      <div data-v-0d027898="" className="sm:col-span-2">
                        <div
                          data-v-0d027898=""
                          className="flex items-start mt-5"
                        >
                          <div data-v-0d027898="" className="flex-shrink-0">
                            <button
                              data-v-0d027898=""
                              type="button"
                              className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-1"
                              role="switch"
                              aria-checked="false"
                            >
                              <span data-v-0d027898="" className="sr-only">
                                Agree to policies
                              </span>
                              <span
                                data-v-0d027898=""
                                aria-hidden="true"
                                className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                              ></span>
                            </button>
                          </div>
                          <div data-v-0d027898="" className="ml-3">
                            <p
                              data-v-0d027898=""
                              className="text-base text-body"
                            >
                              {" "}
                              You agree to our friendly privacy policy.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div data-v-0d027898="" className="sm:col-span-2 mt-5  ">
                        <button
                          data-v-0d027898=""
                          type="submit"
                          className="submit_button flex justify-center bg-orange-400 p-3 w-full rounded-lg text-white "
                        >
                          <svg
                            data-v-0d027898=""
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              data-v-0d027898=""
                              d="M21.9354 3.08198C21.4352 2.5686 20.6949 2.37734 20.0046 2.57866L3.908 7.25952C3.1797 7.46186 2.66349 8.04269 2.52443 8.78055C2.38237 9.5315 2.87858 10.4848 3.52684 10.8834L8.5599 13.9768C9.07611 14.2939 9.74239 14.2144 10.1696 13.7835L15.9329 7.9843C16.223 7.68231 16.7032 7.68231 16.9934 7.9843C17.2835 8.27623 17.2835 8.74935 16.9934 9.05134L11.22 14.8516C10.7918 15.2814 10.7118 15.9508 11.0269 16.4702L14.1022 21.5538C14.4623 22.1577 15.0826 22.5 15.7628 22.5C15.8429 22.5 15.9329 22.5 16.013 22.4899C16.7933 22.3893 17.4135 21.8558 17.6436 21.1008L22.4156 5.02479C22.6257 4.34028 22.4356 3.59537 21.9354 3.08198"
                              fill="white"
                            ></path>
                          </svg>{" "}
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-0d027898="" className="image_container w-full ml-10">
              <img
                data-v-0d027898=""
                width="568"
                src="https://apexnetwork.co/_nuxt/contact-img-side.2c146463.png"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Contact;
