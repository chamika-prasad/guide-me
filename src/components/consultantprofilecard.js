/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./consultantprofilecard.css";
import * as RiIcons from "react-icons/ri";
import { ExperienceData } from "../data/experiencedata";

const ConsultantProfileCard = () => {
  const [showAll, setShowAll] = useState(false);
  const [showTitle, setShowTitle] = useState("Show All");

  useEffect(() => {
    showAll ? setShowTitle("Show Less") : setShowTitle("Show All");
  }, [showAll]);
  return (
    <div className="container">
      <div className="card w-100 mb-4 pb-2 shadow-lg border border-3 border-dark ">
        <img
          class="card-img-top"
          src="/images/profileimages/consultent_profile.png"
          alt="Card image cap"
        />
        <div className="row position-absolute">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-xs-12 pt-3">
            <img
              className="logo mx-3"
              id="logo"
              src="/images/logo/guidme_logo.png"
              width="105"
              height="45"
              alt="menu"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-3">
            <div className="profile_search mt-3">
              <div className="mx-3 content">
                <lable>
                  <RiIcons.RiSearchLine size={20} />
                </lable>
                <input className="search_input" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
        <div className="row secondrow">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <img className="profile" src="/images/profileimages/profile.jpg" />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-xs-12 mx-4">
            <div className="consultent_details pt-3">
              <h2 className="card-title">Kevin Hart</h2>
              <h5 className="font-weight-normal">Consultant</h5>
              <h5>
                Global Leader : Global Migration and Sustainability Services At
                EY
              </h5>
            </div>
          </div>
        </div>

        <hr className="mb-2" />

        <div className="row thirdrow pt-3">
          <div className="row d-flex firstsubrowofthirdrow pt-3">
            <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-3 ">
              <h6 className="fs-5">
                Talk about #esg, #GlobalMaigration,
                #modernslavery,#sustainability, and #sustainablebusiness
              </h6>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-3 col-sm-12 col-xs-12 mx-3 ">
              <button className="btn rounded-5">Message</button>
            </div>
          </div>
          <div className="row secondsubrowofthirdrow pt-2">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-3">
              <h6 className="fs-5">London, England, United Kingdom</h6>
            </div>
          </div>
          <div className="row w-100 thirdsubrowofthirdrow pt-3 align-items-baseline">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mx-3 ">
              <span className="d-flex fs-5 align-items-baseline">
                <h5>500+</h5>&nbsp; Connections
              </span>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-12 col-xs-12 pt-2">
              <div className="float-xl-end float-xl-end float-lg-end float-md-end float-sm-start float-xs-start price">
                <button className="btn rounded-5 mx-3 ">$10.5</button>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-12 pt-2">
              <div className="float-xl-start float-xl-start float-lg-start float-md-start float-sm-start float-xs-start request">
                <button className="btn rounded-5 mx-3">Request</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-3">
          <div className="experince">
            <h5 className="pb-2">
              <b>Experience</b>
            </h5>

            {showAll ? (
              <div>
                {ExperienceData.map((item, index) => (
                  <div className="d-flex row p-2">
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 p-2">
                      <img
                        src={item.img}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                      <h7 className="fw-semibold">{item.position}</h7>
                      <br />
                      <h7>{item.organization}</h7>
                      <br />
                      <h7>{item.duration}</h7>
                    </div>
                    <hr className="mb-2 mt-2" />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="d-flex row p-2">
                  <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 p-2">
                    <img
                      src={ExperienceData[0].img}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>

                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <h7 className="fw-semibold">
                      {ExperienceData[0].position}
                    </h7>
                    <br />
                    <h7>{ExperienceData[0].organization}</h7>
                    <br />
                    <h7>{ExperienceData[0].duration}</h7>
                  </div>
                  <hr className="mb-2 mt-2" />
                </div>
                <div className="d-flex row p-2">
                  <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 p-2">
                    <img
                      src={ExperienceData[1].img}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>

                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <h7 className="fw-semibold">
                      {ExperienceData[1].position}
                    </h7>
                    <br />
                    <h7>{ExperienceData[1].organization}</h7>
                    <br />
                    <h7>{ExperienceData[1].duration}</h7>
                  </div>
                  <hr className="mb-2 mt-2" />
                </div>
              </div>
            )}
            <div
              className="text-center fw-bold fs-5 showall"
              onClick={() => setShowAll(!showAll)}
            >
              {showTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfileCard;
