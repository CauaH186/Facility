export function passwordValidator(password) {
  if (!password) return "Digite uma senha."
  if (password.length < 5) return 'A senha precisa ter pelo menos 5 caracteres.'
  return ''
}
