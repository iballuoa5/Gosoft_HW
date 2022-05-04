const express = require('express');

const app = express();
app.use(express.json());

let employees = []

app.get('/getEmployee', (req, res) => {
    res.status(200).json({
        data: employees
    })
})



app.post('/newEmployee', (req, res) => {
    if ( !req.body.f_name || !req.body.l_name || !req.body.id ||
         !req.body.pos   || !req.body.tel   || !req.body.email
    ) {
         return res.status(400).json({ message: "Error" })
    }

    for (let i = 0; i < employees.length; i++) {
        if ( employees[i].id == req.body.id || employees[i].tel == req.body.tel || employees[i].email == req.body.email
        ) {
             return res.status(400).json({ message: "Error: ข้อมูลซ้ำ" })
        }
    }



    const newData = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        id: req.body.id,
        pos: req.body.pos,
        tel: req.body.tel,
        email: req.body.email
    };

    employees.push(newData)

    res.status(200).json({ message: "Success" })
})



app.put('/editEmployee', (req, res) => {
    if ( !req.body.id ||
        ( !req.body.pos && !req.body.tel && !req.body.email
        )
    ) { return res.status(400).json({ message: "Error" })
    }

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == req.body.id) {

            if (req.body.pos) employees[i].pos = req.body.pos
            if (req.body.tel) employees[i].tel = req.body.tel
            if (req.body.email) employees[i].email = req.body.email

            return res.status(200).json({ message: "Success" })
        }
    }
     return res.status(400).json({ message: "Error: หาคนที่จะแก้ไม่เจอ" })
})



app.delete('/deleteEmployee', (req, res) => {
    if (!req.body.id) {
        return res.status(400).json({ message: "Error" })
    }
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == req.body.id) {
            employees.splice(i, 1);
            return res.status(200).json({ message: "Success" })
        }
    }
    return res.status(400).json({ message: "Error: หาคนที่จะลบไม่เจอ" })
})



app.listen(3000, () => {
    console.log('Listening on port: 3000');
});