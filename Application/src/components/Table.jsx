import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
        	data: [],
        	columns: ["Address ", "Record Number"]
        }
    }

    componentDidMount = () => {

    }

    parsedData(data) {
    	var arr = []
    	var parsedJSON = JSON.parse(data)
    	console.log(parsedJSON)
		var filterArray = ["id","created_at","radius_worst"]

		for(var i = 0; i< parsedJSON.length;++i){    
			var temp = [ parsedJSON[i].id, parsedJSON[i].created_at ,parsedJSON[i].radius_worst ]
			arr.push(temp)
		}
		return arr;
    }

	render() {
		console.log(this.props.data)
		const data = this.parsedData(this.props.data);

		this.setState({ data: data });
		
		const options = {
		  'filterType': 'checkbox',
		  'onRowsSelect': this.props.onRowsSelect,
		};
		return (
			<MUIDataTable
			  title={"Your Medical Data"}
			  data={this.state.data}
			  columns={this.state.columns}
			  options={options}
			/>
		)
	}
}