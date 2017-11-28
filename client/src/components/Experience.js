import React from 'react';
import { Helmet } from 'react-helmet';
import { Page, Card, FaIconBanner, Link, colors } from './common';

const Experience = () => {
  return (
    <Page>
      <Helmet>
        <title>Work Experience</title>
        <meta name='description' content='One year experience as a .net software
          engineer intern at Innovative Systems LLC, developing Windows and 
          cross-platform mobile applications.' />
      </Helmet>
      <FaIconBanner color={colors.blue} faIcon='briefcase' />
      <Card>
        <h3>Software Engineer Intern</h3>
        <p>Innovative Systems LLC - Rapid City, SD 
          <br/>
          <em>May 2016 - May 2017</em>
        </p>

        <p>
          At Innovative, I learned an incredible amount about
          software engineering, and am very thankful for my year there. 
          <br/>
          From the first week, I began coding under an 
          <strong> agile scrum </strong>
          environment. The other new interns and I worked 
          on a practice project, where we enhanced our skills with 
          <strong> C#</strong>
          , 
          <strong> git</strong>
          , and
          <strong> unit testing</strong>
          . We regularly presented our work in
          <strong> code reviews</strong>
          .
          <br/> 
          After a month, I was 
          <strong> writing production level code </strong> 
          for 
          <Link internal to="/projects#live-chat"> Live Chat</Link>
          . 
          Starting in the fall, the other senior interns and I worked as an 
          independent team developing a 
          <strong> cross-platform </strong>
          version 
          of 
          <Link internal to="/projects#managemytvs"> ManageMyTVs </Link>
          for our
          <strong> senior design project</strong>
          .
        </p>
        <p>
          <Link to='http://www.innovsys.com/innovsys/'>www.innovsys.com</Link>
        </p>
      </Card>
      <Card>
        <h3>Radon Mitigation Technician</h3>
        <p>Earthorizons Inc - Black Hawk, SD 
          <br/>
          <em>May 2011 - Present</em>
        </p>

        <p>
          I started working for my father's 
          <strong> radon mitigation </strong>
          and
          <strong> earthwork </strong>
          business, Earthorizons, 
          halfway through high school. My work mainly involved assisting in the installation
          of radon mitigation systems, but I also worked on
          <strong> water & sewer</strong>
          , 
          <strong> construction</strong>
          , <strong>land reclamation</strong>
          , and 
          <strong> excavation </strong>
          projects. In addition, I have gained 
          <strong> forestry </strong>
          experience
          working on the family tree farm.
        </p>
        <p>
          <Link to='http://www.earthorizons.com'>www.earthorizons.com</Link>
        </p>
      </Card>
    </Page>
  );
};

export default Experience;
