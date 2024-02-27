import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({time: new Date().toLocaleString()});
}

// cnnstr: mongodb+srv://tumivn:<password>@cluster0.l5fisqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0