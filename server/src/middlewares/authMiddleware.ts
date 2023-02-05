import { FastifyRequest, FastifyReply, DoneFuncWithErrOrRes } from "fastify";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function AuthMiddleware(
  req: FastifyRequest,
  res: FastifyReply,
  next: DoneFuncWithErrOrRes
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.send({
      error: "Você não está logado no game",
    });
  }

  const [, token] = authorization.split(" ");

  const data = jwt.verify(token, "Esta é a senha super secreta", {
    algorithms: ["HS256"],
  }) as JwtPayload;

  req["usuario"] = data.id;

  next();
}
