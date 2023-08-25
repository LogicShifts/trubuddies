import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import UserRole from "@/models/userRoleModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({_id: user.role});
    return NextResponse.json({ message: "User found!", data: {user:user, role:role} });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
