import React from 'react';
import {
  Page,
  Card,
  Link,
  FaIconBanner,
  Twitter,
  colors
} from './common';

const Projects = () => {
  return (
    <Page>
      <FaIconBanner color={colors.blue} faIcon='code' />

      <Card>
        <h3>murraylahoodburns.com</h3>
        <p>
          A rebuild of my 
          <Link to='https://github.com/MurrayLaHood-Burns/personal-website'> original website</Link>
          , built entirely in 
          <strong> JavaScript </strong>
          using 
          <Link to='https://facebook.github.io/react/'> React</Link>
          . Using React may be overkill for the contents of this website, but I enjoyed working with
          it. By writing my website in React, I have gained a greater understanding of: 
        </p>
        <ul>
          <li>use of <strong>functional</strong> and <strong>class components</strong></li>
          <li>correctly using <strong>npm</strong> to find useful components</li>
          <li>using <strong>nginx</strong> as a <strong>reverse proxy server</strong></li>
        </ul>
        <p>
          <Link to='https://github.com/MurrayLaHood-Burns/react-personal-website'>GitHub</Link>
        </p>
      </Card>

      <Card>
        <h3>Memory Book</h3>
        <p> 
          <strong> MEAN stack </strong> 
          webapp project I started to learn 
          <strong> javascript web development</strong>
          . In addition to the essentials of 
          MEAN development, by working on this project I have
          learned:
        </p>
        <ul>
          <li><strong>automated unit testing</strong> using <strong>mocha</strong> </li>
          <li>use of <strong>fixtures</strong> for testing with a filled database</li>
          <li>sound <strong>logging</strong> practices using <strong>winston</strong></li>
        </ul>
        <p>
          <Link to="https://github.com/MurrayLaHood-Burns/memory-book">GitHub</Link>
        </p>
      </Card>

      <Card>
        <h3>Flapper News</h3>
        <p>A Reddit-like site created by following the 
          <strong> MEAN stack </strong>
          tutorial at 
          <Link to="https://thinkster.io/tutorials/mean-stack"> thinkster.io</Link>
          . By following the tutorial and creating this website I learned:
        </p>
        <ul>
          <li>fundamentals of <strong>routing</strong> and <strong>middleware</strong></li>
          <li><strong>MongoDB</strong> using the console and <strong>mongoose</strong></li>
          <li><strong>AngularJS</strong> patterns such as <strong>factories</strong>, <strong>controllers</strong>, and <strong>views</strong></li>
        </ul>
        <p>
          <Link to="https://github.com/MurrayLaHood-Burns/flapper-news">GitHub</Link>
        </p>
      </Card>

      <Card id='local-yokel'>
        <h3>Local Yokel</h3>
        <p> 
          Local Yokel is a meal kit service app, similar to Blue Apron and Hello Fresh,
          with a focus on locally sourced ingredients. The app was 
          <strong> made in two days </strong>
          as a
          <strong> minimum viable product </strong>
          for 
          <Link to="https://youtu.be/YOyG_3kXrdg?t=2m10s"> my team </Link> 
          at Black Hills Startup Weekend, Spearfish 2017. By participating at this event 
          and writing Local Yokel, I gained valuable experience in:
        </p>
        <ul>
          <li><strong>rapid UI prototyping</strong> and development</li>
          <li><strong>collaboration</strong> between developers, designers, and product owners</li>
          <li><strong>teamwork</strong> under a tight deadline</li>
        </ul>
        <p>
          <Link to="https://github.com/MurrayLaHood-Burns/Yokel">GitHub</Link>
        </p>
        <Twitter collection='908004423598665728' />
      </Card>

      <Card id='managemytvs'>
        <h3>ManageMyTVs</h3>
        <p>
          ManageMyTVs is my largest involvement in a software project. It is an IPTV 
          controller my 
          <strong> senior design </strong>
          team rewrote from an 
          <Link to="https://itunes.apple.com/us/app/managemytvs/id555410807?mt=8"> existing iOS app</Link>
          , to a 
          <strong> cross-platform Xamarin app </strong>
          . My core responsibilities included 
          <strong> communication </strong>
          with the backend, and 
          <strong> test automation</strong>
          . Through this experience, I gained a strong understanding of:
        </p>
        <ul>
          <li><strong>C#</strong>, <strong>XAML</strong>, and the <strong>.NET</strong> framework</li>
          <li>structuring apps in a <strong>MVVM</strong> pattern</li>
          <li><strong>dependency injection</strong>, separating interface and implementation</li>
        </ul>
        <Twitter collection='908048316163809280' />
      </Card>

      <Card id='live-chat'>
        <h3>Live Chat</h3>
        <p>
          A 
          <strong> Windows Presentation Foundation </strong>
          application that connects end users, customer service representatives,
          and field technicians. Using
          <strong> team programming</strong>
          , I helped implement several features in Live Chat. The largest was a
          wizard for uploading end user accounts from excel and flat files. By 
          working on this project, I gained experience in:
        </p>
        <ul>
          <li>implementing features requested by a product owner</li>
          <li>working in a large, existing project</li>
          <li>contributing to <strong>production level</strong> software</li>
        </ul>
      </Card>
    </Page>
  );
}

export default Projects;
