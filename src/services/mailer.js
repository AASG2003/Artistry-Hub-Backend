import nodemailer  from "nodemailer"
import config from "../config/config.js"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user:config.smtp_user,
        pass:config.smtp_pass,
    }
})

transporter.verify().then(() =>{
    console.log("SMTP Ready for send emails")
})


export const sendEmails = async(origin, source, header, text) =>{
    try{
        const info = await transporter.sendMail({
            from: `Maizena Hot <${origin}>`,
            to: source,
            subject:header,
            html:text
        })
        return {"status": true, "message": "Send email", info}
    }catch(error){
        return {"status": false,"message": "error", error}
    }
}