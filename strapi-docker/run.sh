#!/bin/bash
unzip db.zip
docker-compose up -d
docker-compose logs -f
