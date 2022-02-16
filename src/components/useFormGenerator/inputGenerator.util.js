import React, { useState } from 'react'

/**
 * Generate input component for a schema property
 * @param {string} name - name of the property
 * @param {string | number} value - initial value
 * @param {object} schemaProp - schema object/value of the property
 * @param {object} schemaConfig - the config passed to buildYup()
 * @param {React component} param4 - the input's wrapper
 * @returns {React component}
 */
const generateInput =
    (name, value, schemaProp, schemaConfig, { Wrapper }) =>
    ({ onChange }) => {
        const [val, setVal] = useState(value)

        const typeAttr = getInputTypeAttr(schemaProp.type)

        let step
        if (typeAttr === 'number') {
            step = getNumberInputStep(schemaProp.multipleOf)
        }

        const otherInputProps = {}
        if (step) {
            otherInputProps.step = step
        }

        const onHandleChange = (e) => {
            setVal(e.target.value)

            onChange(name, e.target.value)
        }

        return (
            <Wrapper>
                <label htmlFor={name}>{schemaProp.title}</label>
                <input
                    id={name}
                    name={name}
                    type={typeAttr}
                    value={val}
                    onChange={onHandleChange}
                    placeholder={schemaProp.description || ''}
                    {...otherInputProps}
                />
            </Wrapper>
        )
    }

function getInputTypeAttr(type) {
    switch (type) {
        case 'integer':
        case 'number':
            return 'number'

        default:
            return 'string'
    }
}

function getNumberInputStep(multipleOf) {
    return multipleOf ? multipleOf : 1
}

export default generateInput
