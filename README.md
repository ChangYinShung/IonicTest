# 基本安裝
1. [Nodejs](https://nodejs.org/en/) 
2. [Git](https://git-scm.com/)  
3. [JAVA SDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
3. 建議安裝[Android Studio](https://developer.android.com/studio/#downloads) 不用設定環境變數和指令
4. npm install -g ionic @angular/cli   (目前用Ionic4,專案結構與 angular cli 相同)  

# 確認事項
1.npm  
2.git  
3.java (環境變數)
4.android sdk 安裝建議從 android sdk 19  

# ionic
``` javascript
ionic start myAPP --type=angular 
cd myApp  
ionic serve -l  
ionic cordova platform add android
ionic cordova build android (debug版APK 無法上架到goole play)
```


# 發行至 google play 
1.建立 key (有效日期不能太短,商店有限制)
``` javascript
keytool -v -genkey -v -keystore further.keystore -alias further -keyalg RSA -validity 100000

```
2.將 further.keystore 放在 專案根目錄  
3 在專案根目錄建立 build.json 檔







