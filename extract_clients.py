import zipfile
import os
import glob

zips = [
    r"C:\Users\korja\Downloads\Royal Ivy Regatta-20260409T131037Z-3-001.zip",
    r"C:\Users\korja\Downloads\UNIVERSAL USE-20260409T131045Z-3-001.zip",
    r"C:\Users\korja\Downloads\Bamboo Beach club-20260409T131026Z-3-001.zip",
    r"C:\Users\korja\Downloads\Nomads Hostel-20260409T131025Z-3-001.zip",
    r"C:\Users\korja\Downloads\Elysium Pattaya-20260409T131032Z-3-001.zip",
    r"C:\Users\korja\Downloads\Alexa beach club-20260409T131026Z-3-001.zip",
    r"C:\Users\korja\Downloads\GPS gems-20260409T131034Z-3-001.zip"
]

dest = r"c:\UNSOCIALS\assets\clients"
os.makedirs(dest, exist_ok=True)

for z in zips:
    try:
        with zipfile.ZipFile(z, 'r') as zip_ref:
            zip_ref.extractall(dest)
            print("Extracted", z)
    except Exception as e:
        print("Failed to extract", z, e)
