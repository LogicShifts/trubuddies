import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, id, host }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(id.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(
        id,
        {
          emailVerifyToken: hashedToken,
          emailVerifyTokenExpiry: Date.now() + 3600000,
        }
        //   {
        //     new: true,
        //     runValidators: true,
        //   }
      );
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(
        id,
        {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        }
        //   {
        //     new: true,
        //     runValidators: true,
        //   }
      );
    }
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
        //should be in env files
      },
    });
    const mailOptions = {
      from: "no-reply@trubuddies.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "verify your email" : "reset your password",
      html: `<div><p>Click <a href=https://google.com>here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }</p><p>Or copy paste this url to your browser:</p><p>${host}/${
        emailType === "VERIFY" ? "verifyemail" : "resetpassword"
      }?token=${hashedToken}</p></div>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
