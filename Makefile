V := @

default: generate

.PHONY: generate
generate:
	protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
     --ts_proto_out=src/pkg \
     --ts_proto_opt=outputServices=grpc-js \
     --ts_proto_opt=esModuleInterop=true \
     -I=api/grpc api/**/*.proto
