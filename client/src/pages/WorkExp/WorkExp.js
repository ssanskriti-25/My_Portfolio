import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Problem Setter
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Imocha
              </h4>
              <p>
              Created 50+ coding questions on different topics of data structure and algorithm with 90% acceptance.

              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Microsoft Intern Engage Mentee 2022
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Microsoft
              </h4>
              <p>
              Made a face recognition-based project under a mentee as a part of the Microsoft Intern Engage Mentorship 
              program.

              </p>


            </VerticalTimelineElement>
            
          </VerticalTimeline>



        </div>
      </div>
    </>
  );
};

export default WorkExp;
