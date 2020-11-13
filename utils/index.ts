export const toThousands = (value: string | number) => {
  return value.toString().replace(/\B(?=(\d{3})+$)/g, ',')
}
