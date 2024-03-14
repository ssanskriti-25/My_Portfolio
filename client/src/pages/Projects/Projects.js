import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        The project section of my portfolio showcases a diverse array of my work, highlighting my skills, creativity, and problem-solving abilities across various domains. Each project is a testament to my dedication to delivering high-quality results, whether it's software development, graphic design, content creation, or any other endeavor I've undertaken. With a keen eye for detail and a passion for innovation, I approach each project with enthusiasm and commitment, striving to exceed expectations and leave a lasting impact. Explore this section to witness the breadth and depth of my expertise, and see how I've tackled challenges and brought ideas to life with ingenuity and finesse.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Python</span>
                  <img
                    src="https://codecreator.org/projects/wp-content/uploads/sites/3/2015/11/face-recognition-program.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                       Face-Recognition
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ssanskriti-25/Face_Recognition_Project"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontent</span>
                  <img
                    src="https://www.nextwebi.com/UploadImages/Why-is-Custom-E-commerce-Web-Application-the-right-choice-for-long-term-business-plans-287590_big.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>

                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">E-Commerce Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://ssanskriti-25.github.io/E-Commerce-Website/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontent</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">College Society Website</h5>
                  </div>
                  <a className="ad-btn" href="https://ssanskriti-25.github.io/society-website/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
