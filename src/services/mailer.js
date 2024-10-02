import nodemailer  from "nodemailer"
import config from "../config/config.js"

const transporter = nodemailer.createTransport({
    host: config.smtp_host,
    port: config.smtp_port,
    secure: true,
    auth: {
        user:config.smtp_from_address,
        pass:config.smtp_pass,
    }
})

transporter.verify().then(() =>{
    console.log("SMTP Ready for send emails")
})


export const sendEmails = async(origin, source, header, text) =>{
    try{
        const info = await transporter.sendMail({
            from: `Artistry Hub<${origin}>`,
            to: source,
            subject:header,
            html:text
        })
        return {"status": true, "message": "Send email", info}
    }catch(error){
        return {"status": false,"message": "error", error}
    }
}