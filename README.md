# Neosperience

Per quanto riguarda la Fase 3 non sono riuscito ad utilizzare Postman, sembrava forse per problemi alla rete.
Di fatto ho utilizzato cURL tramite PowerShell.
Per utilizzare lo script, ho installato le dipendenze richieste, ovvero express e body-parser, eseguendo il comando npm install express npm install body-parser e nella cartella del progetto. (Oltre ad avere installato precedentemente Node.js)
Successivamente, ho avviato il server eseguendo il comando node Fase3.js .
Infine ho fatto la richiesta tramite PowerShell POST:
Invoke-WebRequest -Method POST -Uri http://localhost:3000/api/students -Headers @{"Content-Type"="application/json"} -Body '{"name": "Andrea", "age": 25}'

![image](https://user-images.githubusercontent.com/129222124/228384879-ec349da3-2ef7-46ab-ae8c-efdd5d0646b6.png)

Questo il risultato:
![image](https://user-images.githubusercontent.com/129222124/228386131-aadcc766-c4ab-40a1-b3d1-c046e1cc5e08.png)
