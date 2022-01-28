import React, { useEffect } from "react";
import "./singleBlogPage.css";
import { Container, Image } from "react-bootstrap";
import NavBarCmp from "../../components/NavBar/NavBarCmp";
import Navigator from "../../components/Navigator/Navigator";

const SingleBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="single-blog-page">
      <NavBarCmp redirect={true} />
      <Navigator title1={"Blog"} title2={"Detail"} />
      <Container>
        <div className="blog-content">
          <div className="blog-img-wrapper">
            <Image fluid className="blog-img" src="/images/slider-1.jpeg" />
          </div>
          <div className="heading">
            <h4>some blog header about sols tokens</h4>
            <span className="dots">...</span>
          </div>
          <div className="date-author">
            <i className="far fa-calendar-alt"></i>
            <span>Jan 28 2022</span>
            <i className="fas fa-user"></i>
            <span>By: Admin</span>
          </div>
          <div className="content-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              itaque dignissimos id, sit asperiores esse soluta natus doloribus
              rem sed voluptatum, quod corporis atque similique sapiente
              accusamus impedit illo explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Soluta provident accusantium quod
              voluptate amet ratione magni ex, dolores libero assumenda pariatur
              corporis quia doloribus ipsa fugiat tenetur et a iste. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti temporibus
              dignissimos placeat sequi ratione aliquid, necessitatibus
              explicabo consectetur illo, aut, eligendi porro. Error eius
              laborum similique, autem sed fuga natus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis illo similique maxime, harum iste delectus fugit
              consequuntur. Cupiditate aperiam minus expedita officiis sit ipsum
              sed porro, dicta impedit inventore adipisci. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Reiciendis at repellendus debitis
              consectetur natus. Quibusdam voluptatum sint non quod maiores
              cumque cum optio ipsum a! Aperiam quos sit et eveniet!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos illo natus temporibus asperiores tempore magnam fugit
              vitae inventore nam perspiciatis architecto nemo placeat libero
              iste sit, commodi, iure delectus blanditiis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos aperiam perferendis fugiat
              libero sapiente a laboriosam mollitia dignissimos, error expedita
              rem consequuntur, nulla suscipit cupiditate. Omnis rem nisi
              veritatis quos?
            </p>
          </div>
          <div className="about-author">
            <div className="author-img">
              <Image src="/images/sol-logo-new.png" />
            </div>
            <div className="author-details">
              <h3>About the author</h3>
              <h5>Admin's name (Admin)</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                esse possimus exercitationem numquam et autem veniam, quibusdam
                reprehenderit sed ab ipsam corrupti aperiam deleniti illo eius
                molestias culpa quasi soluta? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam aliquid in quidem quo magni
                numquam! Ullam totam suscipit, perferendis officia labore
                libero, officiis dolorum dicta at, impedit aut architecto
                consequuntur.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlogPage;
