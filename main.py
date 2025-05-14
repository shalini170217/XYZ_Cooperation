import time
import pyotp
import qrcode

key="CompanyChatBotCompanyChatBot"

totp=pyotp.TOTP(key)
while True:
    print(totp.verify(input("Enter Your OTP:")))