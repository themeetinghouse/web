import './MetaData.css'
import React, { Container } from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { nullLiteral } from 'babel-types';
export default class MetaBoxTeaching extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentVideoData: props.currentVideoData,
            show: props.show,
            fieldData: props.fieldData
        }
    }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.currentVideoData != this.state.currentVideoData) {
            this.setState({ currentVideoData: nextProps.currentVideoData });
            console.log("update currentVideoData prop");
            console.log(nextProps.currentVideoData);
        }
        if (nextProps.show != this.state.show) {
            this.setState({ show: nextProps.show });
            console.log("update show prop");
            console.log(nextProps.show);
        }
        if (nextProps.fieldData != this.state.fieldData) {
            this.setState({ fieldData: nextProps.fieldData });
            console.log("update fieldData prop");
            console.log(nextProps.fieldData);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentVideoData != null && this.state.currentVideoData != null) {
            if (prevState.currentVideoData.title != this.state.currentVideoData.title) {
            }
        }
    }
    getText(str, key) {

        if (str == null)
            return "";
        else {
            return str[key];
        }
    }
    getTextArray(str, key)
    {

        if (str == null)
            return [""];
        else if (str[key]==null)
            return [""];
        else {
            console.log(str[key]);
            return str[key];
        }
    }
    onBlur(e, field, value) {
        this.props.onMetaDataChange({ videoId: this.state.currentVideoData.id, field: field, value: this.state.currentVideoData[value] })
        console.log(this.state.currentVideoData);
    }
    onChange(event, field) {
        var currentVideoData = { ...this.state.currentVideoData }
        currentVideoData[field] = event.target.value;
        this.setState({ currentVideoData: currentVideoData })
    }
    onChangeArray(event, field, key) {
        console.log (event)
        console.log (field)
        console.log (key)
       
        var currentVideoData = { ...this.state.currentVideoData }
        console.log (currentVideoData[field])
        if (currentVideoData[field]==null)
            currentVideoData[field]=[];
        currentVideoData[field][key] = event.target.value;
        this.setState({ currentVideoData: currentVideoData })
    }
    onAddItem(e, field, value){
        var currentVideoData = { ...this.state.currentVideoData }
        if (e.target.value==null)
            currentVideoData[field]=[""];
        else
            currentVideoData[field] = [...this.state.currentVideoData [field], ""];
        this.setState({ currentVideoData: currentVideoData })
    }
    onClickFromYoutube(e, field, value) {
        this.props.onMetaDataChange({ videoId: this.state.currentVideoData.id, field: field, value: eval(value) })
    }
    removeVideoType(e, name) {
        console.log(this.state);
        var temp = this.state.currentVideoData.videoTypes;
        var index = temp.indexOf(name);
        if (index > -1) {
            temp.splice(index, 1);
        }
        this.props.onMetaDataChange({ videoId: this.state.currentVideoData.id, field: "videoTypes", value: temp })
    }
    renderYoutubeButton(item) {
        if (item.youtube != null)
            return (
                <Button variant="outline-light" size="xsmall" className="p-0"
                    onClick={(e) => { this.onClickFromYoutube(e, item.youtube.onClickField1, item.youtube.onClickField2) }}>YT</Button>
            )
        else
            return null;
    }
    render() {
        MetaBoxTeaching.propTypes = {
            onMetaDataChange: PropTypes.func
        };
        if (this.state.show) {
            return (

                <Card className="bg-dark text-white mb-0">
                    <Card.Header className="m-0 p-0"><div style={{ float: 'left' }}>{this.state.fieldData.title}</div><div style={{ float: 'right' }} onClick={(e) => { this.removeVideoType(e, this.state.fieldData.name) }}>X</div></Card.Header>
                    <table className="sortable darkTable">
                        <thead>
                            <tr><th>key</th><th>value</th></tr>
                        </thead>
                        <tbody>
                            {
                                this.state.fieldData.fields.map((item) => {
                                    if (item.type == "input")
                                        return (
                                            <tr key={item.name}>
                                                <td>{item.name}</td>
                                                <td>
                                                    <input className="metaInput" size={item.size}
                                                        value={this.getText(this.state.currentVideoData, item.field)}
                                                        onChange={(e) => { this.onChange(e, item.field) }} type="text"
                                                        onBlur={(e) => { this.onBlur(e, item.field, item.field) }}
                                                    />
                                                    {this.renderYoutubeButton(item)}
                                                </td>
                                            </tr>);
                                    else if (item.type == "inputarray")
                                        return (
                                            <tr key={item.name}>
                                                <td>{item.name}</td>
                                                <td>
                                                {this.getTextArray(this.state.currentVideoData, item.field).map((z,index)=>
                                                    {
                                                        return (
                                                            <div>
                                                            <input key={index} className="metaInput" size={item.size}
                                                                value={z}
                                                                onChange={(e) => { this.onChangeArray(e, item.field, index) }} type="text"
                                                                onBlur={(e) => { this.onBlur(e, item.field, item.field) }}
                                                            /></div>
                                                )} )
                                                }
                                                <Button variant="outline-light" size="xsmall" className="p-0"
                                                    onClick={(e) => { this.onAddItem(e, item.field, this.state.currentVideoData) }}>+</Button>
       
                                                </td>
                                            </tr>

                                        );
                                    else if (item.type == "textarea")
                                        return (
                                            <tr key={item.name}>
                                                <td>{item.name}</td>
                                                <td>
                                                    <textarea rows="4" cols={item.cols} className="metaInput"
                                                        onBlur={(e) => { this.onBlur(e, item.field, item.field) }}
                                                        onChange={(e) => { this.onChange(e, item.field) }}
                                                        value={this.getText(this.state.currentVideoData, item.field)}></textarea>
                                                    {this.renderYoutubeButton(item)}
                                                </td>
                                            </tr>
                                        )
                                })

                            }

                        </tbody>
                    </table></Card>);
        } else { return null; }

    }
}