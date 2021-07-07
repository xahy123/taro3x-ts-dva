export interface CodeType {
  [num: number]: string
}

export interface OptionType {
  url: string,
  data?: object | string,
  method?: any,
  header: object,
  success: any,
  fail: any,
}

