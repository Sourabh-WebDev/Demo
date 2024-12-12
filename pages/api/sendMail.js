import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const { fullName, email, phone, message } = req.body;

  if (!fullName || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.office365.com
      port: process.env.SMTP_PORT, // 587
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER, // Your email (info@apexpath.com)
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
      tls: {
        ciphers: "SSLv3", // Ensure compatibility with TLS
        rejectUnauthorized: false, // Allow self-signed certificates (if applicable)
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`, // Sender's email and name
      to: "munna@apexpath.com, enquery21@gmail.com", // Replace with your recipient's email
      subject: 'New Contact Us Message',
      html: `<p><strong>Full Name:</strong> ${fullName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
