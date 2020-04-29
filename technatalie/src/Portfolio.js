//make each sub section (what were the pages other than the main page) into an accordian.
//Each section is closed and nested right up under the header.
//When you click on a section it opens up, leaving the other closed sections above or below it like it was when it was closed.
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

function Portfolio() {
  return (
    <section id="portfolio-sec">
      <div className="container">
        <ScrollAnimation animateIn='slideInLeft' initiallyVisible={true}>
          <h1><span className="first-letter">P</span>ortfolio</h1>
        </ScrollAnimation>
        <h2>iNoticed (October 2019 - Present)</h2>
          <p>This is my personal project about kindness, being valued, and a new way of dating. The idea is that when you are in public and you notice someone doing something nice, or having a bad day, or you're just attracted to someone, you hand them a card. There are specific cards to hand out depending on the situation. The dating section is a full-blown dating app - you hand a card to someone you'd like to date and they visit the website to check out your profile and message you. It makes it easier to approach people. <br />
          I created every aspect of the site using JavaScript, PHP, HTML, CSS, SCSS, jQuery, Bootstrap, particles.js, XML, AJAX, MySQL/SQL, Git, Bash, Python, and zippopotam.us.<br />
        	This web app is still a work in progress, but feel free to <a href="https://inoticed.org" target="_blank">visit it here</a>.<br />
        	iNoticed's repo has been added to <a href="https://github.com/The-Natalie" target="_blank">Github here</a>.</p>

        <h2>TechNatalie (2017 - Present)</h2>
          <p>This website was created from scratch using HTML5, CSS3, JavaScript and jQuery, with a mobile first approach. I also created the backgrounds, logos, and layout.</p>

        <div className="bitlathe">
          <h2>BitLathe (June 2017 - October 2019)</h2>
            <p>BitLathe was a small business (it closed in October 2019) that provided custom web applications and content management services for clients. There were multiple websites and web apps that were already created when I joined BitLathe, and I was asked to update and maintain them. So, the majority of my work was tweaking old code, but I also added a lot of my own code, too. I also had a few projects I wrote from scratch.<br />
            Unfortunately, the content of the projects I worked on while at BitLathe is confidential, so only descriptions my projects can be shared. Here are a few of them:</p>
              <ul>
              	<li style={{listStyle: 'none'}}>The largest web app I've worked on is <a href="http://www.retirementinteractive.com/" target="_blank">Riversource Retirement Interactive</a>. I helped update graphs and information, create new pages, and implement new designs requested by the client. While my boss created the application a couple years ago, I've put a lot of time and new code into much of it. The majority of my JavaScript experience came from working on this application.<br />
                Languages used: JavaScript, jQuery, HTML, CSS(SCSS)
                </li>
              <br />
              
              </ul>
              <ul id="gallery">
                <li><a href="images/Portfolio/Bitlathe/CMID_Home.png"><img src="images/Portfolio/Bitlathe/CMID_Home.png" alt="Twitter and Instagram feeds on home page" /></a><b>Instagram Feed Widget -</b> A client wanted an Instagram feed on their home page that matched the Twitter feed that was already there. Unlike most social media platforms, Instagram doesn't provide a way to embed a feed(or multiple posts), they only provide embedded code for a single specified post. So, after explaining to the client how to retrieve their Instagram access token, I used the plugin Instafeed.js to create the widget. Everything looked fine, except the images and text weren't posting. Turns out the client's firewall was blocking Instagram, which made Instafeed.js useless. So, my boss wrote a server script that calls the 12 most recent Instagram posts to the API, and puts it in a file on the server every 10 minutes. I had to write new code that would parse through that information and output the appropriate HTML for the widget. I also updated the CSS to match the Twitter feed.<br />
                Languages used: HTML, CSS, JavaScript, jQuery, Mustache.js, Instafeed.js, Instagram's API
                </li>
                <br />

                <li><a href="images/Portfolio/Bitlathe/CMID_Popup.png"><img src="images/Portfolio/Bitlathe/CMID_Popup.png" alt="File not available pop-up" /></a><b>Turn Off Links with Pop-up -</b> A client's website had multiple files that were updated quarterly, but sometimes the files would expire before they were able to update them. Instead of removing the links and code for hundreds of files only to have to rewrite them a few days later, a flag was created within in the links so that the link was disabled and a message would pop-up to let the visitor know that the file is being updated. If the "data-available" attribute within the link HTML code equaled "0", the link was disabled and a pop-up message was created, which came from the "data-message" attribute. As a backup, if the "data-message" attribute was left blank, there was a default message included in the JavaScript code. If the "data-available" attribute equaled "0", the link worked normally. The image to the left is an example of the pop-up message. <br />
                Languages used: HTML, JavaScript, and jQuery
                </li>
                <br />

                <li><a href="images/Portfolio/Bitlathe/CMID_Video_page.gif"><img id="video-gif" src="images/Portfolio/Bitlathe/CMID_Video_page.gif" alt="Video page example when play button is clicked" /></a><b>Video Landing Page -</b> A client wanted a video page that contained all the elements and information about the video, including a transcript and other relevant files. When the page loaded, they wanted a still image from the video and a pronounced play button in the middle. They also wanted a block of text to obstruct part of the video, but when the play button is clicked, they wanted the block of text to slide down below the video. A rough draft of this page already existed, but I still had A LOT of changes to make, including totally customizing the video controls. This project involved extensive coding in HTML, CSS, JavaScript, jQuery and a lot of research on embedded video players. To the left is an animated GIF of the video page showing how the block of code slides down when the play button is clicked.<br />
                Languages/software used: HTML, CSS, SCSS, JavaScript, jQuery, Bootstrap, Mozilla's Full Screen API, Photoshop, jPlayer
             	</li>
              </ul>
        </div>

        <div className="hdh">
          <h2>HDH Associates (2012 - March 2017)</h2>
            <p>HDH has 3 companies within itself and they have 3 websites. These websites were already created when I was asked to update and maintain them. I started maintaining them using Dreamweaver and then eventually redesigned and updated them by writing code.</p>
            <ul id="gallery">
              <li><a href="images/Portfolio/HDH/Home.jpg"><img src="images/Portfolio/HDH/Home.jpg" width="120" alt="HDH Associates Home page" /></a></li>
              <li><a href="images/Portfolio/HDH/AboutUs.jpg"><img src="images/Portfolio/HDH/AboutUs.jpg" width="120" alt="HDH Associates About Us page" /></a></li>
              <li><a href="images/Portfolio/HDH/RelatedLinks.jpg"><img src="images/Portfolio/HDH/RelatedLinks.jpg" width="120" alt="HDH Associates Related Links page" /></a></li>
              <li><a href="images/Portfolio/HDH/TechBESTHome.jpg"><img src="images/Portfolio/HDH/TechBESTHome.jpg" width="120" alt="The Home page for HDH Technical and BEST" /></a></li>
              <li><a href="images/Portfolio/HDH/BESTCalendar.jpg"><img src="images/Portfolio/HDH/BESTCalendar.jpg" width="120" alt="Example of the class calendar for BEST" /></a></li>
            </ul>
        </div>

        <div className="svpa">
          <h2>The Staunton Chapter of the Virginia Production Alliance (2012 - 2013)</h2>
            <p>I made this website for a non-profit organization by using Wordpress and PHP. I started with a templete and then greatly modified it by adding code and utilizing widgets.</p>
            <ul id="gallery">
              <li><a href="images/Portfolio/SVPA/Home.jpg"><img src="images/Portfolio/SVPA/Home.jpg" width="120" alt="The Staunton Chapter of the Virginia Production Alliance Home page" /></a></li>
              <li><a href="images/Portfolio/SVPA/Contact.jpg"><img src="images/Portfolio/SVPA/Contact.jpg" width="120" alt="The Staunton Chapter of the Virginia Production Alliance Contact page" /></a></li>
              <li><a href="images/Portfolio/SVPA/Links.jpg"><img src="images/Portfolio/SVPA/Links.jpg" width="120" alt="The Staunton Chapter of the Virginia Production Alliance Links page" /></a></li>
              <li><a href="images/Portfolio/SVPA/Calendar.jpg"><img src="images/Portfolio/SVPA/Calendar.jpg" width="120" alt="The Staunton Chapter of the Virginia Production Alliance Calendar page and widget" /></a></li>
              <li><a href="images/Portfolio/SVPA/Message_Board.jpg"><img src="images/Portfolio/SVPA/Message_Board.jpg" width="120" alt="The Staunton Chapter of the Virginia Production Alliance Message Board" /></a></li>
            </ul>
        </div>

        <div className="kateri">
        <h2>Kateri Productions (2004 - 2013)</h2>
          <p>This is the first website I made. It was a portfolio and business website for my video production services. I originally designed it using Yahoo Website Builder, then switched to Dreamweaver after gaining more web designer/developer skills.</p>
          <ul id="gallery">
              <li><a href="images/Portfolio/KateriProductions/Home.jpg"><img src="images/Portfolio/KateriProductions/Home.jpg" width="120" alt="Kateri Productions Home page" /></a></li>
              <li><a href="images/Portfolio/KateriProductions/About_Me.jpg"><img src="images/Portfolio/KateriProductions/About_Me.jpg" width="120" alt="Kateri Productions About Me page" /></a></li>
              <li><a href="images/Portfolio/KateriProductions/Videography_and_Video_Editing.jpg"><img src="images/Portfolio/KateriProductions/Videography_and_Video_Editing.jpg" width="120" alt="Kateri Productions Videography and Video Editing page" /></a></li>
              <li><a href="images/Portfolio/KateriProductions/Last_Wish.jpg"><img src="images/Portfolio/KateriProductions/Last_Wish.jpg" width="120" alt="Kateri Productions Last Wish page" /></a></li>
            </ul>
        </div>
        <div className="video">
          <h2 style={{textAlign: 'center'}}>Video Production and Graphic Design Experience</h2>
          <div className="demo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hLUQf1UloyA" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;