import React from "react"

const EmailTemplate = ({ firstName, lastName, email, phone, message }) => {
  return (
    <div>
      <p>{firstName} {lastName} has submitted the contact form on your website. Their contact info is {email}, {phone}. their message is {message} </p>
    </div>
  )
}

export default EmailTemplate