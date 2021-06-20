import jwt from "jsonwebtoken";

const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgHgnvr7O2tiApjJfid1orFnIGm6980fZp+Lpbjo+NC/0whMFga2B
iw5b1G2Q/B2u0tpO1Fs/E8z7Lv1nYfr5jx2S8x6BdA4TS2kB9Kf0wn0+7wSlyikH
oKhbtzwXHZl17GsyEi6wHnsqNBSauyIWhpha8i+Y+3GyaOY536H47qyXAgMBAAEC
gYAOphnVPXbk6lpYzdkLC1Xn5EOEuNfOLLURLxBnPWozZo26r/Mtahu/9mYhrYlv
PP8r6mxta3VIil8iOdZyOLa/4d1LPd+UehgEXIJEiYXLtn7RS5eUnoPuQxssfs1k
OWjdN8p6SzppleegFTvGRX4KM3cDLfSphOk8JuBCrpSSYQJBAOdqizTSrdKMTuVe
c7Jk1JOJkyFuFs+N5zeryyeFGH7IpRdWy0rkWMxIUAi8Ap1vYVBPHv4tDOo3sy5X
VLc/knkCQQCE62pg+0TmsrhO/2Pgog6MLBkzlzXYMRp/01HbmznwYF+ejfPnzLkz
hnUlxRUNK3lhXM/7H6oAjvqF2R72u/OPAkEAterkmdbQfEZ+MwNoEiH/lie9OLdx
SSI1VGdBYcTYN7qFRW6eizYstBJYkDU0HQ0Uw+we4hMKJwk4W0KdvxxDiQJAeqlB
V1QqBneBbK10PzVuFV8QtrJhJyxRVwrtbKq38iMNuqUnI4+ijXEUpJFWVvv6nKXo
7McQvEk12dU/JNTX8wJAOlAtSNjp9tVwpMpC0w2St1eKc1L2SknjeohA5ldoBz8s
GeZsPhTU3eHSD1neAZXLKN5K68z3zFBr20ubY9nyLw==
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHgnvr7O2tiApjJfid1orFnIGm69
80fZp+Lpbjo+NC/0whMFga2Biw5b1G2Q/B2u0tpO1Fs/E8z7Lv1nYfr5jx2S8x6B
dA4TS2kB9Kf0wn0+7wSlyikHoKhbtzwXHZl17GsyEi6wHnsqNBSauyIWhpha8i+Y
+3GyaOY536H47qyXAgMBAAE=
-----END PUBLIC KEY-----`;

// sign jwt
export function signJWT(payload: object, expiresIn: string | number) {
  return jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn });
}

// verify jwt
export function verifyJWT(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return { payload: decoded, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
}
