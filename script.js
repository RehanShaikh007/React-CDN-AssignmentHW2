
let Containerfc = () => {
   return(
     <div style={{padding:"30px", width:"500px"}}>
        <h1>Topics Covered</h1>
        <p>The following is a list of all the topics we cover in MDN learning area</p>
        <a href="#" style={{color:"#3aa2d5"}}>Getting started with the web</a>
        <p>Provides a practical introduction to web development for complete beginners.</p>
        <a href="#" style={{color:"#3aa2d5"}}>HTML -- Structuring the web</a>
        <p>HTML is the language we use to structure the different parts of our content and define what their meaning or purpose is. The topic teaches HTML in detail.</p>
        <a href="#" style={{color:"#3aa2d5"}}>CSS -- Styling the web</a>
        <p>CSS is the language we use to control our web content's style and layout, as well as adding behaviour like animation. This topics provides comprehensive coverage of CSS.</p>
     </div>
   )
}

ReactDOM.render(<Containerfc />, document.getElementById("container"));