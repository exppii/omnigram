import 'dart:async';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_cache_manager/flutter_cache_manager.dart';
import 'package:omnigram/entities/isar_store.entity.dart';
import 'package:omnigram/providers/api.provider.dart';

/// Loads the codec from the URI and sends the events to the [chunkEvents] stream
///
/// Credit to [flutter_cached_network_image](https://github.com/Baseflow/flutter_cached_network_image/blob/develop/cached_network_image/lib/src/image_provider/_image_loader.dart)
/// for this wonderful implementation of their image loader
class ImageLoader {
  static Future<ui.Codec> loadImageFromCache(
    String uri, {
    required CacheManager cache,
    required ImageDecoderCallback decode,
    StreamController<ImageChunkEvent>? chunkEvents,
  }) async {
    final headers = ApiService.getDeviceHeaders();
    final accessToken = IsarStore.tryGet(StoreKey.accessToken);
    if (accessToken != null) {
      headers['Authorization'] = 'Bearer $accessToken';
    }
    final stream = cache.getFileStream(
      uri,
      withProgress: chunkEvents != null,
      headers: headers,
    );

    await for (final result in stream) {
      if (result is DownloadProgress) {
        // We are downloading the file, so update the [chunkEvents]
        chunkEvents?.add(
          ImageChunkEvent(
            cumulativeBytesLoaded: result.downloaded,
            expectedTotalBytes: result.totalSize,
          ),
        );
      } else if (result is FileInfo) {
        // We have the file
        final buffer = await ui.ImmutableBuffer.fromFilePath(result.file.path);
        final decoded = await decode(buffer);
        return decoded;
      }
    }

    // If we get here, the image failed to load from the cache stream
    throw ImageLoadingException('Could not load image from stream');
  }
}

/// An exception for the [ImageLoader] and the Immich image providers
class ImageLoadingException implements Exception {
  final String message;
  ImageLoadingException(this.message);
}
