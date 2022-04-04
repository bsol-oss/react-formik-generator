import { extendTheme } from '@chakra-ui/react'

const defaultValues = {
    // in rem
    fontSize: {
        mini: '0.6',
        small: '0.8',
        medium: '1',
        large: '1.1',
        xl: '1.5',
    },
    fontWeight: {
        regular: 400,
        bold: 700,
    },
    // color variations
    colorSet1: {
        primary: '#232F3E',
        secondary: '#f0c14b',
        text: '#000000',
        error: 'red',
    },

    colorSet2: {
        primary: '#0f4c81',
        secondary: '#93bde2',
        error: '#e77600',
    },

    backgroundColor: '#ffffff',
    lightBlueBackgroundColor: '#37475a',
    lightBackgroundColor: '#eee',
    darkBackgroundColor: ' #8a8a8a',
    errorBackgroundColor: '#fff5f5',
    glassBackgroundColor: 'rgba(0, 0, 0, 0.4)',
    transparentLightBackgroundColor: 'rgba(255, 255, 255, 0.75)',

    shadow: [
        'rgba(255, 255, 255, 0.5)',
        'rgba(228, 121, 17, 0.5)',
        'rgba(57, 73, 76, 0.35)',
    ],

    // in rem
    borderRadius: {
        small: '0.15',
        normal: '0.5',
        big: '1',
        large: '3',
    },

    // in px
    borderWidth: {
        veryThin: '0.5',
        thin: '1',
        medium: '2',
        thick: '4',
    },

    // transition
    timeTransition: {
        slow: '0.2s',
        medium: '0.5s',
        fast: '0.8s',
    },
}

export const theme = {
    // basic setup
    breakpoints: {
        mobileSmall: '300px',
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        desktopPlus: '1280px',
    },
    fonts: ['Amazon Ember', 'Arial', 'sans-serif', 'Noto Sans HK'],

    datePicker: {
        headerBackground: defaultValues.lightBlueBackgroundColor,
        headerColor: defaultValues.backgroundColor,

        boxShadow: defaultValues.shadow[2],
        borderColor: defaultValues.colorSet1.primary,
        borderRadius: defaultValues.borderRadius.small,
        borderSize: defaultValues.borderWidth.veryThin,

        clickedColor: defaultValues.glassBackgroundColor,

        fontColor: defaultValues.darkBackgroundColor,
        fontSize: defaultValues.fontSize.small,
    },
    dateTimePicker: {
        shadowBox: defaultValues.shadow[2],
        headerColor: defaultValues.backgroundColor,

        backgroundColor: defaultValues.lightBlueBackgroundColor,

        fontSize: defaultValues.fontSize.mini,
        titleFontSize: defaultValues.fontSize.large,
        fontWeight: defaultValues.fontWeight.bold,

        borderRadius: defaultValues.borderRadius.small,
        borderColor: defaultValues.lightBackgroundColor,
    },

    // per component setup
    autoComplete: {
        background: defaultValues.backgroundColor,
        backgroundHover: defaultValues.darkBackgroundColor,

        borderColorFocus: defaultValues.colorSet1.primary,
        borderColorNotFocus: defaultValues.lightBackgroundColor,
        shadow: defaultValues.shadow,

        borderRadius: defaultValues.borderRadius.small,
        borderWidth: defaultValues.borderWidth.thin,

        fontSize: defaultValues.fontSize.medium,

        chipBorderRadius: defaultValues.borderRadius.big,
        chipBackground: defaultValues.colorSet1.primary,
        chipColor: defaultValues.backgroundColor,
    },

    buttonComponents: {
        primaryColor: defaultValues.colorSet1.primary,
        secondaryColor: defaultValues.colorSet1.secondary,
        backgroundSelected: defaultValues.colorSet1.secondary,
        backgroundNotSelected: defaultValues.backgroundColor,

        fontSize: defaultValues.fontSize.medium,

        borderWidth: defaultValues.borderWidth.thin,
        borderRadiusLangSelect: defaultValues.borderRadius.small,
        borderRadiusSubmit: defaultValues.borderRadius.mini,

        timeTransition: defaultValues.timeTransition.medium,
    },

    formikComponents: {
        titleColor: defaultValues.colorSet1.text,
        titleWeight: defaultValues.fontWeight.regular,
        titleSize: defaultValues.fontSize.xl,

        background: defaultValues.backgroundColor,
        backgroundDisabled: defaultValues.lightBackgroundColor,

        borderColorFocus: defaultValues.colorSet2.error,
        borderColorNotFocus: defaultValues.darkBackgroundColor,
        borderColorDisabled: defaultValues.lightBackgroundColor,

        shadowNotFocus: defaultValues.shadow[0],
        shadowFocus: defaultValues.shadow[1],
        shadowDisabled: defaultValues.shadow[0],

        fontSize: defaultValues.fontSize.medium,

        borderWidth: defaultValues.borderWidth.thin,
        borderRadius: defaultValues.borderRadius.small,

        errorColor: defaultValues.colorSet1.error,
        errorFontSize: defaultValues.fontSize.small,

        checkedBackgroundColor: defaultValues.lightBlueBackgroundColor,
        hoverBackgroundColor: defaultValues.lightBackgroundColor,
    },

    dataTable: {
        headerColor: defaultValues.colorSet1.text,

        background: defaultValues.backgroundColor,
        searchBackground: defaultValues.glassBackgroundColor,
        shadowColor: defaultValues.lightBackgroundColor,

        evenRow: defaultValues.colorSet2.secondary,
        oddRow: defaultValues.lightBackgroundColor,

        toggleEnabledColor: defaultValues.colorSet2.primary,
        toggleDisabledColor: defaultValues.lightBackgroundColor,

        loaderPrimaryColor: defaultValues.darkBackgroundColor,
        loaderSecondaryColor: defaultValues.colorSet2.primary,

        fontSize: defaultValues.fontSize.small,
        fontWeight: defaultValues.fontWeight.bold,

        fontSizeIcon: defaultValues.fontSize.medium,

        borderWidth: defaultValues.borderWidth.thin,
        borderRadius: defaultValues.borderRadius.small,
        borderColor: defaultValues.lightBackgroundColor,

        shadowFocus: defaultValues.shadow[1],
        hoverColor: defaultValues.colorSet1.primary,
        borderColorFocus: defaultValues.colorSet2.error,
    },

    fileUploadDropZone: {
        primaryColor: defaultValues.lightBlueBackgroundColor,
        background: defaultValues.backgroundColor,

        fontSize: defaultValues.fontSize.medium,
        fontSizeIcon: defaultValues.fontSize.xl,

        borderRadius: defaultValues.borderRadius.small,

        borderWidth: defaultValues.borderWidth.thin,
        borderColor: defaultValues.lightBackgroundColor,
        borderWidthDropDiv: defaultValues.borderWidth.thin,

        overlayBackground: defaultValues.glassBackgroundColor,
        overlayColor: defaultValues.backgroundColor,
        overlayFontSize: defaultValues.fontSize.mini,
    },

    gallery: {
        primaryColor: defaultValues.lightBlueBackgroundColor,
        buttonHover: 'rgba(15, 76, 129, 0.3)',

        fontSize: defaultValues.fontSize.medium,
        fontSizeIcon: defaultValues.fontSize.xl,

        borderRadius: defaultValues.borderRadius.small,
        borderWidth: defaultValues.borderWidth.thin,

        timeTransition: defaultValues.timeTransition.medium,
    },

    navbar: {
        background: defaultValues.colorSet1.primary,
        backgroundSearchField: defaultValues.colorSet1.secondary,

        color: defaultValues.backgroundColor,
        userNameColor: defaultValues.lightBackgroundColor,

        fontSize: defaultValues.fontSize.medium,
        fontWeight: defaultValues.fontWeight.bold,

        borderRadius: defaultValues.borderRadius.small,
        borderWidth: defaultValues.borderWidth.thin,

        mobileMenuColor: defaultValues.lightBackgroundColor,
        mobileMenuFontSize: defaultValues.fontSize.medium,
        mobileMenuBorderBottom: '#545b64',

        autosuggestColor: defaultValues.colorSet1.text,
        autosuggestBackground: defaultValues.backgroundColor,
        autosuggestHoverBackground: defaultValues.darkBackgroundColor,
        autosuggestFontSize: defaultValues.fontSize.small,

        activeHamburgerColor: defaultValues.colorSet1.secondary,
    },

    productEditor: {
        iconColor: defaultValues.backgroundColor,
        editorBodyBackground: defaultValues.glassBackgroundColor,
        inputBackground: defaultValues.transparentLightBackgroundColor,
        minimizeIconBackground: '#fdb225',
        maximizeIconBackground: '#2ac833',
        editorBarBackground: '#d0cfd0',
        editorBarLinearBackground: ['#c8c5c8', '#eae7ea'],

        borderColorFocus: defaultValues.colorSet1.primary,
        borderColorNotFocus: defaultValues.transparentLightBackgroundColor,
        shadow: defaultValues.shadow,

        fontSize: defaultValues.fontSize.medium,
        fontSizeTextLabel: defaultValues.fontSize.big,

        borderRadius: defaultValues.borderRadius.normal,
        borderRadiusEditor: defaultValues.borderRadius.small,
        borderRadiusIcon: defaultValues.borderRadius.big,
        borderWidth: defaultValues.borderWidth.thin,
    },

    radioButton: {
        borderColor: defaultValues.lightBlueBackgroundColor,
        backgroundSelected: defaultValues.lightBlueBackgroundColor,
        backgroundNotSelected: defaultValues.backgroundColor,

        fontSize: defaultValues.fontSize.medium,

        borderRadius: defaultValues.borderRadius.large,
        borderWidth: defaultValues.borderWidth.thin,
    },

    gallerySelect: {
        borderColor: defaultValues.lightBackgroundColor,
        backgroundSelected: defaultValues.glassBackgroundColor,
        deleteIconColor: defaultValues.colorSet2.error,

        fontSize: defaultValues.fontSize.medium,

        borderRadius: defaultValues.borderRadius.small,
        borderWidth: defaultValues.borderWidth.thin,
    },

    modal: {
        borderColor: defaultValues.lightBackgroundColor,
        modalBackgroundColor: defaultValues.glassBackgroundColor,
        bodyBackgroundColor: defaultValues.backgroundColor,

        fontSize: defaultValues.fontSize.medium,

        borderRadius: defaultValues.borderRadius.small,
        borderWidth: defaultValues.borderWidth.thin,
    },

    productTemplate: {
        templateBackground: defaultValues.lightBackgroundColor,
        templateColor: defaultValues.backgroundColor,
        templateTextColor: defaultValues.colorSet1.text,
        priceColor: defaultValues.colorSet1.primary,
        brandColor: defaultValues.colorSet2.primary,
        fontWeight: defaultValues.fontWeight.bold,
        fontRegularWeight: defaultValues.fontWeight.regular,
        fontSizeSmall: defaultValues.fontSize.small,
        fontSizeMedium: defaultValues.fontSize.medium,
        fontSizeLarge: defaultValues.fontSize.xl,
    },
}

export const up = (breakpointName) => {
    const breakpoint = theme.breakpoints[breakpointName]

    return `@media (min-width: ${breakpoint})`
}

export const down = (breakpointName) => {
    const breakpoint = theme.breakpoints[breakpointName]

    return `@media (max-width: ${breakpoint})`
}

export const theme1 = extendTheme(
    Object.assign({}, theme, {
        breakpoints: {
            mobile: '480px',
            tablet: '768px',
            desktop: '1280px',
            desktopPlus: '1280px',
        },
        styles: {
            global: {
                'html, body': {
                    fontFamily:
                        "'roboto', 'Noto Sans TC', 'Noto Sans SC', sans-serif",
                },
                a: {
                    color: 'blue.800',
                },
            },
        },
        components: {
            Button: {
                defaultProps: {
                    colorScheme: 'yellow',
                },
            },
            DataTable: {
                bgColor: '#fff',
                fontSize: 1,
                borderWidth: 1,
                widgetSize: 'md',
                Actions: {
                    bgColor: '#fff',
                    TotalRecords: {
                        fontSize: 0.8,
                        padding: 0.5,
                    },
                    ToggleButtons: {
                        colorScheme: 'gray',
                        size: 'sm',
                    },
                },
                Header: {
                    fontSize: 0.8,
                    fontWeight: 700,
                    widgetSize: 'sm',
                    bgColor: '#fff',
                    borderBottomWidth: '1px',
                    borderColor: '#8a8a8a',
                    Search: {
                        bgColor: '#fff',
                        variant: 'unstyled',
                    },
                },
                Body: {
                    Row: {
                        fontSize: 0.8,
                        borderWidth: '1px',
                        borderColor: '#e1e4e8',
                        bgColor: '#fff',
                    },
                    Cell: {
                        fontSize: 1.2,
                    },
                },
            },
        },
    })
)
