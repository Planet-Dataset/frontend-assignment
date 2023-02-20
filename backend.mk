backend-build:
	docker compose build

backend-up:
	docker compose up

backend-down:
	docker compose down


$PHONY: backend-build backend-up backend-down
