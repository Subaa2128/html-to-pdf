import React from "react";
import { FiMail, FiPhone, FiGlobe, FiUser } from "react-icons/fi";
import Logo from "../../assets/defutura-logo.jpg";
import Innovation from "../../assets/defutura-innovation.jpg";
import { jsPDF } from "jspdf";
import "./PdfSetup.scss";
const PdfSetup = () => {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data as any).then(() => {
      pdf.save("shipping_label.pdf");
    });
  };

  return (
    <div className="pdf-setup">
      <div className="first-grid" id="pdf">
        <div className="logo">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="address">
            <li>incorporated as,</li>
            <li> Dewallstreet private limited,</li>
            <li>#1, voc street, mahalakshmi nagar,</li>
            <li>selaiyur post, east tambaram,</li>
            <li> tamilnadu, india - 600059</li>
            <p>GST|33AA1CD6464Z1ZU</p>
          </div>
        </div>
        <div className="details">
          <div className="details-img">
            <FiMail />
            <p>chief.execution@defutura.cloud</p>
          </div>
          <div className="details-img">
            <FiPhone />
            <p>8825645627</p>
          </div>
          <div className="details-img">
            <FiGlobe />
            <p>www.defutura.cloud</p>
          </div>
        </div>
        <div className="project-estimate">
          <h1>project estimate</h1>
          <h1>#1nvx010130</h1>
        </div>
        <div className="innovations">
          <div className="image">
            <img src={Innovation} alt="" />
            <div className="specifics">
              <p>billing specifics</p>
              <p>shipping specifics</p>
            </div>
          </div>
          <div className="date">
            <p>generated on,</p>
            <p>october,08,2022</p>
          </div>
        </div>
        <div className="founder-details">
          <div className="detail">
            <div className="image">
              <FiUser />
            </div>
            <div className="">
              <p>mr.a.sprinkle jeyaraj</p>
              <p>founder,palm world</p>
            </div>
          </div>
          <div className="detail">
            <div className="image">
              <FiMail />
            </div>
            <div className="">
              <p>asprinklejeyaraj@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="due-payable">
          <div className="usd">
            <div className="total">
              <h3>total in usd</h3>
              <h3>20,000 usd</h3>
            </div>
            <div className="button">
              <button>pay now</button>
            </div>
          </div>
          <div className="payable">
            <h3>total due payable</h3>
            <h1>16,56,650 inr</h1>
            <p>
              sixteen lacs fifty six thousand six hundred and fifty indian
              rupees only /-
            </p>
          </div>
        </div>
        <div className="foreign-exchange">
          <p>
            The foreign exchange rate at the time of deal is 81.83 INR against a
            USD and the same taken into account for billing.
          </p>
        </div>
        <div className="track">
          <p>trach</p>
          <p>progress</p>
          <p>deliverables</p>
          <p>transactions</p>
          <p>proposals</p>
        </div>
        <div className="terms-and-policies">
          <p>This estimate is generated automatically dated 08 oct,2022</p>
          <div className="terms">
            <p>terms</p>
            <p>policies</p>
            <p>contracts</p>
            <p>agreements</p>
            <p>licenses</p>
          </div>
        </div>
      </div>
      <div className="second-grid">
        <div className="first-segment">
          <p>payment records</p>
          <ul>
            <li>upfront RSD</li>
            <li>Due on</li>
            <li>16 oct,2022</li>
          </ul>
        </div>
        <div className="last-segment"></div>
        <button onClick={createPDF} type="button">
          Export PDF
        </button>
      </div>
    </div>
  );
};

export default PdfSetup;
