import React from "react";
import {create} from "react-test-renderer";
import About from "./About";

describe( 'About component', () => {
	it( 'matches snapshot', () => {
		expect( create(<About/>).toJSON() ).toMatchSnapshot()
	});
});
