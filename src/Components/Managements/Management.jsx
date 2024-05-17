import React, { useState } from "react";
import "./managements.css";
import {
  MdOutlineAssessment,
  MdOutlineUnsubscribe,
  MdDashboard,
} from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";

const Management = () => {
  // State to track the selected content
  const [selectedContent, setSelectedContent] = useState("Assessment");
  // Function to handle click on the buttons
  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };
  // Function to render the selected content based on the button clicked
  const renderContent = () => {
    switch (selectedContent) {
      case "Assessment":
        return (
            <div className="card-image-container">
                <div className="card-content">
                    <div>
                        <h1 className="card-title">Officials</h1>
                    </div>
                    <div className="container-para">
                        <strong className="ceo-text">
                        Chief Executive Officer (CEO)
                        </strong>
                        <p className="card-text">
                        <p>
                            Oversees the overall operations and strategic direction of
                            the company, responsible for
                            <p>driving growth and ensuring organizational success.</p>
                        </p>
                        </p>
                        <strong className="ceo-text">
                        Chief Technology Officer (CEO)
                        </strong>
                        <p className="card-text">
                        <p>
                            Leads the technology vision and development
                            initiatives,driving innovation and ensuring technical
                            excellence alligns with business goals.
                        </p>
                        </p>
                        <strong className="ceo-text">
                        Chief Financial Officer (CEO)
                        </strong>
                        <p className="card-text">
                        <p>
                            Manages the financial aspects of the company, including
                            budgeting and financial reporting to optimize financial
                            performance and support strategic decision making.
                        </p>
                        </p>
                    </div>
                </div>
                <div className="card-image"></div>
            </div>
        );
      case "Subscribe":
        return (
          <div className="card-image-container">
           
            <div className="card-content">
              <div>
                <h1 className="card-title">Subscribe</h1>
              </div>
              <div className="container-para">
                <strong className="ceo-text"> Community Engagement</strong>
                <p className="card-text">
                  <p>
                    Emphasize the sense of community subscribers can experience,
                    including opportunities for discussions, collaboration, and
                    networking.
                  </p>
                </p>

                <strong className="ceo-text">Support and Assistance</strong>
                <p className="card-text">
                  <p>
                    Assure subscribers of dedicated support and assistance,
                    including access to customer service, FAQs, and
                    troubleshooting guides..
                  </p>
                </p>
                <strong className="ceo-text">
                  Flexible Subscription Plans
                </strong>
                <p className="card-text">
                  <p>
                    Outline the different subscription plans available,
                    including their features, duration, and pricing options.
                  </p>
                  <strong className="ceo-text">Exclusive Access</strong>
                  <p className="card-text">
                    <p>
                      {" "}
                      Highlight the benefits of subscribing, such as gaining
                      access to exclusive courses, resources, and features..
                    </p>
                  </p>
                </p>
              </div>
            </div>

            <div className="card-image-subscribe"></div>
          </div>
        );
      case "Dashboard":
        return (
          <div className="card-image-container">
            {/* Content for Dashboard */}
            <div className="card-content">
              <div>
                <h1 className="card-title">Dashboard</h1>
              </div>
              <div className="container-para">
                <strong className="ceo-text"> Comprehensive Insights</strong>
                <p className="card-text">
                  <p>
                    Explain how the dashboard provides users with comprehensive
                    insights into their learning progress, including course
                    completion rates, quiz scores, and participation levels.
                  </p>
                </p>

                <strong className="ceo-text">Real-Time Analytics</strong>
                <p className="card-text">
                  <p>
                    {" "}
                    Highlight the feature of real-time analytics, enabling users
                    to track their performance instantly and make data-driven
                    decisions to improve their learning outcomes.
                  </p>
                </p>
                <strong className="ceo-text"> Resource Management</strong>
                <p className="card-text">
                  <p>
                    Outline how the dashboard facilitates resource management,
                    enabling users to organize and access course materials,
                    assignments, and supplementary resources efficiently.
                  </p>
                </p>
              </div>
            </div>

            <div className="card-image-dashboard"></div>
          </div>
        );
      case "Learning":
        return (
          <div className="card-image-container">
            {/* Content for Learning */}
            <div className="card-image-container">
              <div className="card-content">
                <div>
                  <h1 className="card-title">Learning</h1>
                </div>
                <div className="container-para">
                  <strong className="ceo-text">Interactive Courses</strong>
                  <p className="card-text">
                    Engage in interactive courses designed to cater to various
                    learning styles. Access video lectures, quizzes,
                    assignments, and interactive simulations to reinforce your
                    understanding of key concepts.
                  </p>

                  <strong className="ceo-text">Expert Instructors</strong>
                  <p className="card-text">
                    Learn from industry experts and experienced educators who
                    provide valuable insights and guidance throughout your
                    learning journey. Benefit from their expertise and practical
                    knowledge.
                  </p>

                  <strong className="ceo-text">Self-Paced Learning</strong>
                  <p className="card-text">
                    Enjoy the flexibility of self-paced learning, allowing you
                    to study at your own convenience and progress through the
                    courses at a pace that suits your schedule and learning
                    preferences.
                  </p>

                </div>
              </div>

              <div className="card-image-learning"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container-fluid" id="what">
        <div className="container-lms-head">

          <div class="heading-lms">
            <div>What is LMS ?</div>
            <div>
              Streamline educational course administration and
              <br /> delivery to enhance learning experience
            </div>
            <div>
              LMS: Empowering educators to streamline course management,
              tracking, and delivery for an enhanced
              <br/>
              <p id="para3">
                learning experience all from one centralized platform
              </p>
            </div>
          </div>
        </div>
      </div>

        <div className="container-read">
            <div className="buttons-all">
                <button className="txt-access" onClick={() => handleButtonClick("Assessment")}>
                    <MdOutlineAssessment className="text-primary-color mr-2"  size="1.5rem" />
                    <span>Assessment</span> 
                </button>
                <button className="txt-access" onClick={() => handleButtonClick("Subscribe")}>
                    <MdOutlineUnsubscribe className="text-primary-color mr-2"  size="1.5rem" />
                    <span>Subscribe</span> 
                </button>
                <button  className="txt-access" onClick={() => handleButtonClick("Dashboard")}>
                    <MdDashboard className="text-primary-color mr-2"  size="1.5rem"/>
                    <span>Dashboard</span> 
                </button>
                <button  className="txt-access" onClick={() => handleButtonClick("Learning")}>
                    <LiaUniversitySolid className="text-primary-color mr-2"  size="1.5rem" />
                    <span>Learning</span>
                </button>
            </div>
        </div>
      {/* Render the selected content */}
      {renderContent()}
    </>
  );
};

export default Management;
