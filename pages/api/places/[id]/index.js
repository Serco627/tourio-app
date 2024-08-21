import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    if (!id) {
      return response
        .status(400)
        .json({ message: "Bad Request: ID is required" });
    }

    try {
      const place = await Place.findById(id);
      if (!place) {
        return response.status(404).json({ message: "Place not found" });
      }
      return response.status(200).json(place);
    } catch (error) {
      console.error("Error fetching place:", error);
      return response.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return response.status(405).json({ message: "Method Not Allowed" });
  }
}
