

const game24 = require('24game-solver/dist/24game-solver')
const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    if (!req.query.num1 || !req.query.num2 || !req.query.num3 || !req.query.num4
    ) 
    return res.send("Error Data")

    const numberregex = /^[1-9]{1,1}$/

    if (
        !numberregex.exec(req.query.num1) || !numberregex.exec(req.query.num2) || !numberregex.exec(req.query.num3) || !numberregex.exec(req.query.num4)
    ) 
    return res.send("Error Input Value")

    const numbers = [
        parseInt(req.query.num1), parseInt(req.query.num2), parseInt(req.query.num3), parseInt(req.query.num4),
    ]

    const result = game24(numbers, 24)

    if (result.length > 0) 
    return res.send({ msg: "Success", result })
    else 
    return res.send({ msg: "Fail: No Solution" })
})


app.listen(3000, () => {
    console.log('Listening on port: 3000');
});



