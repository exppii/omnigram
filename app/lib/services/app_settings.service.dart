

import 'package:omnigram/entities/isar_store.entity.dart';

enum AppSettingsEnum<T> {
  themeMode<String>(
    StoreKey.themeMode,
    "themeMode",
    "system",
  ), // "light","dark","system"
  logLevel<int>(StoreKey.logLevel, null, 5), // Level.INFO = 5
  uploadErrorNotificationGracePeriod<int>(
    StoreKey.uploadErrorNotificationGracePeriod,
    "uploadErrorNotificationGracePeriod",
    2,
  ),
  storageIndicator<bool>(StoreKey.storageIndicator, "storageIndicator", true),
  thumbnailCacheSize<int>(
    StoreKey.thumbnailCacheSize,
    "thumbnailCacheSize",
    10000,
  ),
  imageCacheSize<int>(StoreKey.imageCacheSize, "imageCacheSize", 350),
  albumThumbnailCacheSize<int>(
    StoreKey.albumThumbnailCacheSize,
    "albumThumbnailCacheSize",
    200,
  ),
  selectedAlbumSortOrder<int>(
    StoreKey.selectedAlbumSortOrder,
    "selectedAlbumSortOrder",
    0,
  ),
  advancedTroubleshooting<bool>(StoreKey.advancedTroubleshooting, null, false),
  preferRemoteImage<bool>(StoreKey.preferRemoteImage, null, false),
  loopVideo<bool>(StoreKey.loopVideo, "loopVideo", true),
  mapThemeMode<int>(StoreKey.mapThemeMode, null, 0),
  mapShowFavoriteOnly<bool>(StoreKey.mapShowFavoriteOnly, null, false),
  mapIncludeArchived<bool>(StoreKey.mapIncludeArchived, null, false),
  mapwithPartners<bool>(StoreKey.mapwithPartners, null, false),
  mapRelativeDate<int>(StoreKey.mapRelativeDate, null, 0),
  allowSelfSignedSSLCert<bool>(StoreKey.selfSignedCert, null, false),
  ignoreIcloudAssets<bool>(StoreKey.ignoreIcloudAssets, null, false),
  selectedAlbumSortReverse<bool>(
    StoreKey.selectedAlbumSortReverse,
    null,
    false,
  ),
  enableHapticFeedback<bool>(StoreKey.enableHapticFeedback, null, true),
  ;

  const AppSettingsEnum(this.storeKey, this.hiveKey, this.defaultValue);

  final StoreKey<T> storeKey;
  final String? hiveKey;
  final T defaultValue;
}

class AppSettingsService {
  T getSetting<T>(AppSettingsEnum<T> setting) {
    return IsarStore.get(setting.storeKey, setting.defaultValue);
  }

  void setSetting<T>(AppSettingsEnum<T> setting, T value) {
    IsarStore.put(setting.storeKey, value);
  }
}
