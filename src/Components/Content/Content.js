import React, { useState } from "react";
import styles from "./content.module.css";
import Icon from "../../assets/Icon.png";
import Icon1 from "../../assets/Icon-1.png";
import Icon2 from "../../assets/Icon-2.png";
import Icon3 from "../../assets/Icon-3.png";
import Icon4 from "../../assets/Icon-4.png";
import Icon1svg from "./Icon1svg";
import Icon2svg from "./Icon2svg";
import Razorpay from "../../assets/Razorpay Icon.png";

export default function Content(props) {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const handleSubscriptionChange = (event) => {
    setSelectedSubscription(event.target.value);
  };

  const calculatePrice = () => {
    switch (selectedSubscription) {
      case "12months-expired":
        return {
          total: 18500,
          offer: -15401,
        };
      case "12months-recommended":
        return {
          total: 18500,
          offer: -18401,
        };
      case "6months":
        return {
          total: 9900,
          offer: -9201,
        };
      case "3months":
        return {
          total: 5500,
          offer: -5301,
        };
      default:
        return {
          total: 0,
          offer: 0,
        };
    }
  };

  const { total, offer } = calculatePrice();

  const totalPrice = total + offer;

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <div>
            <p className={styles.text}>Access curated courses worth</p>
          </div>

          <div className={styles.secondHeader}>
            <p>
              <span className={styles.span1}>
                <div className={styles.rectangle}></div>₹ 18,500{" "}
              </span>
              <span className={styles.span2}>at just </span>
              <span className={styles.span3}>₹ 99 </span>
              <span className={styles.span4}>per year!</span>
            </p>
          </div>
        </div>

        <div className={styles.additionalContent}>
          <div className={styles.menu}>
            <span>
              <img src={Icon} alt="Icon" className={styles.iconImage} />
              <span className={styles.blueText}>100+ </span>
              <span className={styles.whiteText}>Job relevant courses</span>
            </span>
          </div>
          <div className={styles.menu}>
            <span>
              <img src={Icon1} alt="Icon" className={styles.iconImage} />
              <span className={styles.blueText}>20,000+ </span>
              <span className={styles.whiteText}>Hours of content</span>
            </span>
          </div>
          <div className={styles.menu}>
            <span>
              <img src={Icon2} alt="Icon" className={styles.iconImage} />
              <span className={styles.blueText}>Exclusive </span>
              <span className={styles.whiteText}>webinar access</span>
            </span>
          </div>
          <div className={styles.menu}>
            <span>
              <img src={Icon3} alt="Icon" className={styles.iconImage} />
              <span className={styles.whiteText}> Scholarship worth </span>
              <span className={styles.blueText}>₹94,500</span>
            </span>
          </div>
          <div className={styles.menu}>
            <span>
              <img src={Icon4} alt="Icon" className={styles.iconImage} />
              <span className={styles.blueText}> Ad Free </span>
              <span className={styles.whiteText}>learning experience </span>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.form}>
        <div className={styles.progress}>
          <div className={styles.stage1}>
            <div className={styles.one}>
              <Icon1svg />
            </div>
            <div className={styles.row1Text}>SignUp</div>
          </div>
          <div className={styles.stage2}>
            <div className={styles.two}></div>
            <Icon2svg />
            <div className={styles.row1Text}>Subscribe</div>
          </div>
        </div>
        <div className={styles.subHeading}>Select your subscription plan</div>

        <div className={styles.subscriptionContainer}>
          <div className={styles.subscription}>
            <input
              type="radio"
              name="subscription"
              value="12months-expired"
              style={{ width: "32px", height: "32px" }}
              onChange={handleSubscriptionChange}
            />
            <div>
              <div className={styles.expired}>Expired</div>
              <span className={styles.subscriptionplan}>
                12 Month Subscription Plan
              </span>
            </div>
            <div className={styles.subscriptionDetails}>
              <div>
                <span className={styles.total}>Total</span>
                <span className={styles.price}> ₹18,500</span>
              </div>
              <div>
                <span className={styles.monthlyPrice}>₹99</span>{" "}
                <span className={styles.month}>/mo</span>
              </div>
            </div>
          </div>

          <div className={styles.subscription}>
            <input
              type="radio"
              name="subscription"
              value="12months-recommended"
              style={{ width: "32px", height: "32px" }}
              onChange={handleSubscriptionChange}
            />
            <div>
              <div className={styles.recommended}>Recommended</div>
              <span className={styles.subscriptionplan}>
                12 Month Subscription Plan
              </span>
            </div>
            <div className={styles.subscriptionDetails}>
              <div>
                <span className={styles.total}>Total</span>
                <span className={styles.price}> ₹18,500</span>
              </div>
              <div>
                <span className={styles.monthlyPrice}>₹99</span>{" "}
                <span className={styles.month}>/mo</span>
              </div>
            </div>
          </div>

          <div className={styles.subscription}>
            <input
              type="radio"
              name="subscription"
              value="6months"
              style={{ width: "32px", height: "32px" }}
              onChange={handleSubscriptionChange}
            />
            <div>
              <span className={styles.subscriptionplan}>
                6 Month Subscription Plan
              </span>
            </div>
            <div className={styles.subscriptionDetails}>
              <div>
                <span className={styles.total}>Total</span>
                <span className={styles.price}> ₹9,900</span>
              </div>
              <div>
                <span className={styles.monthlyPrice}>₹1,650</span>{" "}
                <span className={styles.month}>/mo</span>
              </div>
            </div>
          </div>

          <div className={styles.subscription}>
            <input
              type="radio"
              name="subscription"
              value="3months"
              style={{ width: "32px", height: "32px" }}
              onChange={handleSubscriptionChange}
            />
            <div>
              <span className={styles.subscriptionplan}>
                3 Month Subscription Plan
              </span>
            </div>
            <div className={styles.subscriptionDetails}>
              <div>
                <span className={styles.total}>Total</span>
                <span className={styles.price}> ₹5,500</span>
              </div>
              <div>
                <span className={styles.monthlyPrice}>₹1,833</span>{" "}
                <span className={styles.month}>/mo</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.summaryContainer}>
          <div className={styles.fees}>
            <div className={styles.subscriptionFees}>Subscription Fee</div>{" "}
            <div className={styles.subscriptionFeesPrice}>₹18,500</div>
          </div>
          <div className={styles.alert}>
            <div className={styles.alertOffer}>
              <div className={styles.alertOfferHeader}>
                Limited Time Offer
              </div>{" "}
              <div className={styles.minusPrice}>-₹18,401</div>
            </div>

            <div className={styles.alertBody}>
              <div className={styles.alertSVG}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                    fill="#DE4313"
                  />
                </svg>
              </div>
              <div className={styles.offerValid}>
                Offer valid till 25th March 2023
              </div>
            </div>
          </div>
          <div className={styles.feesTotalContainer}>
            <div className={styles.feesTotalText}>
              Total <span className={styles.feesTotalTextSpan}>(Incl. of 18% GST)</span>
            </div>
            <div className={styles.feesTotalPrice}>₹{totalPrice}</div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancel}>CANCEL</button>
          <button className={styles.payment}>PROCEED TO PAY</button>
        </div>

        <div className={styles.razorpay}>
          <img src={Razorpay} alt="Razorpay" className={styles.razorpayImg} />
        </div>
      </div>
    </div>
  );
}
