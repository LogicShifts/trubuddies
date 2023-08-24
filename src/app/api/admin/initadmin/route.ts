// pages/api/user.js
import { connect } from "@/DBconfig/dbConfig";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import UserRole from "@/models/userRoleModel";
import { NextRequest, NextResponse } from "next/server";



connect();

export async function GET(req:NextRequest, res:NextResponse)  {
  
      try {

        await initRoles();
        const adminRole = await UserRole.findOne({ roleName: "admin"});
        
        // Create a new user and assign the admin role to them
        let admin = await User.findOne({ role: adminRole._id });
        if(!admin){
            console.log("No admin role")
           admin = await initAdmin(adminRole);
        }
        return NextResponse.json({
            message:"admin found",
            data: admin.email,
            success: true,
        })

       

  }
  catch (err:any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
async function initRoles(){
    const roles = ['admin', 'buddy', 'truBuddy', 'support'];
    for (const roleName of roles){
        const userRole = await UserRole.findOne({ roleName: roleName });
        if(!userRole){
            const userRole = await new UserRole({ roleName: roleName });
            console.log(userRole.save());
        }
    }
}
async function initAdmin(adminRole: any){

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash("truBuddy@admin", salt);

   // Calculate the next available unique user ID
   const nextUserId = 1;

    //create user
    const newUser = new User({ userId: nextUserId, email:"admin@truBuddy.com", displayName:"Admin", password: hashedPassword, role:adminRole._id, isVerified:true });

    //saving user in the database
    const savedUser = await newUser.save();
    console.log(savedUser);
    return savedUser;
}
