import React from "react";
import QuizCatelog from "./quizCatelog";
import Art from "../../categories/image--art.svg";
import Science from "../../categories/image--science.svg";
import Programming from "../../categories/image--programming.svg";
import Biology from "../../categories/image--biology.svg";
import Chemistry from "../../categories/image--chemistry.svg";
import CSEBasics from "../../categories/image--computer-science-basics.svg";
import CSE from "../../categories/image--computer-science.svg";
import API from "../../categories/image--data-structures.svg";
import Earth from "../../categories/image--geography.svg";
import History from "../../categories/image--history.svg";
import Mathematics from "../../categories/image--mathematics.svg";
import Physics2 from "../../categories/image--physics-2.svg";
import Physics from "../../categories/image--physics.svg";
import API2 from "../../categories/image--programming-fundamentals.svg";
import Technology from "../../categories/image--technology.svg";
import Timeline from "../../categories/image--timeline.svg";
function homePage() {
  return (
    <>
      
      
      <div className="row"  style={{marginLeft:"18%" ,marginTop:"1.5%"}}>
        <h1 style={{marginLeft:"1.5%"}}>Quiz Catelog</h1>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Science}
        heading={"Science"}
        description={"Explore the wonders of science"}
      />
        </div>
        <div className="col-3"  style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Technology}
        heading={"Technology"}
        description={"Dive into the latest technological advancements"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Programming}
        heading={"Programming"}
        description={"Learn about coding and software development"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={CSE}
        heading={"Computer Science"}
        description={"Understand the fundamentals of computers and algorithms"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Mathematics}
        heading={"Mathematics"}
        description={"Master the language of numbers and patterns"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={History}
        heading={" History"}
        description={"Discover the events that shaped our world"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Art}
        heading={"Art"}
        description={"Appreciate creativity through various forms of art"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Earth}
        heading={"Geography"}
        description={"Explore the physical features of our planet"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Physics}
        heading={"Physics"}
        description={"Unravel the laws governing the universe"}
      />
        </div>
        <div className="col-3" style={{marginLeft:"1.5%",marginTop:"1.5%"}}>
            <QuizCatelog
        image={Biology}
        heading={"Biology"}
        description={"Study the science of living organisms"}
      />
        </div>

      </div>
    </>
  );
}

export default homePage;
