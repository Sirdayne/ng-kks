docker-build:
	docker-compose -f docker-compose.yml up -d --build

docker-start:
	docker-compose -f docker-compose.yml start

docker-stop:
	docker-compose -f docker-compose.yml stop
