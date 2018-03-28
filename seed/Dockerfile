FROM mongo

COPY projects.json /projects.json
CMD mongoimport --host db --port 27017 --db portfolio --collection projects --type json --file /projects.json --jsonArray
