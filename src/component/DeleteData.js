import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteName, get_all_names } from '../store/actions/action';

class DeleteData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            namesList: [],
        };
    }

    componentDidMount() {
        this.props.get_all_names();
        console.log("DeleteData did mount: ", this.props.namesListStore);
    };

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("Get derived state:", nextProps.namesListStore);
        return ({ namesList: nextProps.namesListStore });
        // return null;
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        // event.preventDefault();
        let formdata = {
            name: this.state.value
        }
        this.props.deleteName(formdata);
        console.log("namesList: ", this.state.namesList);
    };

    renderNamesList = () => {
        return (
            this.state.namesList.names.map((val, i) =>
                <li key={i}>{val.name}</li>
            )
        );
    };

    render() {
        const style = { margin: "1vw" };
        return (
            <div style={style}>
                <form onSubmit={this.handleSubmit}>
                    <label> Name {" "} </label>
                    <input type="text"
                        value={this.state.value}
                        onChange={this.handleChange} />
                    {" "}
                    <input type="submit" value="Delete" />
                </form>
                <div>
                    <h2>Names List: </h2>
                    <ul>
                        {this.renderNamesList()}
                    </ul>
                </div>
            </div>
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

export default connect(mapStateToProps, { deleteName, get_all_names })(DeleteData)