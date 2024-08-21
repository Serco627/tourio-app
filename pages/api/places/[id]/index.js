import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);
    response.status(200).json(place);
  } else if (request.method === "PUT") {
    await Place.findByIdAndUpdate(id, { $set: request.body });
    response.status(200).json({ status: "updated place" });
  } else if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    response.status(200).json({ status: "deleted" });
  } else {
    return response.status(404).json({ status: "Not found" });
  }
}
