import React, { useEffect } from "react";
import UserFeedback from "../UserFeedback";

function About() {
  useEffect(() => {
    const header = document.querySelector(".mainHeader");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "transparent";
        header.classList.add("text-white");
        header.classList.remove("bg-white", "text-black");
      } else {
        header.style.backgroundColor = "white";
        header.classList.add("bg-white", "text-black");
        header.classList.remove("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="mainSectionAbout">
      <section className="mainRates">
        <svg
          viewBox="0 0 1586 1640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full top-10 inset-y-0 lg:-top-1/2 inset-x-0"
        >
          <g opacity="0.1">
            <path
              d="M404.363 566.333C382.243 535.392 344.164 530.403 329.211 557.327C298.438 612.723 361.964 797.437 391.958 799.974C421.508 802.473 450.528 630.893 404.363 566.333Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M515.433 630.179C560.612 702.072 395.596 877.675 337.241 834.008C301.359 807.162 286.53 725.758 280.852 657.911C275.52 594.219 291.119 497.921 345.436 462.663C374.278 443.975 420.685 440.673 441.943 461.489C458.393 477.599 458.735 504.331 462.036 509.493C457.023 538.829 453.597 543.747 455.854 565.696C458.803 594.386 503.01 610.407 515.433 630.179Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M629.362 687.608C635.548 781.652 373.328 945.13 285.382 861.625C229.371 808.445 222.892 694.958 227.594 613.754C231.912 539.162 272.982 407.237 364.519 361.581C417.704 335.047 500.711 333.648 534.495 376.137C561.42 410.007 556.886 462.586 557.643 471.489C541.821 528.739 528.799 536.044 528.054 576.158C527.081 629.267 626.807 648.298 629.362 687.608Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M741.344 739.436C737.46 845.712 349.345 1006.93 231.584 883.639C155.588 804.066 157.138 658.534 172.397 563.994C186.193 478.471 252.86 311.404 381.662 254.897C459.338 220.813 578.681 220.96 625.107 285.174C662.421 336.77 654.114 415.416 651.306 427.866C631.657 514.915 602.056 522.705 598.32 581.042C593.298 658.547 743.349 683.784 741.344 739.436Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M847.987 787.83C834.732 907.564 320.388 1065.02 172.44 902.22C76.7105 796.066 85.9383 618.631 111.848 510.811C135.034 414.282 227.333 212.256 393.461 144.744C495.579 103.245 651.272 104.811 710.391 190.747C758.077 260.109 744.483 364.557 739.653 380.786C705.672 494.966 669.833 505.885 663.219 582.402C654.152 684.32 855.915 716.16 847.987 787.83Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M793.759 93.4915C851.801 180.587 832.955 310.768 826.075 330.879C777.824 471.888 735.98 486.23 726.267 580.953C713.316 707.264 967.364 746.038 952.759 833.322C930.323 967.395 288.972 1120.77 111.423 917.9C-4.42688 785.524 12.7943 575.774 49.4331 454.718C81.9641 347.21 199.922 110.35 403.394 31.759C529.955 -17.1129 722 -14.1964 793.759 93.4915Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1095.16 1110.39C1086.91 1072.75 1141.81 1012.85 1160.37 1044.07C1171.09 1062.09 1172.88 1115.88 1159.78 1140.15C1141.35 1174.33 1100.83 1136.29 1095.16 1110.39Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1139.13 992.98C1148.71 994.663 1156.52 1010.99 1170.74 1024.27C1199.62 1051.21 1210.93 1053.44 1229.12 1073.1C1236.22 1080.77 1245.62 1091.12 1245.19 1103.41C1244.54 1122.23 1225.23 1131.29 1194.58 1161.97C1154.73 1201.78 1145.23 1215.58 1118.68 1212.85C1112.51 1212.21 1093.38 1213.93 1078.85 1202.44C1058.76 1186.52 1065.65 1160.93 1048.78 1134.74C1028.55 1103.28 1002.57 1091.32 1008.95 1074.21C1013.44 1062.16 1032.2 1057.48 1063.23 1042.15C1086.86 1030.48 1102.41 1022.98 1114.14 1012.66C1128.08 1000.31 1128.47 991.104 1139.13 992.98Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1107.82 939.71C1123.46 936.816 1136.51 959.45 1163.48 974.408C1218.81 1005.08 1247.3 978.539 1288.38 1003.87C1305.82 1014.62 1324.63 1033.43 1326.97 1056.05C1330.29 1088.15 1300.41 1105.99 1245.94 1168.98C1174.72 1251.33 1164.07 1281.93 1117.15 1286.45C1107.59 1287.36 1071.65 1294.32 1044.58 1274.65C1008.48 1248.41 1025.58 1203.2 992.369 1156.81C955.295 1104.97 899.074 1095.24 905.294 1073.5C909.614 1058.4 940.496 1056.77 996.094 1033.25C1035.62 1016.56 1058.66 1006.56 1075.05 987.469C1095.72 963.38 1090.83 942.859 1107.82 939.71Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1076.69 886.338C1098.34 878.791 1116.7 907.768 1156.42 924.438C1238.19 958.761 1283.25 902.836 1347.84 934.533C1375.48 948.103 1403.74 975.738 1408.93 1008.58C1416.13 1054.11 1375.94 1080.7 1297.5 1175.95C1195.14 1301 1182.73 1347.64 1115.82 1360.02C1102.77 1362.42 1050.13 1374.68 1010.48 1346.85C958.393 1310.27 985.741 1245.35 936.143 1178.87C882.216 1106.59 795.798 1099.17 801.812 1072.73C806.002 1054.58 848.931 1055.81 929.141 1024.29C984.537 1002.52 1014.97 990.072 1036.14 962.217C1063.43 926.316 1053.37 894.449 1076.69 886.338Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1045.59 832.821C1073.23 820.662 1096.9 855.881 1149.36 874.325C1257.6 912.181 1319 826.831 1407.32 865.063C1445.1 881.4 1482.83 917.937 1490.91 960.986C1501.99 1019.97 1451.27 1055.07 1349.06 1182.74C1215.28 1350.24 1201.2 1413.08 1114.49 1433.37C1097.95 1437.24 1028.65 1454.76 976.384 1418.82C908.346 1371.83 945.941 1287.32 879.909 1200.71C809.175 1107.95 692.487 1102.86 698.341 1071.83C702.375 1050.61 757.385 1054.72 862.199 1015.19C933.469 988.314 971.251 973.459 997.251 936.832C1031.11 889.103 1015.87 845.899 1045.59 832.821Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1014.47 779.195C978.335 797.244 998.772 851.763 958.336 911.313C927.508 956.722 882.391 973.979 795.238 1005.96C665.82 1053.46 598.726 1046.52 594.857 1070.78C589.162 1106.46 736.128 1109.21 823.665 1222.46C906.127 1329.15 858.203 1433.44 942.278 1490.7C1007.1 1534.85 1093.04 1511.99 1113.15 1506.64C1219.62 1478.32 1235.41 1399.37 1400.62 1189.42C1526.58 1029.32 1587.82 985.739 1572.88 913.253C1561.9 860.01 1514.67 814.549 1466.77 795.458C1354.66 750.739 1276.92 865.657 1142.29 824.103C1077.05 803.964 1048.08 762.4 1014.47 779.195Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M507.496 1396.89C510.231 1385.96 495.968 1367.55 480.639 1369.13C463.252 1370.92 454.565 1397.4 461.245 1406.65C469.154 1417.58 503.886 1411.4 507.496 1396.89Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M423.904 1445C443.337 1458.14 473.677 1458.91 524.735 1456.07C575.361 1453.24 609.96 1443.99 610.835 1436.13C611.298 1431.86 598.047 1423.06 588.018 1415.2C569.283 1400.49 563.868 1369.24 560.483 1361.68C548.083 1334.02 535.378 1327.97 511.999 1320.55C501.199 1317.11 477.104 1308.85 450.951 1308.76C411.332 1308.55 390.775 1271.86 376.789 1280.09C365.121 1286.99 370.946 1326.66 376.348 1352.01C384.088 1388.34 393.888 1424.66 423.904 1445Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M388.496 1483.53C422.677 1504.63 471.999 1504.76 563.426 1501.44C655.335 1498.28 715.71 1484.41 716.064 1475.57C716.362 1468.92 689.979 1453.64 670.499 1439.98C633.654 1414.26 625.269 1355.09 620.654 1343.56C599.791 1290.91 576.53 1282.07 533.538 1269.62C515.631 1264.43 471.37 1249.09 423.094 1248.51C349.119 1247.54 312.45 1171.36 287.972 1183.93C267.593 1194.42 281.253 1269.7 293.718 1316.18C311.38 1381.8 330.721 1447.88 388.496 1483.53Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M353.325 1521.85C402.251 1550.93 470.561 1550.29 602.352 1546.58C735.541 1542.96 821.573 1524.6 821.577 1514.76C821.612 1505.73 782.159 1483.97 753.198 1464.56C698.188 1427.93 686.905 1340.76 681.118 1325.22C652.16 1247.53 618.036 1235.89 555.36 1218.48C530.354 1211.53 465.923 1189.14 395.544 1188.04C287.211 1186.33 234.445 1070.66 199.463 1087.56C170.374 1101.64 191.74 1212.58 211.413 1280.14C238.753 1375.09 267.767 1470.99 353.325 1521.85Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M318.159 1560.07C381.836 1597.16 469.137 1595.72 641.293 1591.63C815.751 1587.58 927.419 1564.75 927.107 1553.87C926.802 1542.47 874.407 1514.18 835.953 1489.04C762.856 1441.39 748.616 1326.33 741.598 1306.81C704.685 1204.03 659.592 1189.47 577.206 1167.25C545.105 1158.49 460.498 1129.09 368.012 1127.5C225.324 1125.02 156.452 969.864 110.973 991.115C73.1859 1008.77 102.407 1155.33 129.116 1244.02C166.357 1368.2 204.8 1494.05 318.159 1560.07Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M802.094 1288.35C757.278 1160.48 701.09 1143.26 599.06 1115.99C559.834 1105.51 455.08 1069 340.494 1066.9C163.443 1063.7 78.4676 869.03 22.4955 894.614C-24.051 915.881 13.0981 1098.03 46.8347 1207.85C93.9965 1361.31 141.845 1517.09 283.002 1598.25C361.437 1643.34 467.703 1641.11 680.243 1636.64C895.964 1632.11 1033.24 1604.81 1032.64 1592.92C1031.94 1579.15 966.701 1544.37 918.725 1513.49C827.548 1454.8 810.336 1311.87 802.094 1288.35Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M957.192 130.286C903.452 158.209 954.666 259.073 854.994 415.744C819.277 471.884 778.014 513.47 784.274 575.574C784.909 581.84 792.079 643.85 840.645 677.701C901.742 720.29 962.048 672.056 1070.86 713.215C1110.94 728.373 1101.71 734.519 1133.03 745.212C1266.72 790.838 1360.58 653.4 1494.11 689.933C1555.59 706.751 1578.09 747.446 1584.3 741.676C1610.93 716.813 1101.98 54.9288 957.192 130.286Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M866.159 574.335C867.489 577.882 873.599 618.455 907.293 639.563C949.849 666.266 991.966 630.721 1065.45 655.681C1092.5 664.863 1086.53 668.357 1107.67 674.463C1197.87 700.508 1260.34 602.639 1347.63 623.704C1388.04 633.449 1402.84 659.995 1405.42 654.956C1417.23 632.138 1067.22 198.464 972.05 260.477C936.357 283.731 968.066 359.05 904.593 467.964C881.535 507.562 852.332 537.472 866.159 574.335Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M948.052 573.095C950.914 573.54 955.302 593.061 973.941 601.426C998.123 612.29 1021.84 589.449 1060.03 598.149C1074.05 601.339 1071.41 602.202 1082.32 603.722C1129.25 610.232 1160.05 551.824 1201.16 557.481C1220.5 560.102 1226.37 571.83 1226.57 568.301C1217.62 544.873 1032.34 342.548 986.899 390.626C969.139 409.402 981.561 459.293 954.182 520.143C943.773 543.271 935.803 558.675 948.052 573.095Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M1029.94 571.856C1064.56 550.448 1065.8 496.948 1047.69 481.581C1020.96 458.929 999.578 488.32 1001.75 520.793C1003.4 545.057 990.311 596.354 1029.94 571.856Z"
              stroke="white"
              stroke-miterlimit="10"
            ></path>
          </g>
        </svg>
        <div className="text-white container">
          <h5 className="text-white text-sm md:text-lg mb-3 md:mb-6">
            Who We Are
          </h5>
          <div className="cryptoDiv">
            <p>WE TRADE CRYPTO</p>
            <img
              src="https://apexnetwork.co/images/coins-bg-background.webp"
              alt="para"
              className="crypto-img"
            />
          </div>
          <div className="currency">
            <p>CURRENCY</p>
            <img
              src="https://apexnetwork.co/images/giftcard-bg-background.webp"
              alt="currency"
            />
            <p>AND</p>
          </div>
          <div className="currency-1">
            <p>GIFT CARD EXCHANGES</p>
          </div>
          <div className="flex mt-8 lg:mt-20 justify-between">
            <p className="max-w-2xl text-white font-medium">
              Apex Network is a financial technology firm that provides a wide
              range of digital asset commerce, such as cryptocurrency and gift
              card exchanges, as well as other digital financial transactions.
            </p>
            <div className="hidden md:block">
              <img
                src="https://apexnetwork.co/_nuxt/logo-white.2bd606f6.png"
                alt="apx"
                className="w-10"
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

      <section className="sous-main-about">
        <div className="div-one">
          <div>
            <img
              src="https://apexnetwork.co/_nuxt/reliability.ed74964b.png"
              alt="cell"
              className="div-one-img"
            />
          </div>
          <div className="div-two">
            <h4>Reliability</h4>
            <p>
              We understand the importance of providing solutions that you can
              count on.
            </p>
          </div>
        </div>
        <div className="div-three">
          <div>
            <h4>Our Values</h4>
            <p>
              Our team is IGNITED, with us you see a fine blend of innovation,
              ingenuity and hard work, because we want to provide you with
              efficient and dependable solutions. Our culture of Transparency,
              credibility and reliability heralds our business success.
            </p>
          </div>
          <div className="div-four">
            <div>
              <img
                src="https://apexnetwork.co/_nuxt/our-values.5632f999.png"
                alt="manager"
                className="div-four-img"
              />
            </div>
            <div className="div-five">
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

      <section className="mainSectionThree">
        <div className="mainThree">
          <div className="mainChildren">
            <div>
              <h3>Meet our team</h3>
            </div>
            <div>
              <p className="paragraphe">
                We work as a team but live as a clan, working with us provides a
                work-life that brings such fulfillment and personal
                gratification to be part of a winning team, check our career
                page if you think you have what it takes to be one of our Apex
                Stars.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://apexnetwork.co/_nuxt/team.d39992ff.webp"
              alt="Team"
              className="teamImg"
            />
          </div>
        </div>
      </section>

      <section className="mainSectionFour">
        <svg
          width="178"
          height="264"
          viewBox="0 0 178 264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="oneSvg"
        >
          <path
            d="M93.2538 111.057C113.489 111.057 132.896 119.095 147.205 133.404C161.514 147.713 169.552 167.12 169.552 187.355C169.552 207.591 161.514 226.998 147.205 241.306C132.896 255.615 113.489 263.654 93.2538 263.654L93.2538 187.355V111.057Z"
            fill="#5A6DED"
          ></path>
          <path
            d="M131.403 76.2985C131.403 34.16 165.563 0 207.701 0H284V76.2985C284 118.437 249.84 152.597 207.701 152.597C165.563 152.597 131.403 118.437 131.403 76.2985Z"
            fill="#B277CF"
          ></path>
          <g clip-path="url(#clip0_12001_41242)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3433 16.9557C59.3433 7.59159 66.9344 0.000488281 76.2985 0.000488281C85.6626 0.000488281 93.2537 7.5916 93.2537 16.9557V34.9953L106.086 22.1627C112.708 15.5413 123.443 15.5413 130.065 22.1627C136.686 28.7841 136.686 39.5196 130.065 46.141L116.862 59.3438H135.642C145.006 59.3438 152.597 66.9349 152.597 76.299C152.597 85.6631 145.006 93.2542 135.642 93.2542H117.232L130.065 106.087C136.686 112.708 136.686 123.444 130.065 130.065C123.443 136.687 112.708 136.687 106.086 130.065L93.2537 117.232V135.642C93.2537 145.006 85.6626 152.598 76.2985 152.598C66.9344 152.598 59.3433 145.006 59.3433 135.642V116.862L46.1406 130.065C39.5192 136.687 28.7837 136.687 22.1623 130.065C15.5409 123.444 15.5408 112.708 22.1623 106.087L34.9948 93.2542H16.9552C7.59111 93.2542 0 85.6631 0 76.299C0 66.9349 7.5911 59.3438 16.9552 59.3438H35.3651L22.1623 46.141C15.5409 39.5196 15.5409 28.7841 22.1623 22.1627C28.7837 15.5413 39.5192 15.5413 46.1406 22.1627L59.3433 35.3654V16.9557Z"
              fill="#FEE2C0"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_12001_41242">
              <rect width="152.597" height="152.597" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="community">
          <h1>What Our User Community Have to Say</h1>
          <div>
            <UserFeedback
              username="User123"
              comment="J'adore cette plateforme, c'est incroyable !"
              shadow={true}
            />
            <UserFeedback
              username="JaneDoe"
              comment="Une expérience utilisateur fantastique !"
            />
            <UserFeedback
              username="JohnSmith"
              comment="Facile à utiliser et très utile."
            />
            <UserFeedback
              username="EmilyJones"
              comment="Support réactif et grande communauté."
            />
          </div>
        </div>
        <svg
          width="295"
          height="100"
          viewBox="0 0 295 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="twoSvg"
        >
          <path
            d="M221.454 27.4375C240.96 27.4375 259.667 35.186 273.459 48.9785C287.252 62.771 295 81.4777 295 100.983C295 120.489 287.252 139.195 273.459 152.988C259.667 166.78 240.96 174.529 221.454 174.529L221.454 100.983V27.4375Z"
            fill="#F4D452"
          ></path>
          <path
            d="M147.091 27.4375C166.597 27.4375 185.304 35.186 199.096 48.9785C212.889 62.771 220.637 81.4777 220.637 100.983C220.637 120.489 212.889 139.195 199.096 152.988C185.304 166.78 166.597 174.529 147.091 174.529L147.091 100.983V27.4375Z"
            fill="#22242F"
          ></path>
          <circle cx="73.5457" cy="100.983" r="73.5457" fill="#22242F"></circle>
          <rect
            y="0.470703"
            width="81.7175"
            height="81.7175"
            rx="40.8587"
            fill="#6BB38D"
          ></rect>
          <path
            d="M40.3583 64.8745C43.0549 64.8745 44.6484 62.9133 44.6484 59.9715C44.6484 54.9459 41.584 52.2492 41.2163 42.3205C49.6741 47.5913 50.4095 51.5137 54.6997 54.0878C55.8029 54.7007 56.6609 54.9459 57.6415 54.9459C59.1124 54.9459 60.3382 54.2104 61.1962 52.8621C61.5639 52.2492 61.6865 51.5137 61.6865 50.7783C61.6865 49.3074 60.7059 47.8364 58.9898 46.8558C54.5771 44.4043 50.5321 45.6301 41.8292 41.0948C50.5321 36.3143 54.5771 37.54 58.9898 35.0885C60.7059 33.9853 61.6865 32.637 61.6865 31.0435C61.6865 30.4306 61.5639 29.6952 61.1962 28.9597C60.3382 27.6114 59.1124 26.8759 57.6415 26.8759C56.6609 26.8759 55.8029 27.1211 54.6997 27.734C50.4095 30.308 49.6741 34.5982 41.2163 39.7464C41.4615 29.8177 44.6484 26.9985 44.6484 21.8503C44.6484 18.9085 43.0549 17.0698 40.3583 17.0698C37.7842 17.0698 36.1907 18.9085 36.1907 21.8503C36.1907 26.9985 39.6228 29.6952 39.868 39.7464C31.1651 34.4756 30.4296 30.308 26.0169 27.734C25.0362 27.1211 24.1782 26.8759 23.1976 26.8759C21.7267 26.8759 20.5009 27.6114 19.6429 28.9597C19.2752 29.6952 19.1526 30.4306 19.1526 31.0435C19.1526 32.637 20.1332 33.9853 21.8493 35.0885C26.262 37.54 30.0619 36.3143 39.0099 41.0948C30.307 45.7527 26.1394 44.4043 21.8493 46.8558C20.1332 47.8364 19.1526 49.3074 19.1526 50.7783C19.1526 51.5137 19.2752 52.2492 19.6429 52.8621C20.5009 54.2104 21.7267 54.9459 23.1976 54.9459C24.1782 54.9459 25.0362 54.7007 26.0169 54.0878C30.4296 51.5137 31.1651 47.7139 39.7454 42.3205C39.3777 52.3718 36.1907 54.8233 36.1907 59.9715C36.1907 62.9133 37.7842 64.8745 40.3583 64.8745Z"
            fill="black"
          ></path>
        </svg>
      </section>
    </main>
  );
}

export default About;
