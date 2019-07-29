#!/bin/bash
docker-compose down
zip -r db.zip db
rm -rf db
