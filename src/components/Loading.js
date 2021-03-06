var React = require('react');

var PropTypes = require('prop-types');


var styles = {



    content:{

        textAlign: 'center',
        fontSize: '35px'
    }
}

class Loading extends React.Component{


    constructor(props){


        super(props);

        this.state = {


            text: props.text
        };
    }




    render(){



        return (


            <p style={styles.content}>


                {this.state.text}


            </p>


        )
    }
}

Loading.propTypes = {

    text: PropTypes.string.isRequired
};


Loading.defaultProps = {


    text: 'Coocking'
};

export default Loading;