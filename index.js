const jsonServer=require('json-server');
const middleware = jsonServer.defaults();
const router = jsonServer.router('data.json')
var passwordHash = require('password-hash');

const app= jsonServer.create();

app.use(middleware)
app.use(router)

const PORT=3000 || Process.env.PORT

app.listen(PORT,()=>{
    console.log('running at port :'+PORT)
})

app.get('/video', (req, res) => {
    res.json({ message: 'This is a custom route!' });
});

app.get('/history', (req, res) => {
    res.json(console.log('history updated'));
});

app.get('/user', (req, res) => {
    console.log(req.body)
});

