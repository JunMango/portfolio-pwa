/* eslint-disable no-unused-vars */
import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification ">
      {/*<h2 className="section__title">Qualification 🧑🏻‍🎓</h2>*/}
      {/*<span className="section__subtitle">My Personel Journey 🚗</span>*/}

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">경희대학교</h3>
                <span className="qualification__subtitle">컴퓨터 공학과</span>
                <div className="qualification__calender">
                  과 <i className="uil uil-calendar-alt"></i> 2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__round"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__round"></span>
                <span className="qualification__line"></span>
              </div>
              {/*<div>*/}
              {/*  <h3 className="qualification__title">Higher Secondary🧪</h3>*/}
              {/*  <span className="qualification__subtitle">*/}
              {/*    CBSE - Bengaluru*/}
              {/*  </span>*/}
              {/*  <div className="qualification__calender">*/}
              {/*    <i className="uil uil-calendar-alt"></i> 2018 - 2020*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
