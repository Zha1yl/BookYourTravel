import React from "react";
import "./visa.css";
import Map from "../../components/product/Map";

const Visa = () => {
  return (
    <div className="visaMain">
      <div className="visaHeader">
        <h1>Visa services</h1>
      </div>
      <div className="visaContent">
        <h2>Visa-free regime for Kyrgyz citizens</h2>
        <div className="visaList">
          <div className="visaListRight">
            <ul>
              <li>Azerbaijan: visa-free entry </li>
              <li>Antigua and Barbuda: visa-free entry for 1 month </li>
              <li>Armenia: visa-free entry</li>
              <li>Barbados: visa-free entry for 28 days</li>
              <li>Bangladesh: you can get a visa on arrival</li>
              <li>Belarus: visa-free entry</li>
              <li>
                East Timor: you can get a visa on arrival (you need to consult
                with us)
              </li>
              <li>Vietnam: visa-free entry for up to 15 days</li>
              <li>Haiti: visa-free entry for 3 months</li>
              <li>Grenada: visa-free entry for 90 days</li>
              <li>Georgia: visa-free entry</li>
              <li>Dominica: visa-free entry for 21 days</li>
              <li>Jordan: you can get a visa on arrival</li>
              <li>Kazakhstan: visa-free entry</li>
              <li>Kenia: you cant get a visa on arrival</li>
              <li>Laos: you can get a visa on arrival</li>
              <li>
                Mauritius: you can get a visa on arrival. It is required to show
                a return ticket, a confirmation of the hotel reservation (or an
                invitation), as well as confirmation of the availability of
                sufficient funds
              </li>
              <li>Madagascar: you can get a visa on arrival</li>
              <li>Malaysia: visa-free entry for 30 days</li>
            </ul>
          </div>
          <div className="visaListLeft">
            <ul>
              <li>Maldives: visa-free entry</li>
              <li>
                Micronesia: visa-free entry for 30 days. A return ticket and
                sufficient funds are required
              </li>
              <li>Moldova: visa-free entry for 90 days</li>
              <li>Mongolia: visa-free entry for 90 days</li>
              <li>Namibia: visa-free entry for 3 months</li>
              <li>Palau: you can get a visa on arrival</li>
              <li>Russia: visa-free entry</li>
              <li>
                Samoa Western: you can get a visa for 60 days at the border
              </li>
              <li>Seychelles: you can get a visa on arrival</li>
              <li>
                Saint Vincent and the Grenadines: visa-free entry for 30 days
              </li>
              <li>Tajikistan: visa-free entry</li>
              <li>Tanzania: you can get a visa on arrival</li>
              <li>Tuvalu: you can get a visa on arrival</li>
              <li>
                Tunisia: you can get a visa on arrival (with conditions, check
                with us)
              </li>
              <li>Turkey: visa-free entry for 3 months</li>
              <li>Uzbekistan: visa-free entry for 30 days</li>
              <li>Ukraine: visa-free entry for 90 days</li>
              <li>Philippines: visa-free entry for up to X days</li>
              <li>Ecuador: visa-free entry for 90 days</li>
              <li>Jamaica: you can get a visa on arrival</li>
            </ul>
          </div>
        </div>
        <div className="visaContentDown">
          <h3>Electronic visas:</h3>
          <ul>
            <li>UAE: 29 days, 60 corridor (copies of documents)</li>
            <li>Morocco: 1 month (copies of documents)</li>
            <li>Singapore: 9 weeks multi-visa (copies of documents)</li>
            <li>Sri Lanka: check with us</li>
            <li>Australia: original documents, except passport.</li>
          </ul>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Visa;
