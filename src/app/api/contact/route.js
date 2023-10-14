import dbConnect from "@/config/dbConnect";
import Contact from "@/models/route";
import { NextResponse } from "next/server";

// FUNCTION TO MAKE POST REQ API

export async function POST(req, res) {
  try {
    // fteching body from req. json
    const body = await req.json();
    await dbConnect();

    // create userdata and insert in db
    await Contact.create(body);

    // return data in response
    return NextResponse.json(
      {
        success: true,
        message: "message sent successfully !",
        body: body,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "server error,fix it",
      },
      {
        status: 200,
      }
    );
  }
}

// FUNCTION TO MAKE GET API
// export async function GET(request) {
//     try {

//         await dbConnect();
//         // return new Response('Hello, Next.js! i am direct response')
//         return  NextResponse.json('Hello, Next.js!,i am next response')

//     } catch (error) {

//     }
//   }
