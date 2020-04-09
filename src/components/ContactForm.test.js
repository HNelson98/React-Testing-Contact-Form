import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';



test("inputs are visible", () =>{
    //ARRANGE
    const {getByLabelText} = render (<ContactForm />)

    //ACT
    //none

    //ASSERT
    getByLabelText(/first name/i)
    getByLabelText(/last name/i)
    getByLabelText(/email/i)
    getByLabelText(/message/i)


});

test("form submit adds the form on the screen", () =>{});