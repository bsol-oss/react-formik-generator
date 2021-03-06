import { extendTheme } from '@chakra-ui/react'

export const theme1 = extendTheme(
    Object.assign(
        {},
        {
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
                },
            },
        }
    )
)
