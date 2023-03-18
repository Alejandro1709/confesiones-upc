export default interface ISession {
  session: {
    expires: string;
    user: { email: string; image: string; name: string };
  };
}
