let orders = [];


export async function POST(req) {
const body = await req.json();
const newOrder = {
id: Date.now(),
items: body.items,
total: body.total,
status: "NEW",
createdAt: new Date()
};
orders.push(newOrder);
return Response.json(newOrder);
}


export async function GET() {
return Response.json(orders);
}