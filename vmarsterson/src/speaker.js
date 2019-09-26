import React from 'react'

class Speaker extends React.Component{
    render() {
       return(	
      <div class="flip-box">
          <div class="flip-box-inner">
             <div class="flip-box-front">
               <img src= "img/Speakers/olivier esper.jpg" alt= "Olivier Esper" />
             </div>
 
             <div class="flip-box-back">
                <div class="turquoise-background">
                   <h4> Olivier Esper </h4>
                   <h5> Public Policy Senior Manager, Google </h5>
                </div>
                  <p class="bluetext"> Olivier Esper is a Senior Manager in Public Policy at Google. Prior to this, he has worked as the Manager of Government Affairs at Cisco, as well as a Senior Analyst at the French Embassy. Olivier Esper has also spent 4 years as an Analyst and Chief of the Internet Bureau at the French Communications Commission. He currently holds the position of Secretary in the Association des Fournisseurs d'Accès et de Services (AFA). </p>
             </div>
          </div>
       </div>
       )
      }
    }
export default Speaker
