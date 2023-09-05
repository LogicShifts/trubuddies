

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import Chat from "@/models/chatModel";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import UserRole from "@/models/userRoleModel";


connect();

export async function POST(request: NextRequest) {
  try {
    // Extract the user ID from the request token
    const userId = getDataFromToken(request);

    //user must be a buddy
    const user  = await User.findById(userId);
    const role = await UserRole.findById(user.role);

    if (role.roleName.toLowerCase() !== "buddy".toLowerCase()) {
        return NextResponse.json(
          {
            success: false,
            message: "User is not an buddy",
          },
          { status: 403 }
        );
      }

    // Get the search query from the request body
    const { query } = await request.json();


    const excludedRoles = await UserRole.find({
        $or: [{roleName: "admin"},{roleName:"support"},{roleName: "buddy"}]
    });

    // Find users that match the search query
    const users = await User.find({
        $and: [
          {
            $or: [
              { displayName: { $regex: query, $options: "i" } },
              //{ email: { $regex: query, $options: "i" } },
            ],
          },
          { role: { $nin: excludedRoles } },
        ],
      })
        .populate("role", "roleName")
        .select("_id displayName email role");

    // // Create a new chat document
    // const chat = new Chat({
    //   participants: [userId],
    //   messages: [],
    // });

    // // Save the chat document to the database
    // await chat.save();

    return NextResponse.json({
      success: true,
      message: "search successful",
      data: {
        users,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



export async function GET(request: NextRequest) {
    try {
      // Extract the user ID from the request token
      const userId = getDataFromToken(request);
  
      // Get the search query from the request body
      const { query } = await request.json();
  
  
      const excludedRoles = await UserRole.find({
          $or: [{roleName: "admin"},{roleName:"support"}]
      });
  
      // Find users that match the search query
      const users = await User.find({
          $and: [
            {
              $or: [
                { displayName: { $regex: query, $options: "i" } },
                //{ email: { $regex: query, $options: "i" } },
              ],
            },
            { role: { $nin: excludedRoles } },
          ],
        })
          .populate("role", "roleName")
          .select("_id displayName email role");
  
      // // Create a new chat document
      // const chat = new Chat({
      //   participants: [userId],
      //   messages: [],
      // });
  
      // // Save the chat document to the database
      // await chat.save();
  
      return NextResponse.json({
        success: true,
        message: "search successful",
        data: {
          //users,
        },
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }