# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import pb.m4t_pb2 as m4t__pb2


class TextToAudioStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ConvertTextToAudio = channel.unary_unary(
                '/m4t.TextToAudio/ConvertTextToAudio',
                request_serializer=m4t__pb2.TextRequest.SerializeToString,
                response_deserializer=m4t__pb2.AudioResponse.FromString,
                )
        self.TTSStream = channel.unary_stream(
                '/m4t.TextToAudio/TTSStream',
                request_serializer=m4t__pb2.TextRequest.SerializeToString,
                response_deserializer=m4t__pb2.AudioResponse.FromString,
                )
        self.AllSpeaker = channel.unary_unary(
                '/m4t.TextToAudio/AllSpeaker',
                request_serializer=m4t__pb2.EmptyRequsest.SerializeToString,
                response_deserializer=m4t__pb2.SpeakerList.FromString,
                )
        self.AddSpeaker = channel.unary_unary(
                '/m4t.TextToAudio/AddSpeaker',
                request_serializer=m4t__pb2.UploadRequsest.SerializeToString,
                response_deserializer=m4t__pb2.Speaker.FromString,
                )
        self.DelSpeaker = channel.unary_unary(
                '/m4t.TextToAudio/DelSpeaker',
                request_serializer=m4t__pb2.DelRequsest.SerializeToString,
                response_deserializer=m4t__pb2.Speaker.FromString,
                )


class TextToAudioServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ConvertTextToAudio(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def TTSStream(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AllSpeaker(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AddSpeaker(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DelSpeaker(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TextToAudioServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ConvertTextToAudio': grpc.unary_unary_rpc_method_handler(
                    servicer.ConvertTextToAudio,
                    request_deserializer=m4t__pb2.TextRequest.FromString,
                    response_serializer=m4t__pb2.AudioResponse.SerializeToString,
            ),
            'TTSStream': grpc.unary_stream_rpc_method_handler(
                    servicer.TTSStream,
                    request_deserializer=m4t__pb2.TextRequest.FromString,
                    response_serializer=m4t__pb2.AudioResponse.SerializeToString,
            ),
            'AllSpeaker': grpc.unary_unary_rpc_method_handler(
                    servicer.AllSpeaker,
                    request_deserializer=m4t__pb2.EmptyRequsest.FromString,
                    response_serializer=m4t__pb2.SpeakerList.SerializeToString,
            ),
            'AddSpeaker': grpc.unary_unary_rpc_method_handler(
                    servicer.AddSpeaker,
                    request_deserializer=m4t__pb2.UploadRequsest.FromString,
                    response_serializer=m4t__pb2.Speaker.SerializeToString,
            ),
            'DelSpeaker': grpc.unary_unary_rpc_method_handler(
                    servicer.DelSpeaker,
                    request_deserializer=m4t__pb2.DelRequsest.FromString,
                    response_serializer=m4t__pb2.Speaker.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'm4t.TextToAudio', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TextToAudio(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ConvertTextToAudio(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/m4t.TextToAudio/ConvertTextToAudio',
            m4t__pb2.TextRequest.SerializeToString,
            m4t__pb2.AudioResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def TTSStream(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/m4t.TextToAudio/TTSStream',
            m4t__pb2.TextRequest.SerializeToString,
            m4t__pb2.AudioResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AllSpeaker(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/m4t.TextToAudio/AllSpeaker',
            m4t__pb2.EmptyRequsest.SerializeToString,
            m4t__pb2.SpeakerList.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AddSpeaker(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/m4t.TextToAudio/AddSpeaker',
            m4t__pb2.UploadRequsest.SerializeToString,
            m4t__pb2.Speaker.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DelSpeaker(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/m4t.TextToAudio/DelSpeaker',
            m4t__pb2.DelRequsest.SerializeToString,
            m4t__pb2.Speaker.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
