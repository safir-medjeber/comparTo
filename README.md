# compareTo

# ------------------------ Process to release -----------------------------------
ionic cordova run android --prod --release --device


# ------------------------ To generate certificat -------------------------------
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias


# ------------------------ To sign application ----------------------------------
/Users/safir/Library/Android/sdk/build-tools/27.0.3/zipalign  -v 4 android-armv7-release-unsigned.apk CompareTo.apk

/Users/safir/Library/Android/sdk/build-tools/27.0.3/apksigner verify CompareTo.apk 
#OR
/Users/safir/Library/Android/sdk/build-tools/27.0.3/apksigner  sign --ks my-release-key.jks CompareTo.apk 


#------------------------- Add this to the build.gradle to generate APK ----------
configurations.all {
  resolutionStrategy.force 'com.android.support:support-v4:24.0.0'
}
