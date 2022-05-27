import React, { useState } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'

/**
 * InputWrapper - the container of each input
 * InputFieldsContainer - the container of all inputs -
 * This one is used for passing values and methods for each input components
 * ErrorWrapper - the container of error message
 * FormWrapper - the container of the whole form
 */
const defaultWrappers = {
    InputWrapper: ({ children }) => <Box padding="0.2rem 0">{children}</Box>,
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
    ErrorWrapper: ({ children }) => (
        <Box color="red.500" textAlign="right">
            {children}
        </Box>
    ),
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
            <Grid
                templateColumns="repeat(1, 1fr)"
                gap={1}
                onSubmit={handleSubmit}
            >
                <InputFieldsContainer
                    fields={inputFields}
                    onInputChange={onInputChange}
                />
                {error && <ErrorWrapper>{error}</ErrorWrapper>}
                <Button type="submit" colorScheme="yellow">
                    Submit sample form
                </Button>
            </Grid>
        )
    },
}

export default defaultWrappers
