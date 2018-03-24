/**
 * Formats a phone number.
 * Example: 123-456-7890 => (123) 456-7890
 *
 * @param {String} phone
 * @return {String} formatted phone
 */
export default function (phone) {
  if (!phone || phone.length === 0) {
    return phone
  }
  // return phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
  // Strip all characters from the input except digits
  let formattedPhone = phone.replace(/\D/g, '')

  // Trim the remaining input to ten characters, to preserve phone number format
  formattedPhone = formattedPhone.substring(0, 10)

  // Based upon the length of the string, we add formatting as necessary
  const size = formattedPhone.length
  if (size === 0) {
    return formattedPhone
  } else if (size < 4) {
    formattedPhone = '(' + formattedPhone
  } else if (size < 7) {
    formattedPhone = '(' + formattedPhone.substring(0, 3) + ') ' + formattedPhone.substring(3, 6)
  } else {
    formattedPhone = '(' + formattedPhone.substring(0, 3) + ') ' + formattedPhone.substring(3, 6) + ' - ' + formattedPhone.substring(6, 10)
  }
  return formattedPhone
}
