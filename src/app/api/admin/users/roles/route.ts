import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { useRouter } from "next/router";
import UserRole from "@/models/userRoleModel";

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

    // Get all roles
    const roles = await UserRole.find({});

    return NextResponse.json({
      success: true,
      message: "Roles retrieved successfully",
      data: roles,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}