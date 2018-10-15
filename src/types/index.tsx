interface ITheme {
  fonts: {
    [fontName: string]: {
      [fontStyle: string]: any
    }
  }
  colors: {
    [colorName: string]: string
  }
  size: {
    [sizeName: string]: number
  }
}

export { ITheme }
