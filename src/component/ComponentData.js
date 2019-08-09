import React, { Component } from 'react';
import { connect } from "react-redux";
import { createName, get_all_names } from '../store/actions/action';


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            namesList: [],
        };
    }

    componentDidMount() {
        this.props.get_all_names();
        console.log("Demo did mount: ", this.props.namesListStore);
    };

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("Get derived state:", nextProps.namesListStore);
        // this.setState({
        //     namesList: nextProps.namesListStore
        // });
        return null;
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let formdata = {
            name: this.state.value
        }
        this.props.createName(formdata);
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {/* {this.state.namesList.map((val, i) => (
                        <p>{val}</p>
                    ))} */}
                </div>
            </>
        )
    }
};

// here in state the reducers names present
// here, error and names
// so written state.names
// since we need names reducer here
const mapStateToProps = state => ({
    namesListStore: state.names
})

export default connect(mapStateToProps, { createName, get_all_names })(Demo)