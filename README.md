# diligent_coding_challenge
This is the coding challenge by diligent

To run this code locally clone the repo in your local environment and run the command, after you have CD to the cloned directory

```sh
npm install
```


The webapp is using express and fs as the only dependency on the server side and the client is pure vanilla JS. 
There is an assumption made that the data fetched from the mock JSON data is fetched synchronously. In real world we woud
do an Async load (possibly from a Database/local file system). This would mean that the backend-service would need to handle 
PROMISE elegantly. One last assumption is made that with an id only one document will be received and so front end always 
load the first document in the array received.
