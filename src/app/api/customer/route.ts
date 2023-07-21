import { Customer } from "@/app/type";
import { NextResponse } from "next/server";

const data: Customer[] = [
  { id: 1, name: "John", value: 45, group: "A" },
  { id: 2, name: "Sarah", value: 72, group: "B" },
  { id: 3, name: "David", value: 17, group: "A" },
  { id: 4, name: "Emily", value: 94, group: "C" },
  { id: 5, name: "Michael", value: 28, group: "B" },
  { id: 6, name: "Jessica", value: 62, group: "C" },
  { id: 7, name: "Andrew", value: 39, group: "A" },
  { id: 8, name: "Grace", value: 81, group: "B" },
  { id: 9, name: "Anthony", value: 12, group: "A" },
  { id: 10, name: "Rachel", value: 76, group: "C" },
  { id: 11, name: "Thomas", value: 55, group: "B" },
  { id: 12, name: "Olivia", value: 89, group: "A" },
  { id: 13, name: "Daniel", value: 33, group: "C" },
  { id: 14, name: "Madison", value: 70, group: "B" },
  { id: 15, name: "Nicholas", value: 25, group: "A" },
  { id: 16, name: "Lauren", value: 60, group: "C" },
  { id: 17, name: "Christopher", value: 47, group: "B" },
  { id: 18, name: "Ava", value: 97, group: "A" },
  { id: 19, name: "Tyler", value: 20, group: "C" },
  { id: 20, name: "Sophia", value: 84, group: "B" },
  { id: 21, name: "Anderson", value: 28, group: "A" },
  { id: 22, name: "Andy", value: 64, group: "C" },
  { id: 23, name: "Tommy", value: 28, group: "B" },
];

export async function GET(request: Request) {
  return NextResponse .json({ data })
}

