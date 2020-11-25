module.exports = {
  experimental: {
    darkModeVariant: true,
  },
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class',
  dark: 'class',
  purge: false,
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.brand.dark"),
              transition: 'color 0.2s',
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.brand.light")
              }
            },
          }
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme("colors.gray.400")
            },
            h2: {
              color: theme("colors.gray.400")
            },
            h3: {
              color: theme("colors.gray.400")
            },
            h4: {
              color: theme("colors.gray.400")
            },
            h5: {
              color: theme("colors.gray.400")
            },
            h6: {
              color: theme("colors.gray.400")
            },
            blockquote: {
              color: theme('colors.gray.300')
            }
          },
        },
      }),
      colors: {
        brand: {
          light: 'rgb(104, 109, 224)',
          dark: 'rgb(72, 52, 212)'
        }
      },
      fontFamily: {
        headings: ["Montserrat", "Serif"]
      },
      gridTemplateColumns: {
        content: 'minmax(0.6rem, 1fr) minmax(0.6rem, 1fr) minmax(auto, 60ch) minmax(0.6rem, 1fr) minmax(0.6rem, 1fr)',
      },
      width: {
        dbl: '200vw'
      },
      height: {
        dbl: '200vh'
      },
      rotate: {
        gl: '-25deg'
      }
    }
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
