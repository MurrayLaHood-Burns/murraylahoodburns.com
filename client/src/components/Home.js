import React from 'react';
import { 
  Page,
  Card,
  FaIconBanner,
  Link,
  Download,
  Twitter, 
  colors
} from './common';

const Home = () => {
  return (
    <Page>
      <FaIconBanner color={colors.blue} faIcon='home'/>
      <Card>
        <h3>Murray LaHood-Burns</h3>
        <p>
          murraylahoodburns@gmail.com
        </p>
        <p>
          <Download href='resume.pdf'>
            <i className='fa fa-download'/> Resume
          </Download> <br/>
          <Link to='https://github.com/MurrayLaHood-Burns'>
            <i className='fa fa-github'/> GitHub
          </Link> <br/>
          <Link to='https://www.linkedin.com/in/murray-lahood-burns-741185a5'>
            <i className='fa fa-linkedin-square' /> LinkedIn
          </Link>
        </p>
      </Card>

      <Card>
        <h3>Currently Seeking...</h3>
        <p>
          employment as a 
          <strong> junior software engineer</strong>
          . <br />
          What I love most about computer science is
          <strong> bringing new ideas to life</strong>
          . I would like to 
          <strong> invest my time and work </strong>
          in a company that shares that passion. Ideally, a place where
          employees look forward to seeing each other everyday, and can
          <strong> take pride in their projects</strong>
          .
        </p>
      </Card>

      <Card>
        <Twitter profile='cragcoder' />
      </Card>

    </Page>
  );
};

export default Home;
