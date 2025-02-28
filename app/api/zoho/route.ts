import { NextResponse } from "next/server";

const ZOHO_API_URL = "https://www.zohoapis.com/crm/v2/Leads";
const TOKEN_URL = "https://accounts.zoho.com/oauth/v2/token";

async function getAccessToken() {
	const params = new URLSearchParams({
		client_id: process.env.ZOHO_CLIENT_ID!,
		client_secret: process.env.ZOHO_CLIENT_SECRET!,
		refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
		grant_type: "refresh_token",
	});

	const response = await fetch(TOKEN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: params.toString(),
	});

	const data = await response.json();
	return data.access_token;
}

export async function POST(req: Request) {
	try {
		const { name, email } = await req.json();
		const accessToken = await getAccessToken();

		const response = await fetch(ZOHO_API_URL, {
			method: "POST",
			headers: {
				"Authorization": `Zoho-oauthtoken ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data: [{ Last_Name: name, Email: email }] }),
		});

        const result = await response.json();

		return NextResponse.json(result);
    } catch (error) {
       return NextResponse.json(
			{ error: "Failed to create lead", reason: error },
			{ status: 500 },
		);
	}
}
