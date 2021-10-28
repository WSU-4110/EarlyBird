import React from "react";
import TechInterview from "./TechInterview";

class App extends React.Component{
    state=""
    title=""
    body=""
};

componentDidMount=()=>{
    this.getBlogPost();
}
getTechInterview=()=>{
axios.get("")
.then((response)=>{
    const data=response.data;
    console.log("Data had been received!");
})
.catch(()=>
alert("error retriving data!")
)};

componentTechInter=()=>{
    this.getBlogPost();
}

