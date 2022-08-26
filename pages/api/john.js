// /pages/api/john.js
export default function handler(req, res) {
  console.log("hi there hi there")
  res.status(200).json({ name: 'John' })
}
