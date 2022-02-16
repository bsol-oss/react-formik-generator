import styled from '@emotion/styled'

export const FormContainer = styled.form`
    aligncontent: center;
    display: flex;
    flexdirection: column;
    justifycontent: center;
    marginbottom: 2rem;
    textalign: right;

    fieldset {
        border: none;
        margin: 0 auto;
        max-width: 500px;
        padding: 1rem 0;
        width: 100%;
    }

    input {
        margin-left: 1rem;
        width: 40%;
    }
`

export const FieldContainer = styled.div`
    padding: 0.2rem 0;
`

export const ErrorContainer = styled.div`
    color: red;
    text-align: right;
`
