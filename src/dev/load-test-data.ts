import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("contests").deleteMany({});

  const resp = await client.collection("contests").insertMany([
    {
      id: "cognitive-building-bricks",
      categoryName: "Business/Company",
      contestName: "Luminara Luxe",
      description: `
      "Ignite Serenity, Illuminate Moments". 
      Luminara Luxe is a candle brand that brings a touch of luxury to every space. 
      It is dedicated to creating scents that evoke tranquility and elevate the ambiance.
      `,
      names: [
        {
          id: "mind-assembly",
          name: "Mind Light",
          timestamp: new Date(),
        },
        {
          id: "brain-scaffold",
          name: "Brain Light",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: "educating-people-about-sustainable-food-production",
      categoryName: "Magazine/Newsletter",
      contestName:
        "Educating people about tranquility and elevate the ambiance",
      description: `
      Educating people about tranquility and elevate the ambiance
      `,
      names: [],
    },
    {
      id: "big-data-analytics-for-cash-circulation",
      categoryName: "Illuminating Insights",
      contestName: "How Big Data Analytics Energizes the Candle Industry's Cash Circulation",
      description: `
      In an era where digital intelligence illuminates every aspect of commerce, even the time-honored tradition of candle making finds itself alight with the brilliance of big data analytics. Within the flicker of each flame lies a wealth of insights waiting to be harnessed, 
      transforming not just the ambiance of a room, but also the dynamics of an entire industry's economic flow.    `,
      names: [
        {
          id: "cash-view",
          name: "Cash View",
          timestamp: new Date(),
        },
        {
          id: "currency-map",
          name: "Currency Map",
          timestamp: new Date(),
        },
        {
          id: "cash-board",
          name: "Cash Board",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: "free-programming-books",
      categoryName: "Website",
      contestName: "Free books",
      description: `
A list of free online books, categorized by ingredients/smells
    `,
      names: [],
    },
  ]);

  console.info("Inserted Contests:", resp.insertedCount);

  stopClient();
}

main();