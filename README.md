# ServiceNow as a backend
- Need a PDI from ServiceNow, to add Scripted REST Sercive Record for the api endpoint
- On that record you will need to add a Scripted REST Resource record on the related records tab
- Here you can name this new record anything I am calling mine Knowledge as I am making a call to that table. In the script on this record you will do a GLideRecord call on your servicenow instance and return what data you want to send to your frontend.
- It will have a checkbox to use authentication or not. I left mine unchecked
- Save this and then go to CORS Rules table where you will need to make a new record that uses the REST API that was created from the first record. You can then enter in which domain you would like to give access to so in my example it's hhtp:///localhost:5173
- You can see what the object that is being sent will look like on REST API Explorer and you will use your API Namespace to see the resonse. This explorer is similar to Postman to help with debugging. It will also have the endpoint name that you need to hit which would be your PDI/api/{NameSpace}/{Scripted_REST Service name}/{SRS Resouce name}
- It also can give you a code snippit to help for your application, but it is in vanilla JS so doesn't work for react app.
- NPM i