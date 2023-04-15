import React from "react";
import { Col, Container, Row } from "reactstrap";

const TopComponent = () => {
  return (
    <div className="top">
      <Container className="d-md-flex d-block align-items-center">
        <Row>
          <Col md="10" className="mx-auto text-center">
            <h1 className="header-text text-black font-weight-bold">
              Our mission is to increase the GDP of the internet in tech and
              research
              {/* Our mission is to increase the GDP of Africa by developing its human and economic <br /> potentials – through tech and research <br /> skilling */}
            </h1>
          </Col>
          <Col md="12">
            <Row>
              <Col md="12" className="mx-auto">
                <p className="mt-5 main text-muted pt-0 pt-md-1">
                  {/* Coachmie is a technological company that is building an internet learning infrastructure for Africa. The infrastructure allows African learners –particularly Generation Z – to learn and build tech and research skills by learning from African tech experts across the world in order to get into tech, build tech products (and start-ups) and conduct cutting-edge researches – locally or abroad. */}
                  {/* Coachmie is a technology company that is building an internet learning infrastructure for Africans and people of color at different career stages. The infrastructure allows them to learn and build tech and research skills by learning from tech experts globally either 1:1 or in groups in order to get into tech careers, build tech products and conduct cutting-edge tech researches – anywhere. */}
                  Coachmie builds infrastructure for{" "}
                  <span
                    className="underline"
                    title="Learners are those interested in tech and research careers"
                  >
                    learners
                  </span>{" "}
                  and{" "}
                  <span
                    className="underline"
                    title="Experts are those with 5+ years of experience in tech and research"
                  >
                    experts
                  </span>{" "}
                  to cowork on the internet. Learners use our infrastructure to
                  engage with experts online in order to - get into tech, build
                  tech products and get into graduate research programs anywhere in the world. Registered in the
                  United States, United Kingdom and Nigeria, the company aims to
                  get more people into tech and research.
                </p>
              </Col>
              <Col md="12" className="mx-auto">
                <hr className="d-md-none d-block" />
                <Row className="mt-md-3 mt-0">
                  <Col md="6" className="custom-border-right">
                    <p className="mt-md-2 mt-1 main text-muted pt-0 pt-md-1">
                      <span className="underline">Learners</span> are those
                      interested in tech and research careers
                    </p>
                  </Col>
                  <Col md="6">
                    <p className="text-muted mt-md-2 mt-1 main text-muted pt-0 pt-md-1">
                      <span className="underline">Experts</span> are those with
                      5+ years of experience in tech and research
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopComponent;
