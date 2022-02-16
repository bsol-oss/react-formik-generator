import React, { useRef } from 'react'
import { buildYup } from 'schema-to-yup'

import defaultWrappers from './defaultWrappers.component'
import defaultActions from './defaultActions.util'
import generateInput from './inputGenerator.util'

/**
 * Generate a yupSchema, a input component list and a complete form
 * @param {object} schema - a valid JSON schema
 * @param {object} config - config for buildYup() -
 *  this config may contain 'privates' to hide fields like 'created_by',...
 *  and other props to define the input format/logic
 * @param {object} initialFormData - form data: data of all schema propertie
 * if any property is not provided the initial value, it will receive the default value from schema or undefined
 * @param {object} wrappers - wrappers for individual input, all inputs, error message and for the form
 * @param {object} actions - handlers for input change and form submit
 * @param {object} components - custom input components for each schema property
 * @returns {yupSchema, components, Form}
 */
const useFormGenerator = (
    schema,
    config = {},
    initialFormData = {},
    wrappers = defaultWrappers,
    actions = defaultActions,
    components = {} // we accept custom input components if user chooses to do so
) => {
    const formDataRef = useRef(initialFormData)
    const formData = formDataRef.current

    const setFormData = (prop, newVal) => {
        formDataRef.current[prop] = newVal
    }

    const yupSchema = buildYup(schema, config)

    const { properties: props } = schema
    const { privates = [] } = config
    const { _nodes: nodes } = yupSchema

    const inputFields = nodes
        .filter((propName) => privates.indexOf(propName) < 0)
        .map((propName) => {
            const propValue =
                formData[propName] !== undefined
                    ? formData[propName]
                    : props[propName].default !== undefined
                    ? props[propName].default
                    : ''

            return {
                name: propName,
                value: propValue,
                component:
                    components[propName] ||
                    generateInput(
                        propName,
                        propValue,
                        props[propName],
                        config,
                        {
                            Wrapper: wrappers.InputWrapper,
                        }
                    ),
            }
        })

    const data = {
        yupSchema,
        components: inputFields,
        Form: () => (
            <wrappers.FormWrapper
                formDataRef={formDataRef}
                setFormData={setFormData}
                yupSchema={yupSchema}
                inputFields={inputFields}
                InputFieldsContainer={wrappers.InputFieldsContainer}
                ErrorWrapper={wrappers.ErrorWrapper}
                {...actions}
            />
        ),
    }

    return data
}

export default useFormGenerator
