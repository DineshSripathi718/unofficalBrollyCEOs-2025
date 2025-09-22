import React from 'react'
import './EDetails.css';

function EDetails({className, information, sectionTitle, sectionName}) { 

    
  return (
    <section className={sectionName}>
        <h2 className="title">{sectionTitle}</h2>
        <div className='expContainers'>
            {information.map(
                (item,index) => {
                    return <div key={index} className={className}>
                        <div className="details">
                            <div className="title">
                                {item.designation || item.degree}
                            </div>
                            <div className="company-name">
                                {item.company || item.institue}
                            </div>
                            <div className="timeline">
                                {item.timeline}
                            </div>
                        </div>
                        <div className="description">
                            {item.description}
                        </div>
                    </div>
                }
            )}
        </div>
    </section>
  )
}

export default EDetails;