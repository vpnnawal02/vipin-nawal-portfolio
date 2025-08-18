from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from email.message import EmailMessage
import aiosmtplib

# --- Configuration ---
app = FastAPI()

# Mount static assets (css, js, images)
app.mount("/static/assets", StaticFiles(directory="static/assets"), name="static")

# Set templates directory
templates = Jinja2Templates(directory="templates")

# Email (SMTP) configuration - replace these with your credentials!
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USERNAME = "vn.nawal02@gmail.com"          # Your Gmail address
SMTP_PASSWORD = "ezxgtndjewflinya"             # Use app password if you have 2FA
RECEIVER_EMAIL = "vn.nawal02@gmail.com"         # Where to receive form submissions

# --- Routes ---
@app.get("/", response_class=HTMLResponse)
async def homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/contact")
async def contact_form(
    name: str = Form(...),
    email: str = Form(...),
    subject: str = Form(...),
    message: str = Form(...)
):
    # Compose email
    msg = EmailMessage()
    msg["From"] = SMTP_USERNAME
    msg["To"] = RECEIVER_EMAIL
    msg["Subject"] = f"Message from portfolio website: {subject}"
    msg.set_content(
        f"Name: {name}\nEmail: {email}\nSubject: {subject}\n\nMessage:\n{message}"
    )

    try:
        await aiosmtplib.send(
            msg,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            start_tls=True,
            username=SMTP_USERNAME,
            password=SMTP_PASSWORD,
        )
        return JSONResponse("Thank you, your message has been sent!")
    except Exception as e:
        return JSONResponse(none)

# --- Run locally ---
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
