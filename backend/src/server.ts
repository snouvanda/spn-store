import express, { Request, Response }  from "express";
import dotenv from "dotenv";

dotenv.config({path: "../.env"});

const app = express();

const appName: string | undefined = process.env.APP_NAME;
const appPort: string | undefined = process.env.APP_PORT;
const appMode: string | undefined = process.env.APP_MODE;

const dataEnv = { appName, appPort, appMode }


app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    response: dataEnv
  });
}); 


app.listen(appPort, () => {
  console.log(`${appName} is running on port ${appPort} in ${appMode} mode.`)
});