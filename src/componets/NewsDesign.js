import React from 'react';

import "./News.css";

const NewsDesign = (props) => {

    console.log(props.apiData, '...apiData');
    return (
        <>
          <div className="mainDiv">
      {props.apiData.map((val) => {
        return (
          <>
            <div class="card" style={{ width: "440px" }}>
              <img class="card-img-top" src={val.urlToImage == null ? "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg":val.urlToImage } alt="Card image cap" />
              <div className='main_author'><p className='author'>{val.author} </p></div>
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">
                  {val.description}
                </p>
              </div>
               <i>{val.publishedAt}</i>
               <a id='read' href={val.url} target='_blank'>Read More</a>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};
export default NewsDesign;
