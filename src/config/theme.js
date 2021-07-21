import { extendTheme } from "@chakra-ui/react"

const theme = {
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

export default extendTheme ({theme})
