// src/app/api/admin/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import UserRole from "@/models/userRoleModel";
import { useRouter } from "next/router";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({ _id: user.role });

    console.log(role.roleName);
    // Check if the user is an admin
    if (role.roleName.toLowerCase() !== "admin".toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not an admin",
        },
        { status: 403 }
      );
    }

    // Get all users
    const users = await User.find({})
      .select("-password")
      .populate("role", "roleName _id")
      .exec();

    return NextResponse.json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({ _id: user.role });

    //console.log(role.roleName);
    // Check if the user is an admin
    if (role.roleName.toLowerCase() !== "admin".toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not an admin",
        },
        { status: 403 }
      );
    }
    
    const { updateUserId, isActive } = await request.json();
    //console.log(await request.json())
    // const router = useRouter();
    // const { userId } = router.query;
    //const chatId = request.nextUrl.pathname.split("/").pop(); // Get the chat ID from the URL
   // console.log(delUserId)

    const updateUser = await User.findOne({ _id: updateUserId }).select("-password");
    //console.log(deactUserId)
    //console.log(updateUser.role?updateUser.role:'gfg')
    const updateUserRole =updateUser.role? await UserRole.findOne({ _id: updateUser.role }): 'empty';
    console.log(updateUserRole)
   // Check if the user is an admin
if (updateUserRole && updateUserRole.roleName && updateUserRole.roleName.toLowerCase() === "admin") {
    return NextResponse.json(
      {
        success: false,
        message: "Admin users cannot be deactivated",
      },
      { status: 403 }
    );
  }
  
  await User.findByIdAndUpdate(updateUserId, { isActive: isActive });
  
  return NextResponse.json({
    success: true,
    message: "User deactivated successfully",
  });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
