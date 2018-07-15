import React from 'react';

// import App from '../components/elements/derived/page';

// export default () => <App />;

class Page extends React.Component {
    static async getInitialProps({name}) {
        console.log("Hello" + name);
    } 
    render() {
        return (
            <div>
                happy {this.props.url}
            </div>
        )
    }
}

export default () => <Page />