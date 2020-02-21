## How to run
```bash
npm install
npm run build
npm start
```

## Play
```
GET http://localhost:8080/blackjack/play?playerName=Annie
```
The `playerName` query parameter is optional. If omitted or `Bob` then `You` will be used.

## Validation
```bash
npm run lint
npm test
```

## To-dos
1. Add proper logging library.
2. Add API documentation (Swagger?).
