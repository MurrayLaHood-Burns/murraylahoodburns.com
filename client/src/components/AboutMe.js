import React from 'react';
import { 
  Page, 
  Card,
  FaIconBanner,
  Twitter,
  colors 
} from './common';

const AboutMe = () => {
  return (
    <Page>
      <FaIconBanner color={colors.blue} faIcon='user' />
      <Card>
        <h3>Rock Climber</h3>
        <p>Stages of becoming a rock climber:</p>
        <ol>
          <li>Friend invites you to try it.</li>
          <li>Dear god dear god why would anyone ever do this.</li>
          <li>Huh, that wasn't so bad.</li>
          <li><em>Two years later...</em></li>
          <li>No other thrill will ever satisfy me.</li>
          <li>I bet I could lead a 5.11.</li>
          <li><em>See stage 2.</em></li>
        </ol>
        <Twitter collection='907985453973872640' />       
      </Card>

      <Card>
        <h3>Mountain Biker</h3>
        <p>If there was any thing to guarantee a great day, it would be 
          listening to Arcade Fire while whipping around a single track.
        </p>
        {<Twitter collection='908000223561003008' />}
      </Card>

      <Card>
        <h3>Woodworker</h3>
        <p>A lot of the logical problem solving and creative thinking that go
          into computer science can also be applied to tinkering in a woodshop. 
          I have enjoyed making things from personalized wooden bookmarks, to 
          the standing desk I am writing this from.
        </p>
        <Twitter collection='907999905641250816' />
      </Card>

      <Card>
        <h3>Book Nerd</h3>
        <p>Some favorites: </p>
        <ul>
          <li> <em>East of Eden</em> by John Steinbeck </li>
          <li> <em>Life of Pi</em> by Yann Martel </li>
          <li> <em>Calvin and Hobbes</em> by Bill Waterson </li>
        </ul>
      </Card>

      <Card>
        <h3>Movie Buff</h3>
        <p>
          Did you know that stellar movies 
          <em> The Departed</em>
          , 
          <em> The Talented Mr. Ripley</em>
          , and 
          <em> Good Will Hunting </em>
          all star Matt Damon? Coincidence? I think not.
        </p>
      </Card>

      <Card>
        <h3>Game Geek</h3>
        <p>
          To quote Zachary Quinto's Spock at the end of 
          <em> Star Trek: Into Darkness</em>
          , "
          <em>CAAAAA(t)AAAAAN</em>
          !!"
          <br />
          Also a big fan of cards games like Hearts, Seven Up Seven Down, 
          and Hucklebuck. Deal me in. Unless its Pinochle. That... That 
          game's ridiculous. Why would someone make rules like that? It 
          is as Spock would also say... "
          <em>illogical.</em>
          "
        </p>
      </Card>

      <Card>
        <h3>Podcast Junkie</h3>
        <p>
          Thumbs up for 
          <em> RadioLab</em>
          , 
          <em> Imaginary Worlds</em>
          , and the source of all facts alternative and otherwise, 
          <em> Wait Wait Don't Tell Me</em>
          .
        </p>
      </Card>
    </Page>
  );
};

export default AboutMe;
