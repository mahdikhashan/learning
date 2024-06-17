import "./env";
import { logger } from "./logger";
import { createServer } from "http";
import express, { type NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import path from "path";
import jwt from "jsonwebtoken";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../api-docs/swagger.json";
import { PrismaClient } from "@prisma/client";

const port = process.env.PORT_API ?? 5200;

const prisma = new PrismaClient();
const app = express();
const httpServer = createServer(app);
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
  cors({
    origin: ["http://localhost:8000"],
  })
);

app.post("/token", body("client_id").isString(), (request, response) => {
  const errors = validationResult(request);
  if (
    !errors.isEmpty() ||
    request.body.client_id !== process.env.CLIENT_ID_SECRET
  ) {
    return response.status(400).json({ errors: errors.array() });
  }

  const clientId = request.body.client_id;
  const client = { clientId };
  const accessToken = generateAccessToken(client);

  logger.info(`Generated new AccessToken for client ${clientId}`);

  response.json({ accessToken });
});

const generateAccessToken = (client: string | Object | Buffer) => {
  return jwt.sign(client, process.env.ACCESS_TOKEN_SECRET as string);
};

const authenticateJSW = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (token == null) {
    logger.warn(`Empty token for ${req.ip}`);
    return res.sendStatus(401);
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
    next();
  } catch (error) {
    logger.warn(`Denied access for ${req.ip}`);
    res.sendStatus(403);
  }
};

app.post(
  "/users",
  body("username").isString(),
  body("email").isString(),
  authenticateJSW,
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      logger.warn(`Invalid user creation request: ${errors.array().join(";")}`);
      return response.status(400).json({ errors: errors.array() });
    }

    try {
      await prisma.user.create({
        data: {
          name: request.body.username,
          email: request.body.email,
        },
      });
    } catch (error) {
      logger.warn("Failed to create a user");
    }

    response.send(request.body);
  }
);

app.get("/users", authenticateJSW, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    logger.warn(`Invalid user request: ${errors.array().join(";")}`);
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const users = await prisma.user.findMany();
    logger.info(`User list request successful ${users}`);
    response.send({ users });
  } catch (error) {
    logger.warn("Failed to get users");
  }
});

app.get("/users/:id", authenticateJSW, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    logger.warn(`Invalid user request: ${errors.array().join(";")}`);
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const users = await prisma.user.findFirst({
      where: {
        id: parseInt(request.params.id),
      },
    });
    logger.info(`User get request successful ${users}`);
    response.send({ users });
  } catch (error) {
    logger.warn("Failed to get users");
  }
});

app.put("/users/:id", authenticateJSW, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    logger.warn(`Invalid user request: ${errors.array().join(";")}`);
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await prisma.user.update({
      data: {
        name: request.body.username,
        email: request.body.email,
        role: request.body.role,
      },
      where: {
        id: parseInt(request.params.id),
      },
    });
    logger.info(`User update request successful: ${user}`);
    response.send({ update: 'OK' });
  } catch (error) {
    logger.warn("Failed to get users");
  }
});

app.delete("/users/:id", authenticateJSW, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    logger.warn(`Invalid user request: ${errors.array().join(";")}`);
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await prisma.user.delete({
      where: {
        id: parseInt(request.params.id)
      }
    })
    logger.info(`User delete request successful: ${user}`);
    response.send({ update: 'OK' });
  } catch (error) {
    logger.warn("Failed to delete user");
  }
});

app.use("/static", express.static(path.join(__dirname, "../public")));

httpServer.listen(port);
logger.info(`Backend is ready on port ${port}`);
