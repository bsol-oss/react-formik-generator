import React, { useState } from 'react'
import {
    Switch,
    RadioGroup,
    Stack,
    Radio,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
} from '@chakra-ui/react'
// import { Autocomplete, DateTimePicker } from '@chassis-app/frontend-components'

import useFormGenerator from './index'
import { ChakraProvider } from '@chakra-ui/react'
import { theme1 } from '../../const/theme'

export default {
    title: 'FormGenerator',
}

export const DefaultFormGenerator = () => {
    const [schema] = useState({
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: 'http://example.com/quotation.schema.json',
        title: 'Quotation',
        description: 'Quotation',
        type: 'object',
        properties: {
            quote_date: {
                type: 'string',
                // format: 'date',
                title: 'Quotation date',
                description: 'Quotation Date',
                required: true,
            },
            rep: {
                type: 'integer',
                // exclusiveMinimum: 0,
                title: 'Rep',
                description: 'ID of sales staff (auth_user)',
                required: true,
            },
            cusID: {
                type: 'integer',
                // exclusiveMinimum: 0,
                title: 'Customer ID',
                description: 'ID of customer (Partymaster)',
                required: true,
            },
            status: {
                type: 'integer',
                enum: [1, 2],
                // enum_titles: ["New", "Pending"],
                // exclusiveMinimum: 0,
                title: 'Status',
                description: 'ID of status',
                required: true,
            },
            is_obsolete: {
                type: 'boolean',
                title: 'Obsolete',
                description: 'Is it obsolete?',
                required: true,
            },
            created_by: {
                type: 'integer',
                exclusiveMinimum: 0,
                description: 'ID of user',
            },
            modified_by: {
                type: 'integer',
                exclusiveMinimum: 0,
                private: true,
                description: 'ID of user',
            },
        },
        required: [
            'quote_date',
            'rep',
            'cusID',
            'billing_address',
            'shipping_address',
            'total_amt',
            'status',
        ],
    })

    const data = {
        cusID: '100',
        quote_date: new Date(),
        is_obsolete: true,
        status: 1,
        rep: 50,
    }

    const mockACData = [
        { id: '1', value: '1' },
        { id: '2', value: '2' },
        { id: '100', value: '100' },
        { id: '200', value: '200' },
        { id: '300', value: '300' },
    ]

    // const CusIDComp = ({ name, value, onChange }) => {
    //     let existingItem = mockACData.find((it) => it.value === value)
    //     if (!existingItem) existingItem = {}

    //     const [item, setItem] = useState(existingItem)

    //     return (
    //         <Box paddingBottom="1rem">
    //             <h3>CusID</h3>
    //             <Autocomplete
    //                 data={mockACData}
    //                 value={item}
    //                 placeholder={'Name'}
    //                 itemDisplay={(v) => {
    //                     return v.value
    //                 }}
    //                 dataDescriptor={{
    //                     id: 'id',
    //                     field: ['value'],
    //                 }}
    //                 onSelect={(v) => {
    //                     const newItem = v ? v : {}

    //                     setItem(newItem)
    //                     onChange(name, newItem.value || '')
    //                 }}
    //             />
    //         </Box>
    //     )
    // }

    // const QuoteDateComp = ({ name, value, onChange }) => {
    //     const [val, setVal] = useState(value)

    //     return (
    //         <Box paddingBottom="1rem">
    //             <h3>Quote Date</h3>
    //             <DateTimePicker
    //                 date={val}
    //                 changeDate={(v) => {
    //                     setVal(v)
    //                     onChange('quote_date', v)
    //                 }}
    //             />
    //         </Box>
    //     )
    // }

    const IsObsoleteComp = ({ name, value, onChange }) => {
        const [val, setVal] = useState(value)

        return (
            <Box paddingBottom="1rem">
                <h3>Is obsolete</h3>
                <Switch
                    size="lg"
                    isChecked={!!val}
                    onChange={() => {
                        setVal(!val)
                        onChange(name, !val)
                    }}
                />
            </Box>
        )
    }

    const StatusComp = ({ name, value, onChange }) => {
        const [val, setVal] = useState(value)

        return (
            <Box paddingBottom="1rem">
                <h3>Status</h3>
                <RadioGroup
                    value={val}
                    onChange={(newVal) => {
                        setVal(+newVal)
                        onChange(name, +newVal)
                    }}
                >
                    <Stack direction="row">
                        <Radio value={1}>Status 1</Radio>
                        <Radio value={2}>Status 2</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        )
    }

    const RepComp = ({ name, value, onChange }) => {
        const [val, setVal] = useState(value)

        return (
            <Box paddingBottom="1rem">
                <h3>Rep</h3>
                <Slider
                    aria-label="slider-ex-5"
                    name={name}
                    value={val}
                    min={1}
                    max={60}
                    step={1}
                    onChange={(v) => {
                        setVal(v)
                        onChange(name, v)
                    }}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Box>
        )
    }

    const sampleQuotation = useFormGenerator(
        schema,
        {
            errMessages: {
                quote_date: {
                    required: 'Quote date is missing',
                    format: 'Not a valid date',
                },
                rep: {
                    required: 'Rep is missing',
                },
                cusID: {
                    required: 'cusID is missing',
                },
                billing_address: {
                    required: 'Billing address is missing',
                },
                shipping_address: {
                    required: 'Shipping address is missing',
                },
                total_amt: {
                    required: 'Total amount is missing',
                },
                status: {
                    required: 'Status is missing',
                },
                email: {
                    required: 'You must enter an email address',
                    format: 'Not a valid email address',
                },
            },
            privates: ['created_by', 'modified_by'],
        },
        data,
        undefined,
        undefined,
        {
            // cusID: CusIDComp,
            // quote_date: QuoteDateComp,
            is_obsolete: IsObsoleteComp,
            status: StatusComp,
            rep: RepComp,
        }
    )

    return (
        <div className="App">
            <ChakraProvider theme={theme1}>
                <h2 align="center">React Formik Generator</h2>
                {sampleQuotation.Form && <sampleQuotation.Form />}
            </ChakraProvider>
        </div>
    )
}
