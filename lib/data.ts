import { Service, Status } from "@/lib/types";

export const kpis = [
  {
    name: "Revenue",
    value: "₹38,600",
  },
  {
    name: "Requests available",
    value: 12,
  },
  {
    name: "Requests pending",
    value: 4,
  },
  {
    name: "Requests completed",
    value: 46,
  },
];

export const services: Service[] = [
  {
    id: 1,
    problem: "Plumbing leak",
    status: Status.Assigned,
    address: "14/96, Road Number 46A Block C, Shivaji Park",
  },
  {
    id: 2,
    problem: "Wi-Fi outage",
    status: Status.Assigned,
    address: "25/78, Street Number 12B, Gandhi Nagar",
  },
  {
    id: 3,
    problem: "Pests infestation",
    status: Status.Pending,
    address: "9/45, Park Avenue, Civil Lines",
  },
  {
    id: 4,
    problem: "Broken washing machine",
    status: Status.Assigned,
    address: "67/32, Phase 3, Jubilee Hills",
  },
  {
    id: 5,
    problem: "Clogged drain",
    status: Status.Pending,
    address: "14/23, Sector 8, Vaishali",
  },
  {
    id: 6,
    problem: "Electricity outage",
    status: Status.Pending,
    address: "48/15, Nandanvan Society, Prabhat Road",
  },
  {
    id: 7,
    problem: "Air conditioning not working",
    status: Status.Assigned,
    address: "29/7, Suman Nagar, Aundh",
  },
  {
    id: 8,
    problem: "Leaky roof",
    status: Status.Pending,
    address: "87/5, Lake View Apartments, Powai",
  },
  {
    id: 9,
    problem: "Noisy neighbors",
    status: Status.Assigned,
    address: "62/18, Model Town, Jaipur",
  },
  {
    id: 10,
    problem: "Faulty electrical wiring",
    status: Status.Pending,
    address: "21/34, Rajendra Nagar, Patna",
  },
  {
    id: 11,
    problem: "Garden maintenance",
    status: Status.Assigned,
    address: "10/56, Green Gardens, Pimpri",
  },
  {
    id: 12,
    problem: "Roach infestation",
    status: Status.Pending,
    address: "17/89, Orchard Street, Coimbatore",
  },
  {
    id: 13,
    problem: "Broken window",
    status: Status.Assigned,
    address: "35/42, Sunshine Apartments, Indore",
  },
  {
    id: 14,
    problem: "Heating system malfunction",
    status: Status.Assigned,
    address: "8/72, Winter Lane, Udaipur",
  },
  {
    id: 15,
    problem: "Leaky faucet",
    status: Status.Pending,
    address: "43/21, Waterfall Colony, Bhubaneswar",
  },
  {
    id: 16,
    problem: "Faulty intercom system",
    status: Status.Assigned,
    address: "19/63, Harmony Street, Lucknow",
  },
  {
    id: 17,
    problem: "Broken staircase railing",
    status: Status.Pending,
    address: "76/28, Ascend Heights, Ranchi",
  },
  {
    id: 18,
    problem: "Malfunctioning garage door",
    status: Status.Assigned,
    address: "51/23, Car Park Avenue, Chandigarh",
  },
  {
    id: 19,
    problem: "Flickering lights",
    status: Status.Pending,
    address: "29/45, Brightville, Faridabad",
  },
  {
    id: 20,
    problem: "Faulty alarm system",
    status: Status.Assigned,
    address: "12/76, Secure Street, Ahmedabad",
  },
];

export const revenue = [
  { name: "Jan", value: "12300" },
  { name: "Feb", value: "18100" },
  { name: "Mar", value: "20900" },
  { name: "Apr", value: "18100" },
  { name: "May", value: "21100" },
  { name: "Jun", value: "25300" },
  { name: "Jul", value: "24200" },
  { name: "Aug", value: "26100" },
  { name: "Sep", value: "31300" },
  { name: "Oct", value: "30200" },
  { name: "Nov", value: "32800" },
  { name: "Dec", value: "38600" },
];
