import "dart:io";

import "package:flutter/material.dart";
import "package:flutter/services.dart";
import "package:flutter_native_splash/flutter_native_splash.dart";

import "app/app.dart";
import "flavors/build_config.dart";
import "flavors/env_config.dart";
import "flavors/environment.dart";

Future<void> main() async {
//加载数据前动画效果
  WidgetsBinding widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);

  if (Platform.isAndroid) {
    SystemUiOverlayStyle systemUiOverlayStyle = const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
    );
    SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
  }

  EnvConfig prodConfig = EnvConfig(
    appName: 'Omnigram',
    shouldCollectCrashLog: false,
  );

  await BuildConfig.initialize(
    envType: Environment.prod,
    envConfig: prodConfig,
  );

  runApp(const App());
}
