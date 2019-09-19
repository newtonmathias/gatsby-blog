import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import '../components/styles/thumbnail.css'

const Thumbnail = ({ title, slug, fluid, tags}) => {
  const backgroundFluidImageStack = [
    fluid,
    `linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5))`
  ].reverse()
  return (
    <React.Fragment>
      <a href={slug}>
      <BackgroundImage
    className="thumbnail"
      fluid={backgroundFluidImageStack} 
      style={{
        height: `192.016px`,
        width: `100%`,
      }}
    >
    <h3 className="thumbnail-text">{title}</h3>
    <ul>
                {tags.map(tag => (
                    <li key={tag}>
                        <p className="thumbnail-tag">
                            {tag}
                        </p>  
                    </li>
                ))}
            </ul>
    </BackgroundImage>
      </a>
    </React.Fragment>
    
  )
}

export default Thumbnail
