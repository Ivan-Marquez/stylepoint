module.exports = () => {
  const getTemplate = () => ({
    subject: 'Style Point: Password Changed',
    html: `
        <p>
            You are receiving this email because you changed your password.
            <br>
            If you did not request this change, please contact us immediately.
        </p>
    `
  })

  return {
    getTemplate
  }
}
