import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Page,
  Card,
  Link,
  Download,
  FaIconBanner,
  colors
} from './common';

const Education = () => {
  return (
    <Page>
      <Helmet>
        <title>Education</title>
        <meta 
          name='description' 
          content='B.S. Computer Science cum laude from South Dakota School
          of Mines & Technology, 2017. Particpated in entrepreneurial activities.'
        />
      </Helmet>
      <FaIconBanner color={colors.blue} faIcon='graduation-cap' />
      <Card>
        <h3>B.S. Computer Science</h3>
        <p>South Dakota School of Mines & Technology 
          <br/>
          <em>Graduated May 2017</em>
        </p>
        <p>
          At Mines, I took my work seriously and graduated on time with a 
          <strong> 3.66 GPA</strong>
          . In addition, I involved myself in entrepreneurial activities
          such as 
          <strong> Engineers Make Great Entrepreneurs</strong>
          , where I was one of five recognized for my participation, speech,
          and essay. I participated in my community, attending a 
          <strong> Black Hills Startup Weekend </strong>
          as a developer where I worked with local students and community
          members to create 
          <Link internal to="/projects#local-yokel"> Local Yokel</Link>
          .
        </p>
        <p>
          <Download href="transcript.pdf">
            <i className="fa fa-download"></i> Unofficial Transcript
          </Download>
        </p>
      </Card>
    </Page>
  );
};

export default Education;
