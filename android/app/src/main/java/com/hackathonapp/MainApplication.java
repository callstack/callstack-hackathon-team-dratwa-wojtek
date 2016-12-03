package com.hackathonapp;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.mmazzarolo.beaconsandroid.BeaconsAndroidPackage;
=======
import com.lwansbrough.RCTCamera.RCTCameraPackage;
>>>>>>> 6973c2ce2e5d9e208a4ac96eb4b59c34cb9c7a85
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new BeaconsAndroidPackage()
=======
            new RCTCameraPackage()
>>>>>>> 6973c2ce2e5d9e208a4ac96eb4b59c34cb9c7a85
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
