import os
import shutil

reels_dir = r"c:\UNSOCIALS\assets\reels"
os.makedirs(reels_dir, exist_ok=True)

src1 = r"c:\UNSOCIALS\assets\clients\Elysium Pattaya\SnapInsta.to_AQMnmQM0j-wBLK_OoRF0NBdD1LJT4-xvn54jW6kdn4h1G0Dpj5HMMjC1pEQqraNY2f9mnJr_L9kJL2mX5XzNDGSKMP2YU-pPjhZ-_Ao.mp4"
src2 = r"c:\UNSOCIALS\assets\clients\Alexa beach club\Alexa beach club digital marketing thailand.mp4"
src3 = r"c:\UNSOCIALS\assets\clients\ Nomads Hostel\SnapInsta.to_AQNePKW00w4Ocac0GF-b05fZ_0xkl2p_xjHtB1q-JYw38TY2OLaCbGFYt5JrXY7UzI4HSk8J_xKtUTdgEXbo8xfH.mp4"
src4 = r"c:\UNSOCIALS\assets\clients\Bamboo Beach club\SnapInsta.to_AQNTn-uvKZej7sVg-vId4JnjuzGq2VW4V6uKvWmA_DHF28zcj9JGThpC796aFErj8vW5KdIfWXQBnlPDnbuXtF8T.mp4"

if os.path.exists(src1): shutil.copy(src1, os.path.join(reels_dir, "r1.mp4"))
if os.path.exists(src2): shutil.copy(src2, os.path.join(reels_dir, "r2.mp4"))
if os.path.exists(src3): shutil.copy(src3, os.path.join(reels_dir, "r3.mp4"))
if os.path.exists(src4): shutil.copy(src4, os.path.join(reels_dir, "r4.mp4"))

print("Reels copied.")
