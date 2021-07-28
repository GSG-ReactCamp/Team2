import React from 'react'
const ContentList = ({content}) => {
    return (
        <div className="cards_box">
     { content && content.map(content=>(  

          <div class="card">
            <div class="card-header">
            {content ?<p><img className="content_img" src={content.urlToImage} alt ="" /> </p> :''}
            </div>
            <div class="card-body">
              {content ?<span className="content_date">  {content.publishedAt} </span> :''}
        
              {content ? <h4 className="content_title">{content.title}  </h4>:''}
        
              {content ?<p> {content.description.substring(0,200)}... </p> :''}
        
              {/* link */}
              <a href="#">Read More </a>      
          
                
            </div>
          </div>
         
                )

            )} 
      
      </div>
 )
}


export default ContentList