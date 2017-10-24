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
      </Card>
    </Page>
  );
};

export default Experience;
