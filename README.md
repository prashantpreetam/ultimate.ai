# Ultimate AI

## Prerequisite
- node > v15
- mongoDB > 3.4
- npm > 7.7

## Intructions
- cd into base directory
- npm install
- npm run migrate
- npm run test
- npm run dev
- Use Postman to import following curl or use CLI
```
curl -X POST \
  http://localhost:5000/v1/message-response/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ad5322b7-59f1-55d3-a309-27036ed7c325' \
  -d '{
	"botId": "5f74865056d7bb000fcd39ff",
	"message": "Hi"
}'
```
