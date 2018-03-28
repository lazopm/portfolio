FROM mongo

COPY projects.json /projects.json
CMD mongoimport --host db --db portfolio --collection projects --type json --file /projects.json --jsonArray
