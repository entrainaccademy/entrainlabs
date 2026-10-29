import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, batchType = "General", batchName = "General", sourcePage = "Website" } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !rawPrivateKey || !spreadsheetId) {
      console.error("Missing Google Sheets credentials in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please contact administrator." },
        { status: 500 }
      );
    }

    // Replace literal '\n' characters if private key was passed as single-line string
    const privateKey = rawPrivateKey.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Format IST timestamp for readability
    const timestamp = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    const newRow = [
      timestamp,
      name.trim(),
      phone.trim(),
      email.trim(),
      batchType.trim(),
      batchName.trim(),
      sourcePage.trim(),
      "Initiated",
      "Saved",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:I",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [newRow],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Enrollment details saved successfully.",
    });
  } catch (error) {
    console.error("Error saving enrollment to Google Sheets:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save submission. Please try again later." },
      { status: 500 }
    );
  }
}
