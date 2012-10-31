package com.schoolinsync;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class SchoolInSync extends DroidGap {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.main);
        super.loadUrl("file:///android_asset/www/index.html");

    }
}
