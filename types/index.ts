export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp]

export type ClassObject = {
  [key: string]: boolean
}

export type StyleType = 'primary' | 'secondary' | 'tertiary' | 'quaternary'
