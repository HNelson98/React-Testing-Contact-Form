import React from 'react';
import { render, fireEvent, findByTestId } from '@testing-library/react';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';



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

test("form submit adds the form on the screen", () =>{

    act(async () => {
          //ARRANGE
    const {getByLabelText, getByTestId} = render (<ContactForm />)

    const fNameInput = getByLabelText(/first name/i)
    const lNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    //ACT add inputs to the feilds to have the submit button submit.

    //change input values
    fireEvent.change(fNameInput, {target: {value: "Henry"}})
    fireEvent.change(lNameInput, {target: {value: "Nelson"}})
    fireEvent.change(emailInput, {target: {value: "Henry@nelson.com"}})
    fireEvent.change(messageInput, {target: {value: "Happy birthday to you, happy birthday to you"}})
    

    //ASSERT
    expect(fNameInput.value).toBe("Henry")
    expect(lNameInput.value).toBe("Nelson")
    expect(emailInput.value).toBe("Henry@nelson.com")
    expect(messageInput.value).toBe("Happy birthday to you, happy birthday to you")

    //click it!!

       fireEvent.click(getByTestId(/submit/i))
   

   const formData =  await findByTestId("preData")
   expect(formData).toBeInTheDocument();


        
    })
  

});