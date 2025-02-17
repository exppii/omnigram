//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'apikey_dto.g.dart';

/// ApikeyDto
///
/// Properties:
/// * [id] - ID 编号
/// * [name] 
/// * [apikey] 
/// * [ctime] 
@BuiltValue()
abstract class ApikeyDto implements Built<ApikeyDto, ApikeyDtoBuilder> {
  /// ID 编号
  @BuiltValueField(wireName: r'id')
  int get id;

  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'apikey')
  String get apikey;

  @BuiltValueField(wireName: r'ctime')
  int get ctime;

  ApikeyDto._();

  factory ApikeyDto([void updates(ApikeyDtoBuilder b)]) = _$ApikeyDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ApikeyDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ApikeyDto> get serializer => _$ApikeyDtoSerializer();
}

class _$ApikeyDtoSerializer implements PrimitiveSerializer<ApikeyDto> {
  @override
  final Iterable<Type> types = const [ApikeyDto, _$ApikeyDto];

  @override
  final String wireName = r'ApikeyDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ApikeyDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(int),
    );
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    yield r'apikey';
    yield serializers.serialize(
      object.apikey,
      specifiedType: const FullType(String),
    );
    yield r'ctime';
    yield serializers.serialize(
      object.ctime,
      specifiedType: const FullType(int),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ApikeyDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ApikeyDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.id = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.name = valueDes;
          break;
        case r'apikey':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.apikey = valueDes;
          break;
        case r'ctime':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.ctime = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ApikeyDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ApikeyDtoBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

