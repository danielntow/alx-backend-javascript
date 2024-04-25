import ClassRoom from "./0-classroom";

// main.js (continued)
const initializeRooms = () => {
  const sizes = [19, 20, 34];
  const rooms = sizes.map((size) => new ClassRoom(size));
  return rooms;
};

export default initializeRooms;
