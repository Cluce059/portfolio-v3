import React from "react";
import ReactDOM from "react-dom";

//const Cards =(props) => {

     /*}
 // console.log(props.img);
  //...props in a span to just get them all in bulk
  console.log(...props);
    const { image } = props.img;
    //const image = pfp;
    var style = { backgroundImage: 'url(' + image + ')'}

      return (
    
        <section>
          {projects && 
          projects.map(project => ( 
<article className="card">
            <header style={style} id={image} className="card-header">
              <h4 className="card-header--title">News</h4>
            </header>
              <div className="card-body">
              <p className="date">March 20 2015</p>
              
              <h2>{this.project.title}</h2>
              
              <p className="body-content">{this.project.text}</p>
              
              <button className="button button-primary">
                  <i className="fa fa-chevron-right"></i> Find out more
              </button>
            </div>
               
            </article>

          {/* ))}
        </section> 
      );
*///}

      function CardHeader() {
          const { image } = this.props;
          var style = { 
              backgroundImage: 'url(' + image + ')',
          };
          return (
            <header style={style} id={image} className="card-header">
              <h4 className="card-header--title">News</h4>
            </header>
          )
        }
      
      function Button() {
          return (
            <button className="button button-primary">
              <i className="fa fa-chevron-right"></i> Find out more
            </button>
          )
      }
      
      function CardBody() {
          return (
            <div className="card-body">
              <p className="date">March 20 2015</p>
              
              <h2>{this.props.title}</h2>
              
              <p className="body-content">{this.props.text}</p>
              
              <Button />
            </div>
          )
        }

      
   const  Card = () => {
          return (
            <article className="card">
              <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
              <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
            </article>
          )
      };

      
            
      //    ReactDOM.render(
      //      <Card />,
      //      document.getElementById('app')
      //    );
      //  };

      export default Card;
