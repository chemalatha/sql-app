const express = require('express');
const axios = require('axios');
const router = new express.Router();
var request = require('request');
const TOKEN='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSIsImtpZCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSJ9.eyJhdWQiOiJodHRwczovL3BlZGV2MDQ3MGQ2ZmUxMmM4MzFhYTJmZGV2YW9zLmNsb3VkYXguZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGZjN2RmNjEtMTdmNS00MmI5LTliZjEtZTljMTZlZjczYjU4LyIsImlhdCI6MTU5MzE4ODE4MiwibmJmIjoxNTkzMTg4MTgyLCJleHAiOjE1OTMxOTIwODIsImFpbyI6IkUyQmdZT0FzWlg3MVJ6eCt5YVpkaVphUisyNU5CZ0E9IiwiYXBwaWQiOiJmNjFlNjdmOC1jNjcxLTQwNzgtYTYxYi05OTc5NDJmYWQ1NTIiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kZmM3ZGY2MS0xN2Y1LTQyYjktOWJmMS1lOWMxNmVmNzNiNTgvIiwib2lkIjoiMzQzZDIxYzYtYTYzNC00YjY4LTliZTItYjhmYmI4YmUwNzQzIiwic3ViIjoiMzQzZDIxYzYtYTYzNC00YjY4LTliZTItYjhmYmI4YmUwNzQzIiwidGlkIjoiZGZjN2RmNjEtMTdmNS00MmI5LTliZjEtZTljMTZlZjczYjU4IiwidXRpIjoiNEFPbmV1SmhQRXljbnVzbjhOQWhBUSIsInZlciI6IjEuMCJ9.S31Z4f68pReNb1UyAfiKRsuCW74kC4Y8Iaw8wf7_AT6OdXMem-osbY0QWJhFcAv58OsQW1DeoE-n3x6AToo1949TgaHq7PdSPFxqGwArSswvkyIAPH65nVT2S4JvyUx_8aowmgCKPIWm18A_yYBSArroTSTayycjCsC7LMoO-mvoWL8L8NQyWeDMW4CNs67KhM-Fh5pWB-Yis3_Ek8s1wZvgqrbOAnPjypovkavohzzgC9VxOShn6gmVcg6MCY3XdQ9Xe3Qjt9JaH7apWVlLf9dbIG32aTshyezDU_-ZtkrNLavXEzu3_WaOK8LLZPo4v4vB1e_tSnRvwic-LR1z6g'
router.get('/customers',(req,res)=>{
    try{
        var options = {
            'method': 'POST',
            'url': 'https://pedev0470d6fe12c831aa2fdevaos.cloudax.dynamics.com/api/services/PMECustomerCreationServiceGroup/PMECustomerCreationDemoService/getCustomersList',
            'headers': {
              'Authorization': `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"_customerCreationcontact":{"customerGroup":"CG-B2B","CustomerName":"GopiM"}})
          
          };
          request(options, function (error, response) { 
            if (error) throw new Error(error);
            res.status(200).send(JSON.parse(response.body));
          });
        
    }catch(e){
        console.log(e);
        res.status(400).send('Thats bad');
    }
});

router.post('/customers',(req,res)=>{
    console.log(req.body);
    try{
        var options = {
            'method': 'POST',
            'url': 'https://pedev0470d6fe12c831aa2fdevaos.cloudax.dynamics.com/api/services/PMECustomerCreationServiceGroup/PMECustomerCreationDemoService/findOrCreateCustomer',
            'headers': {
                'Authorization': `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
          
          };
          request(options, function (error, response) { 
            if (error) throw new Error(error);
            res.status(200).send(JSON.parse(response.body));
          });
    }catch(e){
        console.log(e);
        res.status(400).send('Thats bad');
    }

})
module.exports = router;