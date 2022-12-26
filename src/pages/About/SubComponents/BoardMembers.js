import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export const BoardMembers = () => {
  return (
    <div id="board">
        <Container>
            <Row>
                <Col sm="12">
                    <h3 className='header-text mb-3 mt-5'>Board Members</h3>
                </Col>
            </Row>
            <Row>
                {[{
                    name: "Adeshina Alani",
                    description: `TPM Privacy@<b>Meta</b>. Previously, Researcher @<b>University of Victoria</b>.`
                },{
                    name: "Ahmed Tiamiyu, PhD",
                    description: `Ast. Professsor@<b>University of Calgary</b>. Previously, Research Fellow@<b>MIT</b>.`
                },{
                    name: "Ayoade Ilori, PhD",
                    description: `Data Analyst@<b>Barclays</b>. Previously, Analyst@<b>PwC</b> & Researcher@<b>Aston University</b>.`
                },{
                    name: "Babatunde David, PhD",
                    description: `Consultant<b>@AfDB</b>. Previously, Researcher@<b>The University of Salford</b>.`
                },{
                    name: "Dayo Ibitoye, ARPA",
                    description: `Specialist@<b>The World 
                    Bank</b>, Consultant@<b>UNDP</b>.
                    Previously, Candiate@
                    <b>Harvard Kennedy School</b>.`
                },{
                    name: "Ericmoore Jossou, PhD",
                    description: `Research Scientist @<b>Brookhaven National Laboratory</b>. Next 
                    Fall 2023, Ast. Professor@<b>MIT</b>.`
                },{
                    name: "Idris Malik, PhD",
                    description: `ML Engineer@<b>Meta</b>, Previously, Sr. Data Scientist@<b>PwC</b> & Researcher@<b>McGill</b>.`
                },{
                    name: "Owolabi Adekoya",
                    description: `Sr. SRE@<b>VMware</b>. Previously, Staff Software Engineer@<b>IBM</b> & Researcher@<b>University of Saskatchewan</b>.`
                }].map((director, i)=>(
                    <Col lg="3" md="4" sm="6" key={i} className="mb-5">
                        <div className='dir-name'>
                                <h4 className='ml-3 mb-0'>{director.name}</h4>
                        </div>
                        <div className='dir-description'>
                            <p className='ml-3' dangerouslySetInnerHTML={{__html: director.description}}></p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}
