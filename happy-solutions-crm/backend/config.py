import os
from dotenv import load_dotenv
load_dotenv()

class Config:
    FLASK_ENV = os.getenv("FLASK_ENV", "production")
    DEBUG = os.getenv("FLASK_DEBUG", "0") == "1"
    PORT = int(os.getenv("PORT", "5000"))
    MONGO_URI = os.getenv("MONGO_URI")
    MONGO_DB = os.getenv("MONGO_DB")
    JWT_SECRET = os.getenv("JWT_SECRET")
    FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN")
    RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID", "")
    RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET", "")
