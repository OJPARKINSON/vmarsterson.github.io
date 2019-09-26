import React from 'react';
import './App.css';
import './App.css';
import './stylesheet.css'
import Speaker from './speaker'

function App() {
  return (
    <div className="App">
      <div class="navbar">
          <div class="dropdown">
            <button class="dropbtn"><img class="menudrop" src="img/menu.png" alt="Dropdown menu"/></button>
            <div class="dropdowncontent">
                <a href="/"><img class="logobar" src="img/Logo.png" alt="BIICS logo" height="40px" width="40px"/><p>Home.</p></a>
                <a href="#About">About.</a>
                <a href="#Agenda">Agenda.</a>
                <a href="#Workshops">Workshops.</a>
                <a href="#Speakers">Speakers.</a>
                <a href="#partners">Partners.</a>
                <a href='#location'>Location.</a>
                <a href='#followus'>Social media.</a>
            </div>
          </div>
      </div>

      <div>
        <a href="https://www.eventbrite.co.uk/e/biics-2019-conference-tickets-58101064849" target="_blank"  rel="noopener noreferrer" ><img class="mtechtalks" src="img/horizontallogo.png" alt="Tech Talks: The Politics of Cybersecurity"/><img class="dtechtalks" src="img/posterlogocolors.png" alt="Tech Talks: The Politics of Cybersecurity"/><img class="wires" src="img/wirecorners.png" alt="wires"/></a>
      </div>

      <div class="click">
        <a href="https://www.eventbrite.co.uk/e/biics-2019-conference-tickets-58101064849" target="_blank" rel="noopener noreferrer" >register</a>
      </div>

    	<br></br>

	    <img src="img/partners.jpeg" alt="partners" class="partners"/>

      <div class="turquoisegrad bluetext">
        <h1> Cybersecurity, <br/> Unlocked. </h1>
        <h2> Learn more about our project. </h2>
      </div>

      <p class="bluetext"> <br/><b>In a time when</b> it is predicted that by 2020 the number of connected devices will reach 21 billion, it cannot be denied that cybersecurity is becoming more and more critical to both individuals and companies. 
        <br></br>
        <b> On the 12th-13th September 2019,</b> we at the Bordeaux Institute of International Cybersecurity Studies (BIICS) will be hosting our first <i><b>free</b></i> annual conference; 'Tech Talks: The Politics of Cybersecurity'. 
        <br></br>
        <b> By bringing together cybersecurity experts </b> from a wide range of professions, our conference will provide a platform for both experts and novices to learn about the different streams of tech policy, and the importance of keeping up to date with the political world of cybersecurity.
        <br></br> 
      </p>

      <div class="orangegrad purpletext">
        <h1> About us. </h1>
        <h2> The team behind BIICS. </h2>
      </div>

      <div>
        <img class="team" src="img/team.jpg" alt="team"/>
        <p class="teamtext purpletext"> <b>Co-founded in September 2018</b> by Margaux Girard and Verity Marsterson, BIICS is an institute based at Sciences Po Bordeaux. </p> <br/>
        <img class="team2" src="img/team.jpg" alt="team"/>
        <p class="teamtext2 purpletext">
          <b>As a dedicated team </b> of Masters students and tech enthusiasts, our range of expertise stems from the EU tech policy to cyberdefense and the politics of algorithms. 
          <br></br>
          <b> Alongside our studies and work, </b> we conduct weekly meetings, and produce daily online content on our social media to raise awareness of the importance of cybersecurity. 
        </p>
      </div>	
		
      <div class="turquoisegrad bluetext">
        <h1> Agenda.</h1>
        <h2>12-13th September 2019. <br/><a href="https://www.sciencespobordeaux.fr/fr/index.html"> Sciences Po Bordeaux. </a></h2>
      </div>

      <div class="col1 bluetext">
        <img class="dates" src="img/date1.png" width="70%" alt="Day 1 : 12 Sept"/>
          <br/>
          <h4 class= "bubble leftshade">Opening speeches </h4>
        <div class= "bubble"> 
          <p><b>How do we define cybersecurity & why is it so important? (EN & FR)</b></p>
          
          <p class="orangetext">9h00 - 9h35</p>
          
          <ul class="a">
            <li> Verity Marsterson & Margaux Girard - <i> BIICS </i></li>
            <li> Yves D&eacute;loye - <i> Sciences Po Bordeaux </i></li>
            <li> <i>Fondation Anthony Mainguen&eacute;</i></li>
          </ul>
        </div>
          <br/>
          <h4 class="bubble leftshade">Switched on, online and connected: The Internet and its regulatory challenges </h4>
        <div class= "bubble"> 
          <p><b> Video Introduction (EN)</b></p>
          <p class="orangetext">9h35 - 9h50</p>
          
          <ul class="a"> 
            <li> Andrea Calderaro - <i>Cardiff University</i></li>
          </ul>
        </div>

        <div class= "bubble"> 
          <p><b><i> Roundtable:</i> Internet Governance in the 21st century: the challenges & opportunities of regulating a cross-border platform (EN)</b></p>
          <p class="orangetext">9h50 - 11h15 </p>
          
          <ul class="a"> 
            <li> Moderator: Verity Marsterson - <i> BIICS </i> </li> 
            <li> Florine Belle - <i>TEHTRIS</i> </li>
            <li> Meryem Marzouki - <i>CNRS & Sorbonne Universit&eacute;</i></li>
            <li> Andrea Beccalli - <i>ICANN</i></li>
            <li> Konstantinos Komaitis - <i>Internet Society</i></li>
            <li> Andrea Calderaro - <i>Cardiff University</i></li>
          </ul>
        </div>

        <div class= "bubble"> 
          <p><b> COFFEE BREAK </b></p>
          <p class="orangetext">11h15 - 11h45</p>
        </div>

          <h4 class= "bubble leftshade"> Cybersecurity in the workplace </h4>

        <div class= "bubble">
          <p><b><i> Roundtable:</i> The future of business: exploring new solutions for a secure workplace (FR)</b></p>
          <p class="orangetext"> 11h45 - 12h30</p>
          
          <ul class ="a">
            <li> Moderator: Margaux Barbier - <i>BIICS</i></li>
            <li> Marine Ma&icirc;tre - <i>Wavestone</i></li>
          </ul>
        </div>
            
        <div class="bubble">
          <p><b> LUNCH BREAK </b></p>
          <p class="orangetext"> 12h30 - 13h30</p>
        </div>

        <h4 class= "bubble leftshade"> Cybersecurity & International Relations </h4>

        <div class="bubble">
        <p><b>Keynote Speech (EN)</b></p>
          <p class="orangetext"> 13h30 - 14h30</p>
          <p> Alberto Domingo - <i>NATO SACT</i></p> 
        </div>

          <h4 class= "bubble leftshade"> New political challenges: Innovation & technology beyond the Internet </h4>

        <div class="bubble">
          <p><b><i> Inaugural conference:</i> New political challenges: innovation & technology beyond the internet (EN)</b></p>
          <p class="orangetext"> 14h30 - 15h00</p>
          <p> J&eacute;r&ocirc;me Freani - <i>Cyberologue</i></p>
        </div>

        <div class="bubble">
          <p><b><i> Workshop I:</i> IoT & Connected Cities</b></p>
          <p class="orangetext">15h00 - 15h45 </p>
          <p>Clotilde Cazamajour - <i>Urban-Law</i></p>
        </div>

        <div class="bubble">
          <p><b><i> Workshop II:</i> The Ethics of AI</b></p>
          <p class="orangetext">15h00 - 15h45</p>
          <p>Jean Fran&ccedil;ois Bonnefon - <i>CNRS</i></p>
        </div>

        <div class="bubble">
          <p><b><i> Workshop III:</i> Blockchain & Bitcoin</b></p>
          <p class="orangetext">15h00 - 15h45</p>
          <p> Edwin Le H&eacute;ron - <i>Sciences Po Bordeaux</i></p> 
        </div>

        <div class="bubble">
          <p><b><i> Workshop IV:</i> The Basis of Coding</b></p>
          <p class="orangetext"> 15h00 - 15h45 </p>
          <p>F&eacute;lix Gaud&eacute; - <i>The Hacking Project</i></p> 
        </div>

        <div class="bubble">
          <p><b>Reflections on Workshops (EN & FR)</b></p>
          <p class="orangetext"> 16h00 - 16h30</p>
          <p> Moderated by J&eacute;r&ocirc;me Freani - <i>Cyberologue</i></p> 
        </div>

        <div class="bubble">
          <p><b> COFFEE BREAK </b></p>
          <p class="orangetext"> 16h30 - 17h00</p>
        </div>

        <h4 class= "bubble leftshade">Privacy in a connected world</h4>
        
        <div class="bubble">
          <p><b>Keynote speech</b></p>
          <p class="orangetext"> 17h00 - 17h45 </p>
          <p> Tristan Nitot - <i>Qwant</i></p> 
        </div>

        <h4 class= "bubble leftshade"> Closing remarks </h4>
        <div class="bubble">
          <p><b>Reflections from day 1 (EN & FR)</b></p>
          <p class="orangetext"> 17h45-18h00 </p>
          <p> Margaux Girard & Verity Marsterson - <i>BIICS</i></p> 
        </div>
      </div>

      <div class="col2 bluetext">
            <img class="dates" src="img/date2.png" width="70%" alt="Day 1 : 12 Sept"/>
            <br/>
            <h4 class="bubble rightshade"> Opening speech </h4>

          <div class= "bubble"> 
          <p><b> Opening Speech</b></p>
          <p class="orangetext"> 9h00 - 9h05</p>
          <p> Verity Marsterson & Margaux Girard - <i>BIICS</i></p>
        </div>

        <div class= "bubble"> 
          <p><b> Digital Inclusion: The Importance of an Accessible and Inclusive Cyberspace</b></p>
          <p class="orangetext"> 9h05 - 9h35</p>
          <p> Olivier Esper - <i>Google</i></p>
        </div>

          <h4 class= "bubble rightshade"> Cybersecurity & Geopolitics </h4>
          
        <div class= "bubble"> 
          <p><b>Video Introduction (EN)</b></p>
          <p class="orangetext"> 9h45 - 10h00 </p>
          
          <ul>
            <li> Muneo Kaigo - <i>Tsukuba University</i></li>
          </ul>
        </div>

        <div class= "bubble"> 
          <p><b><i>Roundtable:</i> Cybersecurity & Geopolitics (EN)</b></p>
          <p class="orangetext"> 10h00 - 10h45 </p>
          
          <ul><li> Moderator: Lucie Baran&egrave;s - <i>BIICS</i></li>
            <li> B&eacute;n&eacute;dicte Pilliet - <i>Cybercercle</i></li>
            <li> Julien Nocetti - <i>IFRI</i></li>
            <li> Julia Slupska - <i>Oxford Internet Institute</i></li>
            <li> Trevor Bradley - <i>UK MOD, CVI Ops Cell</i></li>
          </ul>
        </div>
        <div class="bubble">
          <p><b> COFFEE BREAK </b></p>
          <p class="orangetext">10h45 - 11h15</p>
        </div>
        <div class="bubble">
          <p><b><i> Workshop I:</i> Fake news and online propaganda (EN)</b></p>
          <p class="orangetext">11h15 - 12h00 </p>
          <p>Nicolas H&eacute;nin - <i>Radicalisation Awareness Network</i></p>
        </div>
        <div class="bubble">
          <p><b><i> Workshop II:</i> Tech war & cybercrime (EN/FR) </b></p>
          <p class="orangetext">11h15 - 12h00</p>
          <p> Olivier Grall - <i>ANSSI</i></p>
        </div>
        <div class="bubble">
          <p><b><i> Workshop III:</i> Are the environmental threats associated to technology enough to unite countries in the fight against climate change? (FR) </b></p>
          <p class="orangetext">11h15 - 12h00</p>
          <p> Laurence Allard - <i>l‘Universit&eacute; de Lille 3/Paris 3</i></p> 
        </div>
        <div class="bubble">
          <p><b>Reflections on Workshops (EN)</b></p>
          <p class="orangetext"> 12h00 - 12h45 </p>
        </div>
        <h4 class="bubble rightshade"> Final remarks </h4>
        <div class="bubble">
          <p><b> Cybersecurity in the EU (FR)</b></p>
          <p class="orangetext"> 12h45 - 13h15 </p>
          <p> Laurence Harribey - <i>S&eacute;nat</i></p> 
        </div>
        <div class="bubble">
          <p><b> Closing Conference (FR & EN)</b></p>
          <p class="orangetext"> 13h15 - 13h30 </p>
          <p> Margaux Girard & Verity Marsterson - <i>BIICS</i></p> 
        </div>
      </div>
      <div class="orangegrad purpletext">
        <h1> Workshops. </h1>
        <h2> Which will you attend? </h2>
      </div>
      <div class="workshops_a">
        <img src="img/Workshops/AI.jpeg" class="workshop" alt="AI"/>
        <img src="img/Workshops/bitcoin.jpeg" class="workshop" alt="Bitcoin"/>
        <img src="img/Workshops/IoT.jpeg" class="workshop" alt="IoT"/>
        <img src="img/Workshops/coding.jpeg" class="workshop" alt="Coding"/>
      </div>
      <div class="workshops_b">
        <img src="img/Workshops/environment.jpeg" class="workshop" alt="Enviroment"/>
        <img src="img/Workshops/fake news.jpeg" class="workshop" alt="Fake news"/>
        <img src="img/Workshops/tech war.jpeg" class="workshop" alt="tech war"/>
      </div>

      {/* add speakers here */}

      <Speaker />


      <div class="orangegrad purpletext">
        <h1> Partners. </h1>
        <h2> Thank you.</h2>
      </div>
      <img src="img/partners.jpeg" alt="partners" class="dpartners padded"/>
      <img src="img/smaller partners.jpeg" alt="partners" class="mpartners"/>
      <div class="turquoisegrad bluetext">
        <h1> Location. </h1>
        <h2> Where to find us. </h2>
      </div>
      <div class="address bluetext">
        <p> Join us on 12-13th September at: <br/><br/><b> Sciences Po Bordeaux, <br/> 11 All&eacute;e Ausone, <br/> 33600 Pessac,<br/> Bordeaux <br/> France </b></p> 
      </div>
      <img class="sciencespo2" src="img/SciencesPo Bordeaux.jpg" alt="Sciences Po Bodeaux"/>
      <img class="sciencespo1" src="img/sciencespo.jpg" alt="Sciences Po Bodeaux"/>
      <div class="orangegrad purpletext">
		  <h1> Follow us. </h1>
		  <h2> Join the conversation. </h2>
	  </div>
    <p class="purpletext social"> Follow BIICS on our social media channels for live coverage and updates in the run up to the conference </p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    {/* add links here */}
    <footer>
      <h2 href="Contact">Contact</h2>
        
      <div class="footsectiona">
        <p class="title">Contact </p> 
        <p>Contact: BIICS Presidents Margaux Girard & Verity Marsterson</p>
        <a href="mailto:biics.info@gmail.com">Email: biics.info@gmail.com</a>
      </div>
        
      <div class="footsectionb">
        <p class="title">Developed by </p>
        <p> Verity Marsterson </p>
      </div>

      <div class="footsectionc">
        <p class="title">Legality </p>
        <p> &copy; BIICS. All rights reserved. </p>
        <p> Limited data will be collected from this website for website maintence
        and non commercial purposes only</p>
      </div>
    </footer>
  </div>
  );
}

export default App;
