export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Digite um Email."
  if (!re.test(email)) return 'Ooops! Precisamos de um email válido.'
  return ''
}
