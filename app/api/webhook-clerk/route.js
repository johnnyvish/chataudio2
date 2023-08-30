import { Webhook } from "svix";
import { headers } from "next/headers";
import connectDB from "@/lib/mongodb";
import User from "@/models/user";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

export async function POST(req) {
  const payload = await req.json();
  const payloadString = JSON.stringify(payload);
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    return new Response("Error occured", {
      status: 400,
    });
  }

  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };

  const wh = new Webhook(webhookSecret);

  let evt;
  try {
    evt = wh.verify(payloadString, svixHeaders);
  } catch (error) {
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id, first_name, last_name, image_url } = evt.data;
  const { email_address } = evt.data.email_addresses[0];
  const eventType = evt.type;

  if (eventType === "user.created") {
    await connectDB();
    await User.create({
      firstName: first_name,
      lastName: last_name,
      userId: id,
      email: email_address,
      profileImage: image_url,
    });
  }

  return new Response("", {
    status: 201,
  });
}
