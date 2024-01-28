import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = Express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(Express.json({ limit: "16kb" }));
app.use(Express.static("public"));
app.use(Express.urlencoded({ limit: "16kb" }));

app.use(cookieParser());

export { app };
