import React, { useEffect, useRef, useState } from 'react'
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
    InputFieldsContainer: ({
        fields,
        fieldSize,
        columnGap = '16px',
        rowGap = '16px',
        onInputChange,
    }) => {
        const [gridCols, setGridCols] = useState('repeat(1, 1fr)')

        const containerRef = useRef(null)

        useEffect(() => {
            if (fieldSize == null) return

            const containerWidth = containerRef.current.clientWidth
            const itemMaxWidth = parseInt(fieldSize)
            const colGap = parseInt(columnGap)

            // If "fieldSize" does not have a valid size value
            if (itemMaxWidth !== itemMaxWidth || colGap !== colGap) return

            // Calculate number of grid columns
            let cols = 1
            let totalWidth = itemMaxWidth
            while (totalWidth <= containerWidth) {
                cols++
                totalWidth = cols * itemMaxWidth + (cols - 1) * colGap
            }

            if (cols > 2) setGridCols(`repeat(${cols - 1}, 1fr)`)
        }, [])

        return (
            <Grid
                ref={containerRef}
                templateColumns={gridCols}
                columnGap={columnGap}
                rowGap={rowGap}
            >
                {fields.map((field, i) => (
                    <field.component
                        key={i}
                        name={field.name}
                        value={field.value}
                        onChange={onInputChange}
                    />
                ))}
            </Grid>
        )
    },
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
        formConfig,
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

        const { fieldSize, columnGap, rowGap } = formConfig

        return (
            <form onSubmit={handleSubmit}>
                <InputFieldsContainer
                    fields={inputFields}
                    fieldSize={fieldSize}
                    columnGap={columnGap}
                    rowGap={rowGap}
                    onInputChange={onInputChange}
                />
                {error && <ErrorWrapper>{error}</ErrorWrapper>}
                <Button type="submit" colorScheme="yellow">
                    Submit sample form
                </Button>
            </form>
        )
    },
}

export default defaultWrappers
