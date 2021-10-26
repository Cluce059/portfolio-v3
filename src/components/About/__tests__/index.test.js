import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    it('renders', () => {
        render(<About />);
    });
    //double check that matches dom structure as frgament using a snapshot
    it('matches snapshot DOM structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});