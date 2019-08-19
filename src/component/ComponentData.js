import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    createName,
    get_all_names,
    updateName,
    deleteObject
} from '../store/actions/action';


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            id: "",
            updateName: "",
            deleteId: "",
            namesList: [],
        };
    }

    componentDidMount() {
        this.props.get_all_names();
        console.log("Demo did mount: ", this.props.namesListStore);
    };

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("Get derived state:", nextProps.namesListStore);
        return { namesList: nextProps.namesListStore.names };
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let formdata = {
            name: this.state.value
        }
        this.props.createName(formdata);
        this.props.get_all_names();
    };

    handleSubmitUpdate = (e) => {
        e.preventDefault();
        let formData = {
            id: this.state.id,
            name: this.state.updateName,
            // patch works as update and insert
            // gender: this.state.updateName,
        }
        this.props.updateName(formData);
        this.props.get_all_names();
    };

    handleSubmitDelete = (e) => {
        e.preventDefault();
        let formData = {
            id: this.state.deleteId,
        }
        this.props.deleteObject(formData);
        this.props.get_all_names();
    };

    render() {
        return (
            <>
                {/* post and get */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"
                            name="value"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {console.log(this.state.namesList)}
                    {this.state.namesList.map((val, i) => (
                        <p key={i}>{val.name}</p>
                    ))}
                </div>

                {/* update */}
                <form onSubmit={this.handleSubmitUpdate}>
                    <label>
                        Id:
                        <input type="number"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange} />
                        Name:
                        <input type="text"
                            name="updateName"
                            value={this.state.updateName}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Update" />
                </form>

                {/* delete */}
                <form onSubmit={this.handleSubmitDelete}>
                    <label>
                        Id:
                        <input type="number"
                            name="deleteId"
                            value={this.state.deleteId}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Delete" />
                </form>
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

export default connect(mapStateToProps, {
    createName,
    get_all_names,
    updateName,
    deleteObject
})(Demo)