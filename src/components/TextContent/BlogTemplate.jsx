import React from 'react';

class BlogTemplate extends React.Component {
    render() {
        return <div>
            <div className="outer-box">
                <h1>About CET</h1>
                <h3>Some flashy caption goes here.</h3>
                <img src="public/resources/images/TajMumbai.jpeg" alt="College of engineering trivandrum"/>
            </div>
        </div>
    }
}

export default BlogTemplate;