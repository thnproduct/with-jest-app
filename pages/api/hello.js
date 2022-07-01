// /pages/api/[animal].js
export default function handleHello(req, res) {
  res.end(JSON.stringify({ message: `HelloWorld` }));
}
