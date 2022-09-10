import React from 'react'

const Newsitem =(props)=> {
  
    let { title, description, imgurl, newsurl, author, date, source } = props;
    return (
      <div>
        <div className="card my-3">
          <div className='container'>
            <span class="badge rounded-pill bg-danger" style={{
              display: 'flex',
              justifyContent: 'flex - end',
              position: 'absolute',
              right: '0'
            }}>
              {source}
            </span>
          </div>
          <img src={imgurl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p>By {author} on {date}</p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}
export default Newsitem;
