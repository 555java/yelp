const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./ceedHelpers");
const Campground = require("../models/campground");
const Review = require("../models/review");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/yelp-camp");
  console.log("database connected");
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  await Review.deleteMany({});
  // for (let i = 0; i < 8; i++) {
  //   const random1000 = Math.floor(Math.random() * 1000);
  //   const price = Math.floor(Math.random() * 30) + 10;
  //   const camp = new Campground({
  //     author: "61e0132f72304a72d02f259f",
  //     title: `${sample(descriptors)} ${sample(places)}`,
  //     location: `${cities[random1000].city}, ${cities[random1000].state}`,
  //     images: [
  //       {
  //         url: "https://source.unsplash.com/collection/483251",
  //         filename: 00000,
  //       },
  //     ],
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum, rerum unde accusamus nobis possimus natus quaerat voluptas corporis voluptatibus?",
  //     price: price,
  //   });
  //   await camp.save();
  // }
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("conection closed");
});
