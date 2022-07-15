import jwt from 'jsonwebtoken';

export const verificationToken = (req, res, next) => {
  const authorization = req.get('authorization');
  if (!authorization) return res.status(401).send('token not provider');
  if (!authorization.toLowerCase().startsWith('bearer'))
    return res.status(401).send('token invalid');

  const token = authorization.substring(7);

  try {
    const decoded = jwt.verify(token, process.env.SECURITY_PAS);
    req.userId = decoded.user_id;
  } catch (error) {
    return res.status(403).send('token invalid');
  }

  next();
};
