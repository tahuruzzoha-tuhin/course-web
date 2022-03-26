import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='container mb-5'>
                {/* <h4></h4> */}
                <br /><br />
                <h4 className='justify-content-center'>Answer</h4>
                <br />
                <p>1.React is mainly used for single-page applications.
                    React mainly creates virtual DOM in the browser and allows us to effectively re-construct our DOM in JavaScript and push only those changes to the DOM which have actually occurred. By manipulating the DOM react process all the logic very faster. Each piece of reacts code performs in components and the component which is tasked for that specific update needs to be called and dynamically built the UI.</p>
                <br /><hr /><br />
                <p>2.1. State is the internal mutable state of the component, props are the external "immutable" data that is passed through the parent.
                    <br /><hr /><br />

                    2.2 Props means Function's Argument. we can pass data from a component
                    as a parameter using props. Whereas State local is data storage. It's can't pass the data.</p>
                <br /><hr /><br />
                <p>3. Stateless components are props, their whole logic revolves around the props they get. This makes them very easy to track (and test, for that matter). The state component is the proxy, are responsible for client-server communication (XHR, web sockets, etc.), data processing, and responding to user events.</p>
                <br /><hr /><br />
                <p>3.1 The state allows us to manage to change data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.
                    The state starts with the default value when the component is mounted, and then suffers mutations over time (mostly generated by user events). This is a serializable* representation of a single time-moment snapshot.
                    The component controls its own state internally, but aside from setting the initial state-has nothing to do with the state of its children. Data Processing, and responding to user events. These kinds of logistics should be encapsulated in a moderate number of stateful components, while all visualization and formatting logic should move downstream into as many stateless components as possible.</p>
                <br /><hr /><br />

                <p>4. we usually have a few controller components at the top levels of the tree that have their own state that we can modify according to us but
                    The rest of the components just accept props and render them.</p>
            </div>
        </div>
    );
};

export default Footer;