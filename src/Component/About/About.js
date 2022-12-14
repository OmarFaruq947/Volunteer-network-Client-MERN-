import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="body_about">
      <h4 className="note text-danger text-center">
        *Note: Use Photos with Transparent Background
      </h4>
      <section>
        <div className="container">
          <div className="row flex-center sm-no-flex">
            <div className="pull-right sm-no-float col-md-8">
              <ul className="team-members">
                {/* single member row starts */}
                <li className="clearfix">
                  <div className="member-details">
                    <div>
                      <img
                        src="https://i.postimg.cc/zG5c7T02/168-1685371-corporate-headshot-pic-png-transparent-png.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>Jennifer Tilly</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="http://gocheckers.com/images/roster/josh_wesley_headshot_1718.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>John Doe</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img src="https://i.postimg.cc/FKqR0FNp/Andrew-Stader-Headshot-Low-Res-Transparent-Background.png" />
                      <div className="member-info">
                        <h3>David Warner</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* /single member row ends */}
                {/* single member row starts */}
                <li className="clearfix">
                  <div className="member-details">
                    <div>
                      <img
                        src="https://axis.org/wp-content/uploads/2015/05/evan-headshot.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>John Doe</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="http://gocheckers.com/images/roster/andrew_poturalski_headshot_1718.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>John Doe</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="https://axis.org/wp-content/uploads/2015/12/2015-Dougie-Headshot.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>John Doe</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* /single member row ends */}
                {/* single member row starts */}
                <li className="clearfix">
                  <div className="member-details">
                    <div>
                      <img
                        src="https://axis.org/wp-content/uploads/2014/10/chris-headshot.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>John Doe</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="https://axis.org/wp-content/uploads/2014/12/jeremiah-e1418073411753.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>John Doe</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="https://i.postimg.cc/50n49xjb/888-8883444-headshot-no-background-scarf.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>Sara Khan</h3>
                        <p>UI Designer</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* /single member row ends */}
              </ul>
              {/* /end team-photos */}
            </div>
            {/* /end col-md-8 */}
            <div className="pull-left col-md-4 sm-text-center">
              <div className="team-overview">
                <h2>Who Are We?</h2>
                <a href="#">Meet the Entire Team</a>
                <p />
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci quae nesciunt officia! Autem, nam eum voluptatem,
                  esse voluptatibus deleniti tempora laboriosam sequi pariatur,
                  explicabo itaque. Fuga, deserunt? Repudiandae, neque qui.
                </div>
                <p />
              </div>
            </div>
            {/* /end col-md-4 */}
          </div>
          {/* /end row */}
        </div>
        {/* /end container */}
      </section>
      {/* extra */}
    </div>
  );
};

export default About;
