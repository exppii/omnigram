// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'app_config.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

AppConfig _$AppConfigFromJson(Map<String, dynamic> json) {
  return _AppConfig.fromJson(json);
}

/// @nodoc
mixin _$AppConfig {
  String get baseUrl => throw _privateConstructorUsedError;
  String get token => throw _privateConstructorUsedError;
  String get appName => throw _privateConstructorUsedError;
  bool get chatEnabled => throw _privateConstructorUsedError;
  bool get m4tEnabled => throw _privateConstructorUsedError;
  bool get shouldCollectCrashLog => throw _privateConstructorUsedError;
  String? get openAIUrl => throw _privateConstructorUsedError;
  String? get openAIApiKey => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $AppConfigCopyWith<AppConfig> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AppConfigCopyWith<$Res> {
  factory $AppConfigCopyWith(AppConfig value, $Res Function(AppConfig) then) =
      _$AppConfigCopyWithImpl<$Res, AppConfig>;
  @useResult
  $Res call(
      {String baseUrl,
      String token,
      String appName,
      bool chatEnabled,
      bool m4tEnabled,
      bool shouldCollectCrashLog,
      String? openAIUrl,
      String? openAIApiKey});
}

/// @nodoc
class _$AppConfigCopyWithImpl<$Res, $Val extends AppConfig>
    implements $AppConfigCopyWith<$Res> {
  _$AppConfigCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? baseUrl = null,
    Object? token = null,
    Object? appName = null,
    Object? chatEnabled = null,
    Object? m4tEnabled = null,
    Object? shouldCollectCrashLog = null,
    Object? openAIUrl = freezed,
    Object? openAIApiKey = freezed,
  }) {
    return _then(_value.copyWith(
      baseUrl: null == baseUrl
          ? _value.baseUrl
          : baseUrl // ignore: cast_nullable_to_non_nullable
              as String,
      token: null == token
          ? _value.token
          : token // ignore: cast_nullable_to_non_nullable
              as String,
      appName: null == appName
          ? _value.appName
          : appName // ignore: cast_nullable_to_non_nullable
              as String,
      chatEnabled: null == chatEnabled
          ? _value.chatEnabled
          : chatEnabled // ignore: cast_nullable_to_non_nullable
              as bool,
      m4tEnabled: null == m4tEnabled
          ? _value.m4tEnabled
          : m4tEnabled // ignore: cast_nullable_to_non_nullable
              as bool,
      shouldCollectCrashLog: null == shouldCollectCrashLog
          ? _value.shouldCollectCrashLog
          : shouldCollectCrashLog // ignore: cast_nullable_to_non_nullable
              as bool,
      openAIUrl: freezed == openAIUrl
          ? _value.openAIUrl
          : openAIUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      openAIApiKey: freezed == openAIApiKey
          ? _value.openAIApiKey
          : openAIApiKey // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_AppConfigCopyWith<$Res> implements $AppConfigCopyWith<$Res> {
  factory _$$_AppConfigCopyWith(
          _$_AppConfig value, $Res Function(_$_AppConfig) then) =
      __$$_AppConfigCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String baseUrl,
      String token,
      String appName,
      bool chatEnabled,
      bool m4tEnabled,
      bool shouldCollectCrashLog,
      String? openAIUrl,
      String? openAIApiKey});
}

/// @nodoc
class __$$_AppConfigCopyWithImpl<$Res>
    extends _$AppConfigCopyWithImpl<$Res, _$_AppConfig>
    implements _$$_AppConfigCopyWith<$Res> {
  __$$_AppConfigCopyWithImpl(
      _$_AppConfig _value, $Res Function(_$_AppConfig) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? baseUrl = null,
    Object? token = null,
    Object? appName = null,
    Object? chatEnabled = null,
    Object? m4tEnabled = null,
    Object? shouldCollectCrashLog = null,
    Object? openAIUrl = freezed,
    Object? openAIApiKey = freezed,
  }) {
    return _then(_$_AppConfig(
      baseUrl: null == baseUrl
          ? _value.baseUrl
          : baseUrl // ignore: cast_nullable_to_non_nullable
              as String,
      token: null == token
          ? _value.token
          : token // ignore: cast_nullable_to_non_nullable
              as String,
      appName: null == appName
          ? _value.appName
          : appName // ignore: cast_nullable_to_non_nullable
              as String,
      chatEnabled: null == chatEnabled
          ? _value.chatEnabled
          : chatEnabled // ignore: cast_nullable_to_non_nullable
              as bool,
      m4tEnabled: null == m4tEnabled
          ? _value.m4tEnabled
          : m4tEnabled // ignore: cast_nullable_to_non_nullable
              as bool,
      shouldCollectCrashLog: null == shouldCollectCrashLog
          ? _value.shouldCollectCrashLog
          : shouldCollectCrashLog // ignore: cast_nullable_to_non_nullable
              as bool,
      openAIUrl: freezed == openAIUrl
          ? _value.openAIUrl
          : openAIUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      openAIApiKey: freezed == openAIApiKey
          ? _value.openAIApiKey
          : openAIApiKey // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_AppConfig implements _AppConfig {
  const _$_AppConfig(
      {required this.baseUrl,
      required this.token,
      required this.appName,
      required this.chatEnabled,
      required this.m4tEnabled,
      required this.shouldCollectCrashLog,
      this.openAIUrl,
      this.openAIApiKey});

  factory _$_AppConfig.fromJson(Map<String, dynamic> json) =>
      _$$_AppConfigFromJson(json);

  @override
  final String baseUrl;
  @override
  final String token;
  @override
  final String appName;
  @override
  final bool chatEnabled;
  @override
  final bool m4tEnabled;
  @override
  final bool shouldCollectCrashLog;
  @override
  final String? openAIUrl;
  @override
  final String? openAIApiKey;

  @override
  String toString() {
    return 'AppConfig(baseUrl: $baseUrl, token: $token, appName: $appName, chatEnabled: $chatEnabled, m4tEnabled: $m4tEnabled, shouldCollectCrashLog: $shouldCollectCrashLog, openAIUrl: $openAIUrl, openAIApiKey: $openAIApiKey)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_AppConfig &&
            (identical(other.baseUrl, baseUrl) || other.baseUrl == baseUrl) &&
            (identical(other.token, token) || other.token == token) &&
            (identical(other.appName, appName) || other.appName == appName) &&
            (identical(other.chatEnabled, chatEnabled) ||
                other.chatEnabled == chatEnabled) &&
            (identical(other.m4tEnabled, m4tEnabled) ||
                other.m4tEnabled == m4tEnabled) &&
            (identical(other.shouldCollectCrashLog, shouldCollectCrashLog) ||
                other.shouldCollectCrashLog == shouldCollectCrashLog) &&
            (identical(other.openAIUrl, openAIUrl) ||
                other.openAIUrl == openAIUrl) &&
            (identical(other.openAIApiKey, openAIApiKey) ||
                other.openAIApiKey == openAIApiKey));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, baseUrl, token, appName,
      chatEnabled, m4tEnabled, shouldCollectCrashLog, openAIUrl, openAIApiKey);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_AppConfigCopyWith<_$_AppConfig> get copyWith =>
      __$$_AppConfigCopyWithImpl<_$_AppConfig>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_AppConfigToJson(
      this,
    );
  }
}

abstract class _AppConfig implements AppConfig {
  const factory _AppConfig(
      {required final String baseUrl,
      required final String token,
      required final String appName,
      required final bool chatEnabled,
      required final bool m4tEnabled,
      required final bool shouldCollectCrashLog,
      final String? openAIUrl,
      final String? openAIApiKey}) = _$_AppConfig;

  factory _AppConfig.fromJson(Map<String, dynamic> json) =
      _$_AppConfig.fromJson;

  @override
  String get baseUrl;
  @override
  String get token;
  @override
  String get appName;
  @override
  bool get chatEnabled;
  @override
  bool get m4tEnabled;
  @override
  bool get shouldCollectCrashLog;
  @override
  String? get openAIUrl;
  @override
  String? get openAIApiKey;
  @override
  @JsonKey(ignore: true)
  _$$_AppConfigCopyWith<_$_AppConfig> get copyWith =>
      throw _privateConstructorUsedError;
}
