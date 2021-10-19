import React from 'react';
import { useHistory, useParams } from 'react-router';
import './Details.css'
const Details = () => {
    const { id } = useParams()

    const history = useHistory()
    const goHomePage = () => {
        history.push('/services')
    }
    return (
        <div className="details">
            {/* service details */}
            <h1> this is details{ id }</h1>
            <p>
                        hen you lack good health, everything else in life suffers. It’s harder to concentrate and study. Illness can cause you to fall behind in coursework. Stress can make you feel overwhelmed. If you want to do well in all areas of your life, you must make your health a priority.

                        In the 2020 Social Progress Index, which measures quality of life across the globe using 50 well-being metrics, Americans rated themselves worse off now than they were 10 years ago. This data was collected before the COVID-19 pandemic hit, which has only increased the nation’s need to live healthier, more balanced lives.

                       As we prepare to enter a new year, you may be considering spending more time working on health and wellness. You don’t necessarily need an expensive gym membership or a diet plan to improve your health. You can get solid health and wellness tips from authoritative blogs. The following are some of the top wellness blogs in areas of fitness, nutrition, and mental health.
            </p>
            
            <div className="btn-design">
                      <button onClick={goHomePage}>Previous Page</button>
                  </div>
        </div>
    );
};

export default Details;