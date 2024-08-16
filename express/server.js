const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors()); // CORS 문제를 방지하기 위해 사용
app.use(express.json()); // JSON 데이터를 파싱하기 위해 사용

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
