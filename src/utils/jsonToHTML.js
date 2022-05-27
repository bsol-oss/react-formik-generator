export default function jsonToHTML(schemaJSON, index) {
    let result = ''
    const keys = Object.keys(schemaJSON)
    const objIsArray = Array.isArray(schemaJSON)

    for (let i = 0, l = keys.length; i < l; ++i) {
        const padLeft = '&nbsp;'.repeat(index * 4)

        const key = keys[i]
        const val = schemaJSON[keys[i]]

        const keyDisplayed = `"${key}"`
        const valDisplayed = typeof val === 'string' ? `"${val}"` : val

        if (val === undefined) continue

        if (typeof val === 'object') {
            const valIsArray = Array.isArray(val)
            const startParenthesis = valIsArray ? '[' : '{'
            const endParenthesis = valIsArray ? ']' : '}'

            result += `<div>${padLeft}${keyDisplayed}: ${startParenthesis}</div>
                ${jsonToHTML(val, index + 1)}
            <div>${padLeft}${endParenthesis},</div>`
        } else {
            result += objIsArray
                ? `<div>${padLeft}${valDisplayed},</div>`
                : `<div>${padLeft}${keyDisplayed}: ${valDisplayed},</div>`
        }
    }

    return result
}
