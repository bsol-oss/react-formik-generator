import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'

import {
    FormContainer,
    FieldContainer,
    ErrorContainer,
} from './defaultWrappers.styles'

/**
 * InputWrapper - the container of each input
 * InputFieldsContainer - the container of all inputs -
 * This one is used for passing values and methods for each input components
 * ErrorWrapper - the container of error message
 * ErrorWrapper - the container of the whole form
 */
const defaultWrappers = {
    InputWrapper: ({ children }) => <FieldContainer>{children}</FieldContainer>,
    InputFieldsContainer: ({ fields, onInputChange }) => (
        <>
            {fields.map((field, i) => (
                <field.component
                    key={i}
                    name={field.name}
                    value={field.value}
                    onChange={onInputChange}
                />
            ))}
        </>
    ),
    ErrorWrapper: ({ children }) => <ErrorContainer>{children}</ErrorContainer>,
    FormWrapper: ({
        formDataRef,
        setFormData = () => {},
        yupSchema,
        onFormSubmit,
        inputFields,
        InputFieldsContainer,
        ErrorWrapper,
    }) => {
        const [error, setError] = useState('')

        const onInputChange = (propName, val) => {
            setFormData(propName, val)
        }

        const handleSubmit = async (e) => {
            e.preventDefault()

            try {
                await yupSchema.validate(formDataRef.current)
            } catch (e) {
                return setError(e.message)
            }

            setError('')
            onFormSubmit(e, formDataRef.current)
            console.log('Sample quotation form submitted!', formDataRef.current)
        }

        return (
            <FormContainer onSubmit={handleSubmit}>
                <fieldset>
                    <InputFieldsContainer
                        fields={inputFields}
                        onInputChange={onInputChange}
                    />
                    {error && <ErrorWrapper>{error}</ErrorWrapper>}
                    <Button type="submit" colorScheme="yellow">
                        Submit sample form
                    </Button>
                </fieldset>
            </FormContainer>
        )
    },
}

export default defaultWrappers
