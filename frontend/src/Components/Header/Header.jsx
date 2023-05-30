import React from "react";
import "./header.css";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Header = () => {
  return (
    <header>
      <div className="nav-top">
        <div className="container">
          <div className="nav-title">
            <div className="nav-sociaL">
              <FaTwitter className="social-media" />
              <CgFacebook className="social-media" />
              <AiOutlineInstagram className="social-media" />
              <TiSocialLinkedin className="social-media" />
            </div>
            <div className="nav-button">
              <button className="btn1">Sponsor</button>
              <button className="btn2">Login</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="navbar">
          <h1>ADOPTED</h1>
          <ul>
            <li>
              <NavLink to={"./home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"./adoption"}>Adoption</NavLink>
            </li>
            <li>
              <NavLink to={"./success stories"}>Success Stories</NavLink>
            </li>
            <li>
              <NavLink to={"./about"}> About</NavLink>
            </li>
            <li>
              <NavLink to={"./contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <section id="slider">
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/adopted/img/slider-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/adopted/img/slider-2.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </>
      </section>

      <section id="text-image">
        <div className="container">
          <div className="row">
            <div className="image">
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/adopted/img/children_5.jpg"
                  alt=""
                />
              </div>
              <div className="pargraph1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias nemo et, esse laudantium consequatur. Eum soluta illum
                  architecto dolorum quae suscipit dignissimos! Saepe, amet
                  explicabo nemo eligendi totam sint repudiandae.
                </p>
              </div>
              <button className="btn3">Adopt a child now</button>
            </div>
            <div className="texts">
              <h2 className="font2">Steps to adopt & foster a child</h2>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>1. Getting Started</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>2. Envisioning your family</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit quibusdam possimus dolor odio dicta ipsam deleniti
                      enim suscipit. Sed aperiam hic recusandae, perspiciatis
                      quibusdam numquam nisi dolorum nostrum porro explicabo.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>3. Getting approved</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit quibusdam possimus dolor odio dicta ipsam deleniti
                      enim suscipit. Sed aperiam hic recusandae, perspiciatis
                      quibusdam numquam nisi dolorum nostrum porro explicabo.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>4. Being matched with a child</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sed fugiat autem, explicabo dolorum libero totam doloribus
                      ex ducimus repellendus qui nam distinctio cupiditate
                      deleniti ipsam quibusdam neque quaerat tenetur ipsa.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>5. Receiving a placement</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit culpa accusamus repellat ut officia nesciunt
                      aliquid qui nulla, provident ratione doloremque porro
                      atque repellendus perspiciatis est. Accusamus earum, animi
                      quod?
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>6. Finalizing an adoption</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit sint placeat praesentium, libero excepturi
                      laboriosam officia sapiente ipsa magnam asperiores tempora
                      ea, et repellendus reprehenderit dolores, hic at in.
                      Fugit.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>7. State information</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas sequi nobis beatae nesciunt fugit quisquam culpa
                      rerum ipsum quibusdam impedit, sed soluta, quos neque
                      reiciendis, earum magni laudantium iure, deleniti?
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="button-text">
        <div className="container">
          <div className="align-center">
            <h2 className="font5">Waiting Children</h2>
            <p className="paragraph7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              unde impedit, necessitatibus, soluta sit quam minima expedita
              atque corrupti reiciendis.
            </p>
            <button className="btn4">Find More Waiting Children</button>
          </div>
        </div>
      </section>

      <section id="childs"></section>


      <section id="stories">
        <div className="container">
            <h1 className="font10">FEATURED STORIES</h1>
            <div className="features">
                <img  className="img5" src="https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg" alt="" />
                <img className="img6" src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />
                <img className="img7" src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg" alt="" />

            </div>

        </div>
      </section>
    </header>

    
  );
};

export default Header;
