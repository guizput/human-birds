exports.handler = async (event) => {
  // Récupère les headers d'authentification envoyés par le navigateur
  const authHeader = event.headers.authorization || "";

  // Décoder les identifiants envoyés en "Basic Auth"
  const credentials = Buffer.from(
    authHeader.replace("Basic ", ""),
    "base64",
  ).toString("utf-8");
  const [user, password] = credentials.split(":");

  // Identifiants corrects (stockés en variables d'environnement)
  const VALID_USER = process.env.ADMIN_USER;
  const VALID_PASSWORD = process.env.ADMIN_PASS;

  // Vérification des identifiants
  if (user === VALID_USER && password === VALID_PASSWORD) {
    return {
      statusCode: 200,
      body: "OK", // Accès autorisé
    };
  }

  // Si les identifiants sont incorrects, on demande l'authentification
  return {
    statusCode: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
    body: "Accès refusé",
  };
};
