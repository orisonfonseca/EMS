const express=require('express');
const app=express();
var cors=require('cors');
app.use(cors());
let mongoose=require('mongoose');

let mongoDBUri=require('./config/keys').mongoDBUri;
    mongoose.connect(mongoDBUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connected!");
}).catch((err)=>{
    console.log(err);
})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port=5000;
app.listen(port,()=>{
    console.log(port);  
})



const auth=require('./routers/auth');
const employee=require('./routers/employee');
const upraisal=require('./routers/upraisal');
const timesheet=require('./routers/timesheet');
const salary=require('./routers/salary');
const role=require('./routers/role');
const project=require('./routers/project');
const leave=require('./routers/leave');
const department=require('./routers/department');

app.use('/',auth,employee,upraisal,timesheet,salary,role,project,leave,department);
//app.use('/',auth,category,product);
app.use(express.static(__dirname+"/public"));
