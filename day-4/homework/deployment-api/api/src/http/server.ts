import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  return res.send({ message: "Hello, world!" });
});

app.get("/sum/:a/:b", (req: Request, res: Response) => {
    const numberA = +req.params.a
    const numberB = +req.params.b

    return res.send({ message: numberA + numberB });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
