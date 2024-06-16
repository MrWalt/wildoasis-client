import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

// These functions need to be called the http verb otherwise they wont work "POST, GET, PUT, DELETE..."
export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch (err) {
    return Response.json({ message: "Cabin not found" });
  }
}
export async function POST() {}
