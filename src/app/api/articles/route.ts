import { connect } from "@/DBconfig/dbConfig";
import Article from "@/models/articleModel";
import axios from "axios";
import { getDataFromToken} from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

connect();

export async function GET() {
  try {
      //  const reqBody = await request.json();
      //  console.log(reqBody);

    const articles = await Article.find();

    // for (const article of articles) {
    //   const authorId = article.author;
    //   console.log(authorId);
    //   console.log(await User.findById(authorId));
    // }


    return NextResponse.json({
      message: "articles found",
      data: articles,
      success: true,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // console.log(author);
    const reqBody = await request.json();
    const { title, description, publishedOn, url, tags } = reqBody;
    console.log(reqBody);
    const author = getDataFromToken( request);
    console.log('author = '+author);
    // const articles = await Article.find();

    // console.log(articles);

    const result = await Article.create({
      title,
      description,
      publishedOn,
      url,
      author,
      tags,
    });
    console.log(result);
    return NextResponse.json({
      message: "article created successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
