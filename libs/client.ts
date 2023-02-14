import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.user.create({
  data:{
  email:"laugh120@gmail.com", 
  name: "sangmoon"
  }, 
})