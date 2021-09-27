import { extendTheme } from "@chakra-ui/react"

/*
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
*/

const colors = {
  main: {
    1: '#E2E8F0',
    text: '#1a202c',
    link: 'red',
  }
}

/*
const defaultStyle = {
 config,
  colors,
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },

}
*/
const theme = extendTheme({colors})

export default theme
