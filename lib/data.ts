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

export const services: Service[] = [
  {
    id: 1,
    date: "2024-01-06T10:00:00Z",
    problem: "Plumbing leak",
    status: Status.Assigned,
    technician: "Manoj Kumar",
    price: 600,
    address: "14/96, Road Number 46A Block C, Shivaji Park",
    detail:
      "There is a plumbing leak in the bathroom. Water is dripping continuously from the sink faucet, causing water wastage and potential damage to the restroom fixtures. Immediate attention is required to fix the leak and prevent further water damage.",
  },
  {
    id: 2,
    date: "2024-01-06T11:30:00Z",
    problem: "Wi-Fi outage",
    status: Status.Completed,
    technician: "Rajesh Gupta",
    price: 400,
    address: "25/78, Street Number 12B, Gandhi Nagar",
    detail:
      "The Wi-Fi network is currently experiencing an outage. Users are unable to connect to the internet, affecting their ability to work, stream content, or use online services. Please investigate and resolve the issue as soon as possible to restore internet connectivity for the affected individuals.",
  },
  {
    id: 3,
    date: "2024-01-02T16:30:00Z",
    problem: "Pests infestation",
    status: Status.Assigned,
    technician: "Amit Sharma",
    price: 800,
    address: "9/45, Park Avenue, Civil Lines",
    detail:
      "The property is facing a severe pests infestation. There is a presence of rodents and insects, including mice, rats, cockroaches, and ants, causing health and hygiene concerns. Immediate pest control measures are required to eliminate the infestation and ensure a safe living or working environment.",
  },
  {
    id: 4,
    date: "2024-01-08T08:45:00Z",
    problem: "Broken washing machine",
    status: Status.Assigned,
    technician: "Sandeep Patel",
    price: 500,
    address: "67/32, Phase 3, Jubilee Hills",
    detail:
      "The washing machine in the laundry room is broken and not functioning properly. It does not start, and there is a strange noise coming from within when powered on. The inability to use the washing machine is causing inconvenience to residents who rely on it for their laundry needs.",
  },
  {
    id: 5,
    date: "2024-01-09T14:15:00Z",
    problem: "Clogged drain",
    status: Status.Pending,
    technician: "Neha Shah",
    price: 300,
    address: "14/23, Sector 8, Vaishali",
    detail:
      "One of the drains in the kitchen sink is completely clogged. Water does not go down the drain, leading to slow drainage and potential water overflow. It is essential to clear the blockage and restore proper drainage to prevent further water damage or unsanitary conditions.",
  },
  {
    id: 6,
    date: "2024-01-07T19:30:00Z",
    problem: "Electricity outage",
    status: Status.Pending,
    technician: "Deepak Sharma",
    price: 200,
    address: "48/15, Nandanvan Society, Prabhat Road",
    detail:
      "There is a sudden electricity outage in the area. All electrical appliances and lights are not functioning due to the power cut. It is causing inconvenience and hindering daily activities. The issue needs prompt attention and resolution to restore electricity supply.",
  },
  {
    id: 7,
    date: "2024-01-07T13:00:00Z",
    problem: "Air conditioning not working",
    status: Status.Assigned,
    technician: "Suresh Trivedi",
    price: 700,
    address: "29/7, Suman Nagar, Aundh",
    detail:
      "The air conditioning system is not working in one of the rooms. The AC unit fails to cool the room and blows warm air instead. It hampers the comfortable and pleasant environment required for the residents/occupants. Please diagnose and fix the AC malfunction as soon as possible.",
  },
  {
    id: 8,
    date: "2024-01-10T10:30:00Z",
    problem: "Leaky roof",
    status: Status.Completed,
    technician: "Ravi Verma",
    price: 900,
    address: "87/5, Lake View Apartments, Powai",
    detail:
      "There is a leak in the roof of the building. Water drips from the ceiling, leading to water stains and structural damage. The leakage needs immediate repair to prevent further deterioration of the roof and potential harm to the residents and their belongings.",
  },
  {
    id: 9,
    date: "2024-01-08T19:15:00Z",
    problem: "Noisy neighbors",
    status: Status.Completed,
    technician: "Anita Gupta",
    price: 250,
    address: "62/18, Model Town, Jaipur",
    detail:
      "The neighbors in the adjacent apartment are causing excessive noise. They frequently play loud music, have late-night gatherings, and create disturbances. The noise negatively impacts the peace and tranquility of the surroundings. Kindly address the issue and ensure compliance with noise regulations.",
  },
  {
    id: 10,
    date: "2024-01-09T11:00:00Z",
    problem: "Faulty electrical wiring",
    status: Status.Pending,
    technician: "Vijay Singh",
    price: 450,
    address: "21/34, Rajendra Nagar, Patna",
    detail:
      "There is a fault in the electrical wiring of the building. Frequent power fluctuations, short circuits, and sparks from sockets have been observed. The faulty wiring poses a fire hazard and risks electrical damage to appliances. It is crucial to inspect and rectify the electrical issues without delay.",
  },
  {
    id: 11,
    date: "2024-01-07T08:00:00Z",
    problem: "Garden maintenance",
    status: Status.Assigned,
    technician: "Pooja Sharma",
    price: 350,
    address: "10/56, Green Gardens, Pimpri",
    detail:
      "The garden requires maintenance and attention. Overgrown grass, untrimmed bushes, and wilted plants have deteriorated the garden's overall appearance. Regular pruning, watering, and cleaning are necessary to restore the garden's beauty and create a pleasant outdoor space.",
  },
  {
    id: 12,
    date: "2024-01-10T15:45:00Z",
    problem: "Roach infestation",
    status: Status.Completed,
    technician: "Sanjay Verma",
    price: 550,
    address: "17/89, Orchard Street, Coimbatore",
    detail:
      "The property is infested with cockroaches. They are present in the kitchen, bathroom, and other areas, posing health risks and unhygienic conditions. Immediate pest control measures, including thorough cleaning and extermination, are required to eliminate the roach infestation.",
  },
  {
    id: 13,
    date: "2024-01-08T16:30:00Z",
    problem: "Broken window",
    status: Status.Assigned,
    technician: "Arun Kumar",
    price: 320,
    address: "35/42, Sunshine Apartments, Indore",
    detail:
      "One of the windows in the living room is broken. It is cracked and does not close properly, allowing outside elements and potential security threats to enter the premises. Repair or replacement of the window pane is necessary to ensure the safety and security of the residents.",
  },
  {
    id: 14,
    date: "2024-01-07T10:45:00Z",
    problem: "Heating system malfunction",
    status: Status.Assigned,
    technician: "Nisha Reddy",
    price: 650,
    address: "8/72, Winter Lane, Udaipur",
    detail:
      "The heating system is malfunctioning in the building. The radiators do not emit heat, causing discomfort during cold weather. It is essential to restore the heating system's functionality to maintain a warm and cozy environment for the residents.",
  },
  {
    id: 15,
    date: "2024-01-09T09:30:00Z",
    problem: "Leaky faucet",
    status: Status.Completed,
    technician: "Rajiv Gupta",
    price: 280,
    address: "43/21, Waterfall Colony, Bhubaneswar",
    detail:
      "There is a leaky faucet in the bathroom. Water continuously drips from the faucet, leading to wastage and potential water damage. The faulty faucet needs immediate repair or replacement to conserve water and prevent further leaks.",
  },
  {
    id: 16,
    date: "2024-01-07T12:15:00Z",
    problem: "Faulty intercom system",
    status: Status.Assigned,
    technician: "Sakshi Sharma",
    price: 380,
    address: "19/63, Harmony Street, Lucknow",
    detail:
      "The intercom system in the building is faulty. It does not function properly, preventing residents from communicating with each other and granting access to visitors. The intercom requires prompt repair to restore its functionality and ensure smooth communication within the premises.",
  },
  {
    id: 17,
    date: "2024-01-10T13:45:00Z",
    problem: "Broken staircase railing",
    status: Status.Pending,
    technician: "Aditya Singh",
    price: 420,
    address: "76/28, Ascend Heights, Ranchi",
    detail:
      "The railing on one of the staircases has broken. It poses a safety risk to individuals using the stairs, especially children and elderly residents. Immediate repair or replacement of the broken railing is essential to prevent accidents and ensure the staircase's stability.",
  },
  {
    id: 18,
    date: "2024-01-08T14:30:00Z",
    problem: "Malfunctioning garage door",
    status: Status.Assigned,
    technician: "Shalini Patel",
    price: 530,
    address: "51/23, Car Park Avenue, Chandigarh",
    detail:
      "The garage door is malfunctioning and does not open or close properly. It affects the residents' ability to enter or exit the garage safely and securely. The garage door mechanism needs inspection and repair to restore its normal functioning.",
  },
  {
    id: 19,
    date: "2024-01-09T17:00:00Z",
    problem: "Flickering lights",
    status: Status.Pending,
    technician: "Rakesh Sharma",
    price: 370,
    address: "29/45, Brightville, Faridabad",
    detail:
      "The lights in several rooms are flickering intermittently. It causes discomfort, strain on the eyes, and potential disruptions in daily activities. Identifying and fixing the underlying electrical issue is necessary to ensure consistent and stable lighting throughout the property.",
  },
  {
    id: 20,
    date: "2024-01-07T16:15:00Z",
    problem: "Faulty alarm system",
    status: Status.Completed,
    technician: "Meera Verma",
    price: 490,
    address: "12/76, Secure Street, Ahmedabad",
    detail:
      "The security alarm system is faulty and does not work as intended. It fails to detect intrusions or sound the alarm, compromising the safety and security of the premises. Prompt repair and testing of the alarm system are needed to restore its effectiveness and provide reliable security measures.",
  },
];
